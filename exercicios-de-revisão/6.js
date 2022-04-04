/*

Novamente utilizando um operador, clone o objeto clothes e adicione 
a este clone um objeto shoes com propriedade colors: ['yellow', 'purple']
de modo que fique igual aos objetos pants, shirts e socks

const clothes = {
  pants: { colors: ['black', 'blue'] },
  shirts: { colors: ['white', 'red'] },
  socks: { colors: ['beige', 'gray'] },
};

*/

const shoes = { shoes: {colors:['yellow', 'purple']}}
const outfit = {...clothes, ...tenis}