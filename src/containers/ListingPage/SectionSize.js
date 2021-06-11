import React from 'react';
import { array, shape, string } from 'prop-types';
 import { FormattedMessage } from '../../util/reactIntl';
import { PropertyGroup } from '../../components';

import css from './ListingPage.module.css';

const SectionSize = props => {
    const { options, publicData } = props;
    if (!publicData) {
      return null;
    }
  
    const sizeOption = publicData && publicData.size ? publicData.size : [];
  
    return (
      <div className={css.sectionFeatures}>
      <h2 className={css.featuresTitle}>
        <FormattedMessage id="ListingPage.sizeTitle" />
      </h2>  
      <PropertyGroup
        id="ListingPage.sizeTitle"
        options={options}
        selectedOptions={sizeOption}
        twoColumns={true}
      />
      
    </div>
      );
 
};

SectionSize.propTypes = {
  options: array.isRequired,
  publicData: shape({
    size: string,
  }).isRequired,
};

export default SectionSize;