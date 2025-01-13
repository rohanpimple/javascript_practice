// // // // // // // // function add(a, b) {
// // // // // // // // console.log(a+b);
// // // // // // // // }
// // // // // // // // add(58,65);

// // // // // // // // arrow functions

// // // // // // // const add = (a,b) => {
// // // // // // //     console.log(a*b);
// // // // // // //     console.log(a+b);
// // // // // // //     console.log(a-b);
// // // // // // //     console.log(a/b);
// // // // // // // }
// // // // // // // add(99,87);

// // // // // // // practices

// // // // // // function countVowel(str) {
// // // // // //     let count = 0;
// // // // // //     for(const char of str) {
// // // // // //         if 
// // // // // //         (
// // // // // //             char === "a" ||
// // // // // //             char === "e" ||
// // // // // //             char === "i" ||
// // // // // //             char === "o" ||
// // // // // //             char === "u" 
// // // // // //         ) {
// // // // // //             count++;
// // // // // //         }
// // // // // //     }
// // // // // //         return count;
// // // // // // }
// // // // // // //countVowel("Rohanpimple");

// // // // // // // **using arrow function**

// // // // // // const countVow = (str) => {
// // // // // //     let count = 0;
// // // // // //     for(const char of str) {
// // // // // //         if 
// // // // // //         (
// // // // // //             char === "a" ||
// // // // // //             char === "e" ||
// // // // // //             char === "i" ||
// // // // // //             char === "o" ||
// // // // // //             char === "u" 
// // // // // //         ) {
// // // // // //             count++;
// // // // // //         }
// // // // // //     }
// // // // // //         return count;
// // // // // // }

// // // // // // practice 
// // // // **foreach() in functions**

// // // // // //let arr = [1, 2, 3, 4, 5, 6, 7];

// // // // // //arr.forEach((val) => {
// // // // // //console.log(val*val);
// // // // // //});


// // // // // // **map() method**

// // // // // let arr = [1, 2, 3, 4, 5, 6, 7];
// // // // // let newArr = arr.forEach((val) => {
// // // // //     console.log(val*2);
// // // // //     });
// // // // //     console.log(newArr);

// // // // // **filter() method** 

// // // // let num = [1,5,6,8,7,6,25];
// // // // let newNum = num.filter((val) => {
// // // //     return val % 2 !== 0;
// // // // });
// // // // console.log(newNum);

// // // // **reduce() method **

// // // let num = [25,5,88,66,555,54];
// // // const numNew = num.reduce((pre, cur) => {
// // //     return pre > cur ? pre : cur;
// // // });

// // // console.log(numNew);

// // // practice 1

// // let marks = [25,98,65,74,32];
// // let score = marks.filter((val) => {
// //     return val > 90;
// // });
// // console.log(score);

// // // practice 2

// let num = prompt("Enter a Number");
// let arr = [];
// for (let i=1; i<=num; i++) {
// arr[i-1] = i;
// }
// console.log(arr);
// let sum = arr.reduce((pre, cur) => {
//     return pre+cur;
// });
// console.log(sum);
// let product = arr.reduce((pre, cur) => {
//     return pre*cur;
// });
// console.log(product);