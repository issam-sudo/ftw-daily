import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './SectionLocations.module.css';
 
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

 

class LocationImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}


const LazyImage = lazyLoadWithDimensions(LocationImage);

const locationLink = (name, image, searchQuery) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    
    <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={images[name+'.jpg']?.default} alt={name} className={css.locationImage} />
        </div>
      </div>
 
      <div className={css.linkText}>
        <FormattedMessage
          id="SectionLocations.listingsInLocation"
          values={{ location: nameText }}
        />
      </div>
    </NamedLink>
  );
};

const SectionLocations = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);
  const list  = ['Abstract' , 'Landscape', 'Fine Art',
   'Modern', 'Beach', 'Impressionist', 'Ocean',
    'Water', 'Nature', 'Mountains', 'Portraits',
     'Plein Air', 'Clouds' , 'Flowers'   , 'Winter scenes'   ,
      'Birds', 'Still life','Colorful abstract', 'Skulls',
      'Nudes', 'Black and white abstract','Abstract landscapes','Animals','Fruit'    ]
 
  return ( 
   
    <div className={classes}>
    <div className={css.title}>
      <FormattedMessage id="SectionLocations.title" />
    </div>
    <div for className={css.locations}>
 
    {
      
      list.map((item, index) => (
      locationLink(
        list[index],
        list[index],
        '?pub_amenities=has_all%3A'+list[index]
      ))
      )}
  {/*     {locationLink(
        'Rovaniemi',
        rovaniemiImage,
        '?address=Rovaniemi%2C%20Finland&bounds=67.18452510000002%2C27.32667850000007%2C66.1553745%2C24.736871199999996&origin=66.50394779999999%2C25.729390599999988'
      )}
      {locationLink(
        'Ruka',
        rukaImage,
        '?address=Ruka%2C%20Finland&bounds=66.1704578%2C29.14246849999995%2C66.1614402%2C29.110453699999994&origin=66.16594940000002%2C29.12646110000003'
      )} */}
    </div>
  </div>
 
  
  );
};

SectionLocations.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionLocations.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionLocations;
