import React from 'react';
import { FormattedMessage, intlShape } from '../../util/reactIntl';
import { formatMoney } from '../../util/currency';
import { LINE_ITEM_NIGHT, LINE_ITEM_DAY,LINE_ITEM_UNITS, propTypes } from '../../util/types';

import css from './BookingBreakdown.module.css';

const LineItemBasePriceMaybe = props => {
  const { transaction, unitType, intl } = props;
  const isNightly = unitType === LINE_ITEM_UNITS;
  const isDaily = unitType === LINE_ITEM_UNITS;
 /*  const translationKey = isNightly
    ? 'BookingBreakdown.baseUnitNight'
    : isDaily
    ? 'BookingBreakdown.baseUnitDay'
    : 'BookingBreakdown.baseUnitQuantity';
 */

    const translationKey = isNightly
    ? 'BookingBreakdown.baseUnitNight'
    : isDaily
    ? 'BookingBreakdown.baseUnitDay'
    : 'BookingBreakdown.baseUnitQuantity';

  // Find correct line-item for given unitType prop.
  // It should be one of the following: 'line-item/night, 'line-item/day', 'line-item/units', or 'line-item/time'
  // These are defined in '../../util/types';
  const unitPurchase = transaction.attributes.lineItems.find(
    item => item.code === unitType && !item.reversal
  );

 //const quantity = unitPurchase ? unitPurchase.quantity.toString() : null;
 const quantity = unitPurchase ? '1' : null;
  const unitPrice = unitPurchase ? formatMoney(intl, unitPurchase.unitPrice) : null;
  const total = unitPurchase ? formatMoney(intl, unitPurchase.unitPrice) : null;

  return quantity && total ? (
    <div className={css.lineItem}>
      <span className={css.itemLabel}>

        <FormattedMessage id={translationKey} values={{ unitPrice, quantity }} />
      </span>
      <span className={css.itemValue}>{total}</span>
    </div>
  ) : null;
};

LineItemBasePriceMaybe.propTypes = {
  transaction: propTypes.transaction.isRequired,
  unitType: propTypes.bookingUnitType.isRequired,
  intl: intlShape.isRequired,
};

export default LineItemBasePriceMaybe;
