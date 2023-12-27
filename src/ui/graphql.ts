import gql from 'graphql-tag';

export const REFUND_FRAGMENT = gql`
    fragment Refund on Refund {
        id
        createdAt
        updatedAt
        items
        shipping
        adjustment
        total
        method
        state
        transactionId
        reason
        lines {
            orderLine {
                id
            }
        orderLineId
        quantity
        refund {
            id
        }
        refundId
        }
        paymentId
        metadata
    }
`;
export const GET_REFUNDS = gql`
    query GetRefunds($options: RefundListOptions) {
        refunds(options: $options) {
            items {
                ...Refund
            }
            totalItems
        }
    }
    ${REFUND_FRAGMENT}
`;

export const GET_REFUND = gql`
    query GetRefund($id: ID!) {
        refund(id: $id) {
            ...Refund
        }
    }
    ${REFUND_FRAGMENT}
`;

// export const CREATE_REFUND = gql`
//     mutation CreateRefund($input: CreateRefundInput!) {
//         createRefund(input: $input) {
//             ...Refund
//         }
//     }
//     ${REFUND_FRAGMENT}
// `;

// export const UPDATE_REFUND = gql`
//     mutation UpdateRefund($input: UpdateRefundInput!) {
//         updateRefund(input: $input) {
//             ...Refund
//         }
//     }
//     ${REFUND_FRAGMENT}
// `;
