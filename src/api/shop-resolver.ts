import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
    Allow,
    Ctx,
    ListQueryBuilder,
    PaginatedList,
    patchEntity,
    Refund,
    Permission,
    RequestContext,
    Transaction,
    TransactionalConnection,
} from '@vendure/core';

// import {
//     QueryRefundArgs,
//     QueryRefundsArgs,
// } from '../generated-shop-types';



@Resolver()
export class ShopResolver {
    constructor(private connection: TransactionalConnection, private listQueryBuilder: ListQueryBuilder) {}

    // @Query()
    // async refunds(@Ctx() ctx: RequestContext, @Args() args: QueryRefundsArgs) {
    //     return this.listQueryBuilder
    //         .build(Refund, args.options || undefined, { ctx, })
    //         .getManyAndCount()
    //         .then(([items, totalItems]) => ({ items, totalItems, }));
    // }

    // @Query()
    // async refund(@Ctx() ctx: RequestContext, @Args() args: QueryRefundArgs) {
    //     return this.connection.getRepository(ctx, Refund).findOne({ where: { id: args.id }, relations: { }, });
    // }

}
