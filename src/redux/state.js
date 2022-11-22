import cars from '../cars.json';

const state = {
  user: {
    username: 'test-user-1',
    email: 'test-user@example.com',
  },
  // *Setting cars state to the array from the cars.json file.
  cars: cars,
};

export default state;
