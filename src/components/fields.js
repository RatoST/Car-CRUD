
const fields = [{
  fName: 'Brand',
  maxLength: 15,
  name: 'brand',
  type: 'text',
}, {
  fName: 'Country',
  maxLength: 15,
  name: 'country',
  type: 'text',
}, {
  fName: 'Model',
  maxLength: 15,
  name: 'model',
  type: 'text',
}, {
  fName: 'Year',
  min: 1900,
  max: 2021,
  name: 'year',
  type: 'number',
}, {
  fName: 'Serial Number',
  min: 99999999999,
  max: 1000000000000,
  name: 'serialNum',
  type: 'number',
}, {
  fName: 'Description',
  maxLength: 30,
  name: 'description',
  type: 'text',
},
];

export default fields;
