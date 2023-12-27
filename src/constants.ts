import { CrudPermissionDefinition } from '@vendure/core';

export const REFUNDS_PLUGIN_OPTIONS = Symbol('REFUNDS_PLUGIN_OPTIONS');
export const loggerCtx = 'RefundsPlugin';
export const refundPermission = new CrudPermissionDefinition('Refund');