import React from 'react';
import { array, shape, string } from 'prop-types';
 import { FormattedMessage } from '../../util/reactIntl';
import { PropertyGroup } from '../../components';

import css from './ListingPage.module.css';

const SectionFrame = props => {
    const { options, publicData } = props;
    if (!publicData) {
      return null;
    }
  
    const frameOption = publicData && publicData.frame ? publicData.frame : [];
  
    return (
      <div className={css.sectionFeatures}>
      <h2 className={css.featuresTitle}>
        <FormattedMessage id="ListingPage.frameTitle" />
      </h2>  
      <PropertyGroup
        id="ListingPage.frameTitle"
        options={options}
        selectedOptions={frameOption}
        twoColumns={true}
      />
    </div>
      );
 
};

SectionFrame.propTypes = {
  options: array.isRequired,
  publicData: shape({
    frame: string,
  }).isRequired,
};

export default SectionFrame;