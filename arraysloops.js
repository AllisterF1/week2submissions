


// ************
// Activity 
// ************





// let favouriteSongs = [
//     "Fur Dich - Thomas Dinger",
//     "Jerk - Oliver Tree",
//     "Chimeras - Tim Hecker",
// ];


// favouriteSongs.push("Fires in Heaven - SALEM");
// favouriteSongs.push("Woven Song - Olafur Arnalds");
// favouriteSongs.pop();
// console.log(favouriteSongs);







// ************
// Activity 
// ************






// // const favouriteSongs = [
//     "Fur Dich - Thomas Dinger",
//     "Jerk - Oliver Tree",
//     "Chimeras - Tim Hecker"
// // ];

// const allTimeFavourite = favouriteSongs.shift();

// console.log(`Some of my favourite songs are; ${favouriteSongs}`);


// console.log(`But my all time favourite is ${allTimeFavourite}`);






// ****************
// Activity 1
// ****************



// let favMovies = [
//     "The Fountain",
//     "Star Wars",
//     "Gladiator"
// ];

// favMovies.push("Alien");
// favMovies.push("Lawrence of Arabia")

// for(let i = 0; i < favMovies.length ; i++){
                   
//         console.log( favMovies[i]);
//     }




    

// ****************
// Activity 2
// ****************




//    for(let i = 0; i < 6; i++){
//     console.log(Math.floor(Math.random() * 51))

// }




// ****************
// Activity 3
// ****************




// for ( let i = 9; i > -1; i--){
//     console.log(i);

// }




// ****************
// Activity 4
// ****************




// let favMovies2 = [
//     "The Fountain",
//     "Star Wars",
//     "Ghostbusters",
//     "Alien"
// ];

// for(let i = 0; i < favMovies2.length ; i++){
//     if ( i == 2 && favMovies2[2] == "Ghostbusters") {
//         console.log("Yay it's Ghostbusters")
//     }
//     else  {
//         console.log("Boo! we want Ghostbusters");  
//     }

// }             
     



// ****************
// Activity 5 - 
// ****************




// for (let i = 0; i < 6; i++) {
//   let randomNumber = Math.floor(Math.random() * 30) + 1;
//   if (randomNumber % 7 === 0) {
//     console.log(`The number ${randomNumber} is divisible by 7.`);
//   } else {
//     console.log(`The number ${randomNumber} is not divisible by 7.`);
//   }
// }







// ****************
// Activity 6  
// ****************




// let bobsFollowers = ["Phillip", "John", "Sue", "Helen"];

// let hannahsFollowers = ["Henry", "John", "Sue", "Jason"];

// let mutualFollowers = [];


// for( let i = 0; i < bobsFollowers.length; i++){
//     for ( let j = 0; j < hannahsFollowers.length; j++){
//         if(bobsFollowers[i] === hannahsFollowers[j]) {
//             mutualFollowers.push(bobsFollowers[i]);
//         }
//     }
// }   

// console.log(mutualFollowers)





// ****************
// Activity 7  
// ****************

// example of a for loop
//PROS: easy to set up a loop to run x amount of times, 
//CONS: you enter the loop body only when the looping condition is satisfied. so won't work if you want to execute your program at least once without considering the condition

// for (let test = 0; test < 10; test++) {
//     console.log(test);
//   }



// example of a while loop
//PROs: More flexible than a for, can run code until a certain condition is met
//CONS: If no exit condition properly set, can create an infinte loop



// let test = 0; 

// while (test < 10) {
//   console.log(test);
//   test++;
// }


// example of a do...while
//PROS: Code is guaranteed to be ran at least once
//CONS: cannot be used for accessing or viewing any specific element of an array or collection like array[6] , arraylist.get(i) , string[2] etc.


// let test = 0;

// do {
//   console.log(test);
//   test++;
// } while (test < 10);

