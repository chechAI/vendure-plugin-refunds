import { registerRouteComponent } from '@vendure/admin-ui/core';

import { ListComponent } from './components/list.component';

export default [
    registerRouteComponent({
        path: '',
        component: ListComponent,
        title: 'Refunds',
        breadcrumb: 'Refunds',
    }),
];
