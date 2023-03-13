
// ****************
// Activity  
// ****************


// const person = {
//     name: "Allister",
//     age: 33,
//     tiredStatus: true,
//     movies: [
//         "The Fountain",
//         "Lord of the Rings",
//         "Star Wars",
//     ]
// }

// console.log(person["name"])


// ****************
// Example with an if
// ****************


// const person = {
//     name: "Allister",
//     age: 33,
//     tiredStatus: true,
//     movies: [
//         "The Fountain",
//         "Lord of the Rings",
//         "Star Wars",
//     ]



// }
// if (person.tiredStatus === true) {
//     console.log(`${person.name} is ${person.age} years old and tired! Some of their favourite movies are ${person.movies}`)
// }







// ****************
// Activity   
// ****************



// let day = "Saturday"
// let alarm = 0700

// const notification = {
//     weekendAlarm: "no alarm needed",
//     weekdayAlarm: "get up ay 7am"
// }

// if (day === "Saturday" || day === "Sunday"){
//     alarm = 0700;
//     console.log(notification.weekendAlarm)
// } else {console.log(notification.weekdayAlarm);
// }



// ****************
// Activity 
// ****************


// const person = {
//     name: "Allister",
//     age: 33,
//     tiredStatus: true,
//     movies: [
//         "The Fountain",
//         "Lord of the Rings",
//         "Star Wars",
//     ],
//     favouriteSongs: [
//         "Fur Dich - Thomas Dinger",
//         "Jerk - Oliver Tree",
//         "Chimeras - Tim Hecker",
//     ]
    
// }

// console.log(person.favouriteSongs[0], person.favouriteSongs[1], person.favouriteSongs[2])




// *****************
// Activity 1
// *****************




// const person = {
//     name: "Allister",
//     age: 33,
//     tiredStatus: true,
//     favMovies: ["The Fountain", "Lord of the Rings", "Star Wars", "Lawrence of Arabia"],
    
    
//     sayHi(){
        
//         return `Hello my name is ${this.name}`;

//         }
    
    
// };

// console.log(person.sayHi());



// *****************
// Activity 2
// *****************



// const pet = {
//   name: 'rockymcrockface',
//   typeOfPet: 'Rock',
//   age: 1000000,
//   colour: 'Grey',
//   eat: function() {
//     return `${this.name} is eating.`;
//   },
//   drink: function() {
//     return `${this.name} is drinking.`;
//   }
// };



// console.log(pet.eat()); 
// console.log(pet.drink()); 





// *****************
// Activity 3
// *****************





// const coffeeShop = {
//         branch: ["Wirral", "Chester", "Liverpool"],
//         food: [
//             {name: "Bagel", price: 8.50}, 
//             {name: "Cake", price: 3.00}, 
//             {name: "Donut", price: 2.00}, 
//             {name: "Toastie", price: 6.50}
//         ],
//         drinks: [
//             {name: "Cappuccino", price: 4.00}, 
//             {name: "Latte", price: 3.50}, 
//             {name: "Filter Coffee", price: 3.00}, 
//             {name: "Tea", price: 2.50}, 
//             {name: "Hot Chocolate", price: 3.50}
//         ],
//         orderDrinkAndFood: function(drink, food) {
//           let drinkPrice = 0;
//           let foodPrice = 0;
//           let order = {};
          
       
//           for (let i = 0; i < coffeeShop.drinks.length; i++) {
//             if (coffeeShop.drinks[i].name === drink) {
//               drinkPrice = coffeeShop.drinks[i].price;
//             }
//           }
          
          
//           for (let i = 0; i < coffeeShop.food.length; i++) {
//             if (coffeeShop.food[i].name === food) {
//               foodPrice = coffeeShop.food[i].price;
//             }
//           }
          
         
//           order.drink = drink;
//           order.food = food;
//           order.totalPrice = drinkPrice + foodPrice;
          
//           return order;
//         }
// };

// let order = coffeeShop.orderDrinkAndFood("Cappuccino", "Bagel");

// console.log(order);
