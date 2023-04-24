'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    }, 
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivey: function({inicial, secundario, addres, hours}){
    console.log(`Pedido realizado!
    A entrada é: ${this.starterMenu[inicial]},
    O prato princial é: ${this.mainMenu[secundario]},
    O endereço para entrega é: ${addres} e o horário para entrada é às ${hours}`)
  }
};

// let {name, openingHours, categories} = restaurant; //Estou destruturando o meu obj restaurante, criando variáveis com os mesmos nomes que o meu obj possui.
// console.log(name, openingHours, categories);


// const {name: restaurantName, openingHours: hours, categories: tags} = restaurant; //Estou destruturando o meu obj restaurante, criando nomes das variáveis que tenho interesse em pegar.
// console.log(restaurantName, hours, tags);



// const {thu: {open, close}} = openingHours; //Primeiro eu seleciono o dia que eu tenho interesse estruturando o meu obj, e logo após estou destruturando mais ainda o meu obj, criando duas variáveis para a hora de abrir e fechar.
// console.log(open, close)

// restaurant.orderDelivey({
//   inicial: 1,
//   secundario: 1,
//   addres: 'João Zanesco',
//   hours: '20:00'
// })

const {openingHours} = restaurant;

const {sat, ...outrosDias} = openingHours;
console.log(sat, outrosDias)

const add = (...numbers) => {
  let soma = '';
  for(let i = 0; i < numbers.length; i++){
    soma += numbers[i] 
  }
  return `Opa, ai sim, prazer para vocês: ${soma}. `;
}

console.log(add(10, 10, 10, 10, 20, 40));
console.log(add(2, 2, 2));
console.log(add('Igor, ', 'Lavinia'))