const person = {
  name: 'Ridho',
  age: 29,
};

const pet = {
  owner: {
    ...person,
    age: 30,
  },
  name: 'Luna',
  age: 1,
  breed: 'Corgi',
};

console.log(pet);
