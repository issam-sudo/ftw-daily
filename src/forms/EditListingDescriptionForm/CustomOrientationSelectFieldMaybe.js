import React from 'react';
import { required } from '../../util/validators';
import { FieldSelect } from '../../components';

import css from './EditListingDescriptionForm.module.css';

const CustomOrientationSelectFieldMaybe = props => {
  const { name, id, categories, intl } = props;
  const OrientationLabel = intl.formatMessage({
    id: 'EditListingDescriptionForm.OrientationLabel',
  });
  const OrientationPlaceholder = intl.formatMessage({
    id: 'EditListingDescriptionForm.OrientationPlaceholder',
  });
  const OrientationRequired = required(
    intl.formatMessage({
      id: 'EditListingDescriptionForm.OrientationRequired',
    })
  );
  return categories ? (
    <FieldSelect
      className={css.Orientation}
      name={name}
      id={id}
      label={OrientationLabel}
      validate={OrientationRequired}
    >
      <option disabled value="">
        {OrientationPlaceholder}
      </option>
      {categories.map(c => (
        <option key={c.key} value={c.key}>
          {c.label}
        </option>
      ))}
    </FieldSelect>
  ) : null;
};

export default CustomOrientationSelectFieldMaybe;
