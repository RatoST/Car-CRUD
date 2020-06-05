
const fieldsValue = [{
  label: 'Brand',
  maxLength: 15,
  name: 'brand',
  type: 'text',
}, {
  label: 'Country',
  maxLength: 15,
  name: 'country',
  type: 'text',
}, {
  label: 'Model',
  maxLength: 15,
  name: 'model',
  type: 'text',
}, {
  label: 'Year',
  min: 1900,
  max: 2021,
  name: 'year',
  type: 'number',
}, {
  label: 'Serial Number',
  min: 99999999999,
  max: 1000000000000,
  name: 'serialNum',
  type: 'number',
}, {
  label: 'Description',
  maxLength: 30,
  name: 'description',
  type: 'text',
},
];

export default fieldsValue;
