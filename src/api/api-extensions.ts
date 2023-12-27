import gql from 'graphql-tag';

export const commonApiExtensions = gql`

    type RefundList implements PaginatedList {
        items: [Refund!]!
        totalItems: Int!
    }

    extend type Query {
        refunds(options: RefundListOptions): RefundList!
        refund(id: ID!): Refund
    }

    # Auto-generated at runtime
    input RefundListOptions

`;

export const shopApiExtensions = gql`
    ${commonApiExtensions}
`;

export const adminApiExtensions = gql`
    ${commonApiExtensions}

    # extend type Mutation {
    #     # createRefund(input: CreateRefundInput!): Refund!
    #     # updateRefund(input: UpdateRefundInput!): Refund!
    # }

    # input CreateRefundInput {
    # }

    # input UpdateRefundInput {
    #     id: ID!
    # }
`;
