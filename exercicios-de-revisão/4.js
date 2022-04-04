/*

A partir do objeto abaixo, instancie uma variavel que receba name e outra para colors

company = {
  name: 'ACME Corp',
  address: 'Nowhere st',
  products: {
    shirts: {
      colors: ['red', 'green', 'blue'],
    },
    socks: {
      colors: ['cyan', 'magenta', 'yellow'],
    },
  },
};
*/

const { name } = company

const colors = [
    company.products.shirts.colors,
    company.products.socks.colors
]