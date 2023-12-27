import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
    Allow,
    Ctx,
    ListQueryBuilder,
    Order,
    patchEntity,
    Refund,
    Permission,
    RequestContext,
    Transaction,
    TransactionalConnection,
    UnauthorizedError,
    UserInputError,
} from '@vendure/core';

import {
    QueryRefundArgs,
    QueryRefundsArgs,
    // MutationCreateRefundArgs,
    // MutationUpdateRefundArgs,
} from '../generated-admin-types';



@Resolver()
export class AdminResolver {
    constructor(private connection: TransactionalConnection, private listQueryBuilder: ListQueryBuilder) {}

    @Query()
    async refunds(@Ctx() ctx: RequestContext, @Args() args: QueryRefundsArgs) {
        return this.listQueryBuilder
            .build(Refund, args.options || undefined, { 
                ctx, 
                relations:['payment',],
            })
            .leftJoin('refund.payment', 'payment')
            .leftJoin('payment.order', 'order')
            .leftJoin('order.channels', 'channel')
            .andWhere('channel.id = :channelId', { channelId: ctx.channelId })
            .getManyAndCount()
            .then(([items, totalItems]) => ({ items, totalItems, }));
    }

    @Query()
    async refund(@Ctx() ctx: RequestContext, @Args() args: QueryRefundArgs) {
        return this.connection.getRepository(ctx, Refund).findOne({ where: { id: args.id }, relations: { }, });
    }

    // @Transaction()
    // @Mutation()
    // async createRefund(@Ctx() ctx: RequestContext, @Args() args: MutationCreateRefundArgs){
    //     const refund = new Refund(args.input);
    //     return this.connection.getRepository(ctx, Refund).save(refund);
    // }

    // @Transaction()
    // @Mutation()
    // async updateRefund( @Ctx() ctx: RequestContext, @Args() args: MutationUpdateRefundArgs) {
    //     const refund = await this.connection.getEntityOrThrow(ctx, Refund, args.input.id, {});
    //     const updatedRefund = patchEntity(refund, args.input);
    //     return this.connection.getRepository(ctx, Refund).save(updatedRefund);
    // }
    
}
