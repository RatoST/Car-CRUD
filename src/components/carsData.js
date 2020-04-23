import { v4 as uuidv4 } from 'uuid';

const carsData = [
  {
    id: uuidv4(),
    brand: 'Peugeot',
    country: 'France',
    model: '5008',
    year: '2014',
    serialNum: '2014010505',
    description: 'Mono-volume family car. ',
  },
  {
    id: uuidv4(),
    brand: 'BMW',
    country: 'Germany',
    model: '535',
    year: '2016',
    serialNum: '2016050517',
    description: 'Sports limousine car. ',
  },
  {
    id: uuidv4(),
    brand: 'Peugeot',
    country: 'France',
    model: '3008',
    year: '2017',
    serialNum: '2017017536',
    description: 'SUV car. ',
  },
];

export default carsData;
