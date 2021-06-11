/*
 * Marketplace specific configuration.
 *
 * Every filter needs to have following keys:
 * - id:     Unique id of the filter.
 * - label:  The default label of the filter.
 * - type:   String that represents one of the existing filter components:
 *           BookingDateRangeFilter, KeywordFilter, PriceFilter,
 *           SelectSingleFilter, SelectMultipleFilter.
 * - group:  Is this 'primary' or 'secondary' filter?
 *           Primary filters are visible on desktop layout by default.
 *           Secondary filters are behind "More filters" button.
 *           Read more from src/containers/SearchPage/README.md
 * - queryParamNames: Describes parameters to be used with queries
 *                    (e.g. 'price' or 'pub_amenities'). Most of these are
 *                    the same between webapp URLs and API query params.
 *                    You can't change 'dates', 'price', or 'keywords'
 *                    since those filters are fixed to a specific attribute.
 * - config: Extra configuration that the filter component needs.
 *
 * Note 1: Labels could be tied to translation file
 *         by importing FormattedMessage:
 *         <FormattedMessage id="some.translation.key.here" />
 *
 * Note 2: If you need to add new custom filter components,
 *         you need to take those into use in:
 *         src/containers/SearchPage/FilterComponent.js
 *
 * Note 3: If you just want to create more enum filters
 *         (i.e. SelectSingleFilter, SelectMultipleFilter),
 *         you can just add more configurations with those filter types
 *         and tie them with correct extended data key
 *         (i.e. pub_<key> or meta_<key>).
 */

