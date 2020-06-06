
const fieldsValue = [{
  id: 1,
  label: 'Brand',
  maxLength: 15,
  name: 'brand',
  type: 'text',
}, {
  id: 2,
  label: 'Country',
  maxLength: 15,
  name: 'country',
  type: 'text',
}, {
  id: 3,
  label: 'Model',
  maxLength: 15,
  name: 'model',
  type: 'text',
}, {
  id: 4,
  label: 'Year',
  min: 1900,
  max: 2021,
  name: 'year',
  type: 'number',
}, {
  id: 5,
  label: 'Serial Number',
  min: 99999999999,
  max: 1000000000000,
  name: 'serialNum',
  type: 'number',
}, {
  id: 6,
  label: 'Description',
  maxLength: 30,
  name: 'description',
  type: 'text',
},
];

export default fieldsValue;
