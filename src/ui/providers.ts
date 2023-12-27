import { CustomerDetailQueryQuery, GET_ORDER, GetOrderQuery, ModalService, NotificationService, OrderDetailFragment, addActionBarItem, addNavMenuItem, addNavMenuSection } from '@vendure/admin-ui/core';
import { ChannelService, Refund, RequestContext } from '@vendure/core';
import { EMPTY, firstValueFrom, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { summate } from '@vendure/common/lib/shared-utils';
import { CUSTOMER_DETAIL_QUERY } from '@vendure/admin-ui/customer';

import { OrderTransitionService } from '@vendure/admin-ui/order';
import { marker as _ } from '@biesbjerg/ngx-translate-extract-marker';
/**
 * Add a partial refund to an order. This happens, for example, when using Gift cards
 */
// type Refund = NonNullable<OrderDetailFragment['refunds']>[number];

export default [
    addNavMenuItem(
        {
            id: 'refunds',
            icon: 'undo',
            label: 'Refunds',
            routerLink: ['/extensions/refunds'],
        },
        'sales'
    ),

];
