/*

A partir do objeto abaixo, retorne um array onde cada 
item é o nome completo de cada pessoa no array. 
Utilize arrow function.

var persons = [
  { firstname: 'Malcom', lastname: 'Reynolds' },
  { firstname: 'Kaylee', lastname: 'Frye' },
  { firstname: 'Jayne', lastname: 'Cobb' },
];

*/

const nomeCompleto = persons.map(
    (item) => `${item.firstname} ${item.lastname}`
  );