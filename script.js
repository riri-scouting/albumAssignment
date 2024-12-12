/* Instructions:

Write a program that achieves the following: 

1) Create an array with 5 elements in it, with values of your choice.
2) Log all five elements to the console using console.log() methods.
3) Choose one of the elements and change it's contents using an equals statement.
4) Log the changed array to the console with a forEach() loop.

Put your code under the comments below:
*/


// 1) Create an array with 5 elements in it, with values of your choice.
const artists = ["Takanaka", "Cortex", "Kajagoogoo", "Nujubes", "Macabre Plaza"]

// 2) Log all five elements to the console using console.log() methods.
console.log("Artist #" + "1 " + artists[0])
console.log("Artist #" + "2 " + artists[1])
console.log("Artist #" + "3 " + artists[2])
console.log("Artist #" + "4 " + artists[3])
console.log("Artist #" + "5 " + artists[4])

// 3) Choose one of the elements and change it's contents using an equals statement.
artists[2] = "Michael Jackson"


// 4) Log all 5 elements of the changed array to the console with a forEach() loop.
artists.forEach((people, index) => {
    console.log('Artist:', people)
    console.log('index', index)
});

