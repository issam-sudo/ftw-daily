import React from 'react';
import { bool } from 'prop-types';
import { FormattedMessage, intlShape } from '../../util/reactIntl';
import { formatMoney } from '../../util/currency';
import { txIsCanceled, txIsDelivered, txIsDeclined } from '../../util/transaction';
 
import { LINE_ITEM_NIGHT, LINE_ITEM_DAY,LINE_ITEM_UNITS, propTypes } from '../../util/types';

import css from './BookingBreakdown.module.css';

const LineItemUnitPrice = props => {
  const { transaction, isProvider,unitType, intl } = props;
  const isNightly = unitType === LINE_ITEM_UNITS;
  let providerTotalMessageId = 'BookingBreakdown.providerTotalDefault';
  if (txIsDelivered(transaction)) {
    providerTotalMessageId = 'BookingBreakdown.providerTotalDelivered';
  } else if (txIsDeclined(transaction)) {
    providerTotalMessageId = 'BookingBreakdown.providerTotalDeclined';
  } else if (txIsCanceled(transaction)) {
    providerTotalMessageId = 'BookingBreakdown.providerTotalCanceled';
  }

  const totalLabel = isProvider ? (
    <FormattedMessage id={providerTotalMessageId} />
  ) : (
    <FormattedMessage id="BookingBreakdown.total" />
  );

  const totalPrice = isProvider
    ? transaction.attributes.payoutTotal
    : transaction.attributes.payinTotal;
//  const formattedTotalPrice = formatMoney(intl, totalPrice);
const formattedTotalPrice = formatMoney(intl, totalPrice);

const unitPurchase = transaction.attributes.lineItems.find(
  item => item.code === unitType && !item.reversal
);
const total = unitPurchase ? formatMoney(intl, unitPurchase.unitPrice) : null;

  return (
    <>
      <hr className={css.totalDivider} />
      <div className={css.lineItemTotal}>
      {console.log(total)}
        <div className={css.totalLabel}>{totalLabel}</div>
      {/*   <div className={css.totalPrice}>{formattedTotalPrice}</div> */}
        <div className={css.totalPrice}>{total}</div>
      </div>
    </>
  );
};

LineItemUnitPrice.propTypes = {
  transaction: propTypes.transaction.isRequired,
  isProvider: bool.isRequired,
  intl: intlShape.isRequired,
};

export default LineItemUnitPrice;
