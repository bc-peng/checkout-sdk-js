import { merge } from 'lodash';

import { CheckoutSelectors, CheckoutStore } from '../../checkout';
import { OrderActionCreator, OrderRequestBody } from '../../order';
import { WepayRiskClient } from '../../remote-checkout/methods/wepay';
import PaymentActionCreator from '../payment-action-creator';
import { PaymentInitializeOptions, PaymentRequestOptions } from '../payment-request-options';

import CreditCardPaymentStrategy from './credit-card-payment-strategy';

export default class WepayPaymentStrategy extends CreditCardPaymentStrategy {
    constructor(
        store: CheckoutStore,
        orderActionCreator: OrderActionCreator,
        paymentActionCreator: PaymentActionCreator,
        private _wepayRiskClient: WepayRiskClient
    ) {
        super(store, orderActionCreator, paymentActionCreator);
    }

    initialize(options: PaymentInitializeOptions): Promise<CheckoutSelectors> {
        this._wepayRiskClient.initialize();

        return super.initialize(options);
    }

    execute(payload: OrderRequestBody, options?: PaymentRequestOptions): Promise<CheckoutSelectors> {
        const token = this._wepayRiskClient.getRiskToken();
        const payloadWithToken = merge({}, payload, {
            payment: {
                paymentData: {
                    extraData: {
                        riskToken: token,
                    },
                },
            },
        });

        return super.execute(payloadWithToken, options);
    }
}
