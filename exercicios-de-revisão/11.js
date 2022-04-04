/*

data = [
    {
      name: 'Butters',
      age: 3,
      type: 'dog',
    },
    {
      name: 'Lizzy',
      age: 6,
      type: 'dog',
    },
  
    {
      name: 'Red',
      age: 1,
      type: 'cat',
    },
    {
      name: 'Joey',
      age: 3,
      type: 'dog',
    },
  ];

Por fim, ainda utilizando o array acima, 
retorne a soma da idade de todos os cachorros (type: dog)

*/

const dogs = data.filter((animal) => animal.type === 'dog');

const somaIdades = dogs.reduce((sum, animal) => {
    return sum + animal.age;
  }, 0);