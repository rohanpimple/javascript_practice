// // // // // // // // // // // // guessing game
// // // // // // // // // // // // // // // let gameNum = 35;

// // // // // // // // // // // // // // // let guessNum = prompt("Guess the number");

// // // // // // // // // // // // // // // while(guessNum != gameNum) {
// // // // // // // // // // // // // // //     guessNum = prompt("You Guess the wrong number");
// // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // console.log("Congratulation you are entered correct number");

// // // // // // // // // // // // // replace method
// // // // // // // // // // // // // // let str = "rohan";

// // // // // // // // // // // // // // console.log(str.replace("h", "ashwini"));

// // // // // // // // // // // //practice

// // // // // // // // // // // let fullName = prompt("Enter a Full Name");

// // // // // // // // // // // let userName = "@" + fullName + fullName.length;
// // // // // // // // // // // console.log(userName);

// // // // // // // // // // // //practice

// // // // // // // // // // let items = [250, 645, 300, 900, 50];
// // // // // // // // // // let i = 0;
// // // // // // // // // // for (let val of items) {
// // // // // // // // // //     let offer = val / 10;
// // // // // // // // // //     items[i] = items[i] - offer; 
// // // // // // // // // // console.log(`value after discount ${items[i]}`);
// // // // // // // // // // i++;
// // // // // // // // // // }


// // // // // // // // // // Array Methods

// // // // // // // // // // push() method :- to add elements at last in the array

// // // // // // // // // let avengers = ["ironman", "antman", "thor", "hulk"];
// // // // // // // // // console.log(avengers);
// // // // // // // // // avengers.push("captiain", "Dr.stranger", "groot");
// // // // // // // // // console.log(avengers);

// // // // // // // // //pop() method :- to delete elements at last in the array

// // // // // // // // let avengers = ["ironman", "antman", "thor", "hulk"];
// // // // // // // // console.log(avengers);
// // // // // // // // let deletedAvengers = avengers.pop();
// // // // // // // // console.log(deletedAvengers);
// // // // // // // // console.log(avengers);

// // // // // // // //toString() :- to convart array into String

// // // // // // // let avengers = ["ironman", "antman", "thor", "hulk"];
// // // // // // // console.log(avengers);
// // // // // // // let deletedAvengers = avengers.toString();
// // // // // // // console.log(deletedAvengers);
// // // // // // // console.log(avengers);


// // // // // // // concat() Method :- to add arrays 

// // // // // // let indiaHero = ["shaktiman", "krsish"];
// // // // // // let marvalHero = ["thor", "ironman"];
// // // // // // let dcHero = ["batman", "superman"];
// // // // // // let heros  = indiaHero.concat(marvalHero, dcHero);
// // // // // // console.log(heros);

// // // // // // // // // // unshift() method :- to add elements at first in the array

// // // // // let indiaHero = ["shaktiman", "krsish"];
// // // // // indiaHero.unshift("rohan");

// // // // // // // // // // shift() method :- to add elements at first in the array

// // // // let indiaHero = ["shaktiman", "krsish"];
// // // // indiaHero.shift();
// // // // console.log(indiaHero); 

// // // // Slice(start , end) 

// // // let avengers = ["ironman", "antman", "thor", "hulk"];
// // // console.log(avengers);
// // // let sl = avengers.slice(0,2);
// // // console.log(sl);

// // // Splice(startidx, delcount, newele)

// // let num = [1,2,3,4,5];
// // num.splice(1,3,7,8,9);


// // practices 

// let company = ["Bloomberg", "Microsoft", "Uber", "Google", "IBm", "Netflix"];

// // A remove first company from the list

// //let first = company.shift("Bloomberg");
// //console.log(first);

// // B remove Uber and add Ola in its place

// //let del = company.splice(2,1,"Ola");
// //console.log(del);

// // C add Amazon at the end

// company.push("Amazon");

