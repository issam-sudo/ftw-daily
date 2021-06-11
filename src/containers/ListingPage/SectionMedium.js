import React from 'react';
import { array, shape, string } from 'prop-types';
 import { FormattedMessage } from '../../util/reactIntl';
import { PropertyGroup } from '../../components';

import css from './ListingPage.module.css';

const SectionMedium = props => {
    const { options, publicData } = props;
    if (!publicData) {
      return null;
    }
  
    const mediumOption = publicData && publicData.medium ? publicData.medium : [];
  
    return (
      <div className={css.sectionFeatures}>
      <h2 className={css.featuresTitle}>
        <FormattedMessage id="ListingPage.mediumTitle" />
      </h2>  
      <PropertyGroup
        id="ListingPage.mediumTitle"
        options={options}
        selectedOptions={mediumOption}
        twoColumns={true}
      />
    </div>
      );
 
};

SectionMedium.propTypes = {
  options: array.isRequired,
  publicData: shape({
    medium: string,
  }).isRequired,
};

export default SectionMedium;