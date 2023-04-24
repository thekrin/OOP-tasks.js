// Task1

// let arr = [11, 23, 13, 777, 9, 2];
// function CheckArr(arr) {
//     let minNumb = arr[0];
//     if (Array.isArray(arr)) {
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] < minNumb) {
//                 minNumb = arr[i]
//             }
//         }
//     }
//     return minNumb
// }
// console.log(CheckArr(arr));




// Task2

// let str = "Saalllaammm"
// function GetSameLetters(word) {
//     if (typeof word === "string") {
//         let newStr = [];
//         word = str.toLowerCase();
//         for (let i = 0; i < word.length; i++) {
//             for (let x = i + 1; x < word.length; x++) {
//                 if (word[i] == word[x]) {
//                     if (newStr.includes(word[i])) {
//                     }
//                     else {
//                         newStr.push(word[i])
//                     }
//                 }
//             }
//         }
//         return newStr
//     }
// }
// console.log(GetSameLetters(str));




// Task3

// let sent = "Salam  sagol.Axsaminiz xeyir."
// function GetSum(param) {
//     let count = 1;
//     let checkSent = false;
//     for (let i = 0; i < param.length; i++) {
//         if (param[i] === " " || param[i] === ".") {
//             if (!checkSent) {
//                 checkSent = true;
//                 count++
//             }
//             if (i == param.length - 1) {
//                 count--
//             }
//         }
//         else {
//             checkSent = false;
//         }

//     }
//     return count;
// }
// console.log(GetSum(sent));




// Task4

// let word = "kicik"
// function checkWord(str) {
//     if (typeof str == "string" && !(str.includes(" "))) {
//         for (let i = 0; i < str.length; i++) {
//             if (!(str[i] == str[str.length - 1 - i])) {
//                 alert("sagol");
//                 return;
//             }
//         }
//         alert("salam");
//     }
// }
// checkWord(word)