export const filters = [
  {
    id: 'dates',
    label: 'Dates',
    type: 'BookingDateRangeFilter',
    group: 'primary',
    // Note: BookingDateRangeFilter is fixed filter,
    // you can't change "queryParamNames: ['dates'],"
    queryParamNames: ['dates'],
    config: {},
  },
  {
    id: 'price',
    label: 'Price',
    type: 'PriceFilter',
    group: 'primary',
    // Note: PriceFilter is fixed filter,
    // you can't change "queryParamNames: ['price'],"
    queryParamNames: ['price'],
    // Price filter configuration
    // Note: unlike most prices this is not handled in subunits
    config: {
      min: 0,
      max: 10000,
      step: 1,
    },
  },
  {
    id: 'keyword',
    label: 'Keyword',
    type: 'KeywordFilter',
    group: 'primary',
    // Note: KeywordFilter is fixed filter,
    // you can't change "queryParamNames: ['keywords'],"
    queryParamNames: ['keywords'],
    // NOTE: If you are ordering search results by distance
    // the keyword search can't be used at the same time.
    // You can turn on/off ordering by distance from config.js file.
    config: {},
  },
  {
    id: 'Orientation',
    label: 'Orientation',
    type: 'SelectSingleFilter',
    group: 'primary',
    queryParamNames: ['pub_Orientation'],
    config: {
      searchMode: 'has_all',
      // "key" is the option you see in Flex Console.
      // "label" is set here for the UI only.
      // Note: label is not added through the translation files
      // to make filter customizations a bit easier.
      options: [
        { key: 'Horizontal', label: 'Horizontal' },
        { key: 'Vertical', label: 'Vertical' },
        { key: 'Square', label: 'Square' },
 
      ],
    },
  },
  {
    id: 'frame',
    label: 'Frame',
    type: 'SelectSingleFilter',
    group: 'primary',
    queryParamNames: ['pub_frame'],
    config: {
      searchMode: 'has_any',
      options: [
        { key: 'Framed', label: 'Framed' },
        { key: 'Unframed', label: 'Unframed' },
 
      ],
    },
  },
  {
    id: 'medium',
    label: 'Medium',
    type: 'SelectSingleFilter',
    group: 'primary',
    queryParamNames: ['pub_medium'],
    config: {
      searchMode: 'has_any',
      options: [
        { key: 'Oil', label: 'Oil' },
        { key: 'Acrylic', label: 'Acrylic' },
        { key: 'Watercolor', label: 'Watercolor' },
      ],
    },
  },
  {
    id: 'size',
    label: 'Size',
    type: 'SelectSingleFilter',
    group: 'primary',
    queryParamNames: ['pub_size'],
    config: {
      searchMode: 'has_any',
      options: [
        { key: 'Mini (less than 10”)', label: 'Mini (less than 10”)' },
        { key: 'Small (10” to 20”)', label: 'Small (10” to 20”)' },
        { key: 'Medium (20” to 40”)', label: 'Medium (20” to 40”)' },
        { key: 'Large (40” to 60”)', label: 'Large (40” to 60”)' },
        { key: 'Extra Large (over 60”)', label: 'Extra Large (over 60”)' },
  
      ],
    },
  },
  {
    id: 'amenities',
    label: 'Collection',
    type: 'SelectMultipleFilter',
    group: 'primary',
    queryParamNames: ['pub_amenities'],
    config: {
      // Optional modes: 'has_all', 'has_any'
      // https://www.sharetribe.com/api-reference/marketplace.html#extended-data-filtering
      searchMode: 'has_all',

      // "key" is the option you see in Flex Console.
      // "label" is set here for this web app's UI only.
      // Note: label is not added through the translation files
      // to make filter customizations a bit easier.
      options: [
        {
          key: 'Abstract',
          label: 'Abstract',
        },
        {
          key: 'Landscape',
          label: 'Landscape',
        },
        {
          key: 'Fine Art',
          label: 'Fine Art',
        },
        {
          key: 'Modern',
          label: 'Modern',
        },
        {
          key: 'Beach',
          label: 'Beach',
        },
        {
          key: 'Impressionist',
          label: 'Impressionist',
        },
        {
          key: 'Ocean',
          label: 'Ocean',
        },
        {
          key: 'Water',
          label: 'Water',
        },
        {
          key: 'Nature',
          label: 'Nature',
        },
        {
          key: 'Mountains',
          label: 'Mountains',
        },
        {
          key: 'Portraits',
          label: 'Portraits',
        },
        {
          key: 'Plein Air',
          label: 'Plein Air',
        },
        {
          key: 'Clouds',
          label: 'Clouds',
        },
        {
          key: 'Flowers',
          label: 'Flowers',
        },
        {
          key: 'Winter scenes',
          label: 'Winter scenes',
        },
        {
          key: 'Birds',
          label: 'Birds',
        },
        {
          key: 'Still life',
          label: 'Still life',
        },
        {
          key: 'Colorful abstract',
          label: 'Colorful abstract',
        },
        {
          key: 'Skulls',
          label: 'Skulls',
        },
        {
          key: 'Nudes',
          label: 'Nudes',
        },
        {
          key: 'Black and white abstract',
          label: 'Black and white abstract',
        },
        {
          key: 'Abstract landscapes',
          label: 'Abstract landscapes',
        },
        {
          key: 'Animals',
          label: 'Animals',
        },
        {
          key: 'Fruit',
          label: 'Fruit',
        },
      ],
    },
  },
];

export const sortConfig = {
  // Enable/disable the sorting control in the SearchPage
  active: true,

  // Note: queryParamName 'sort' is fixed,
  // you can't change it since Flex API expects it to be named as 'sort'
  queryParamName: 'sort',

  // Internal key for the relevance option, see notes below.
  relevanceKey: 'relevance',

  // Keyword filter is sorting the results already by relevance.
  // If keyword filter is active, we need to disable sorting.
  conflictingFilters: ['keyword'],

  options: [
    { key: 'createdAt', label: 'Newest' },
    { key: '-createdAt', label: 'Oldest' },
    { key: '-price', label: 'Lowest price' },
    { key: 'price', label: 'Highest price' },

    // The relevance is only used for keyword search, but the
    // parameter isn't sent to the Marketplace API. The key is purely
    // for handling the internal state of the sorting dropdown.
    { key: 'relevance', label: 'Relevance', longLabel: 'Relevance (Keyword search)' },
  ],
};
