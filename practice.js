



// Fahad Alturkistani
// Lab day 4

//// 1
arr.unshift(1);
arr.unshift(0);
arr.push(5);
arr.push(6);
arr.push(7);
console.log(arr);

/// 2
const arr = [5, 7, 9];
arr.push(6); // returns ???
//arr = [5, 7, 9, 6];

/// 3
const numbers = [4, 9, 7, 2, 1, 8];
for (i=0; i<numbers.length;i++){
    numbers[i] = numbers[i] * 2;
  }
console.log(numbers);

//// 4
const numbers = [4, 9, 7, 2, 1, 8];

for (i=0; i<numbers.length;i++){
  if (numbers[i]%2 == 0){
    numbers[i]=numbers[i];
  } else {
    numbers[i] = numbers[i] * 2;
  }
}
console.log(numbers);

/// 5
var colors =["blue","red","black"];

for (i=0;i<colors.length;i++){
    console.log("My #"+(i+1)+" choice is "+colors[i]);
}

//// 6
var ages = [1,3,21,43,22,98,42];
var agesOver = [];
for (i=0;i<ages.length;i++){
  if (ages[i] > 21){
    agesOver.push(ages[i]) 
  }
}
console.log(ages);
console.log(agesOver);

///// 7
var rainbowColors = [];
rainbowColors.push('orange');
rainbowColors.unshift('red');
rainbowColors.push('yellow');
rainbowColors.push("green", "blue", "indigo","violet");
console.log("Array length is: "+rainbowColors.length);
console.log("The second item is: "+rainbowColors[1]);
console.log("The last item is: "+rainbowColors[rainbowColors.length - 1]);
console.log("The index of'blue' is: "+rainbowColors.indexOf('blue'));
console.log(rainbowColors);

//// 8
var twoColors = [];
twoColors.push(rainbowColors.slice(1,3));
console.log(twoColors);

var nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];
console.log(nums);
nums.splice(3,3)
console.log(nums);

//// 9
var arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];

console.log(arrOfArrs[0][0]);
console.log(arrOfArrs[1][arrOfArrs[1].length-1]);

//// 10
var topFive = ["Pink Floyd", "Rock", "Inception/interstellar", "Soccer"];
var category = ["Band", "Music Genre", "Movie", "Sports"];
for (i=0;i<topFive.length;i++){

  console.log("My favorite "+category[i]+" is "+topFive[i]);
} 


