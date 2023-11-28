//! Task 0 : (Example) write a function that takes 2 numbers and return the Sum of them

function add(num1, num2) {
  return num1 + num2;
}

// ! OR

// const add = (num1, num2) => {
//   return num1 + num2;
// };

console.log(add(5, 10));

//! Task1: Create a function that takes the age in years
//! and returns the age in seconds. ex: age = 25 years , Notes: 1 year = 365 days
const age =(numYear) => {
 ageSeconds=numYear*365*24*3600;
  return ageSeconds;
};
console.log(age(23));
//! Task2: Create a function that takes a number and return an array of three numbers: half of the number, quarter of the number and an eighth of the number. ex: halfQuarterEighth(6) ➞ [3, 1.5, 0.75]
const numArrey = (num) => {
 arr=[0.5*num ,0.25*num ,0.125*num];
   return arr;
  };
console.log(numArrey(23));
//! Task3: Create a function that takes a number as an argument and returns "even" for even numbers and "odd" for odd numbers.
const evenOdd =(num) => {
  if(num%2==0){
    return "even";
  }
  else{
    return "odd";
  }
  };
 console.log(evenOdd(23));

//! Task 4 : Create a function which takes two strings (p1 and p2 ⁠— which represent player 1 and 2) as arguments and returns a string stating the winner in a game of Rock, Paper, Scissors.

//! Each argument will contain a single string: "Rock", "Paper", or "Scissors". Return the winner according to the following rules:

//! Rock beats Scissors
//! Scissors beats Paper
//! Paper beats Rock

//! If p1 wins, return the string "The winner is p1". If p2 wins, return the string "The winner is p2" and if p1 and p2 are the same, return "It's a draw"

//! Notes: All inputs will be strings ex: rps("Scissors", "Paper") ➞ "The winner is p1"
const game =(p1,p2) => {
  if(p1=="rock"&&p2=="scissors"||p1=="scissors"&&p2=="paper"||p1=="paper"&&p2=="rock"){
  return "the winner is p1";
  }
  else if(p2=="rock"&&p1=="scissors"||p2=="scissors"&&p1=="pape"||p2=="paper"&&p1=="rock"){
    return "the winner is p2";
    }
      else{
        console.log("It's a draw");
      }
    };
   console.log(game("scissors", "paper"));

//! Task 5 : Create a function that takes two numbers and a mathematical operator and returns the result. ex: calculate(4, 9, "+") ➞ 13
const operatorNumber =(num1,num2,op) =>{
  switch (op) {
    case "+":
      result=num1+num2
      break;
    case "-":
      result=num1-num2;
      break;
    case "*":
      result=num1*num2;
      break;
    case "/":
      while (num2==0) {
        return "error";
      }
      result=num1/num2;
      break;
    default:
      break;
  }
  return result;
  };
console.log(operatorNumber(4,9,"+"))

//! Task 6 : Let us have the following Array [65, 14 ,32 ,23 ,44, 14 ,27, 66 , 35]
//! Create a function that examines the elements of the array
//! It multiplies the odd numbers that are greater than 20 by 2 and the rest of the numbers are replaced by the number 100
//! In addition to having a counter that calculates the number of odd digits that are greater than 20 in the array
const arreyOdd =(arr) =>{
  let num=0;
  for(let i=0;i<arr.length ;i++){
    if(arr[i]>20 && arr[i]%2!=0){
      arr[i]=arr[i]*2;
      num++;
    }
    else{
      arr[i]=100;
    }
  }
  console.log(num+' oddNumbers');
  return arr;
  };
console.log(arreyOdd([65,14,32,23,44,14,27,66,35]));

//! Task 7 : write a function that takes two arguments, name and age Stores the characters of the name passed within an array
//! And if the age that is passed to the function is greater than 18, console
//! "You are Welcome"
//! Or console
//! "Not Found"
//! Call the function and pass him your name and age
const nameAge =(nam,age) =>{
let arr=[]
  for(let i=0;i<nam.length;i++){
arr[i]=nam[i];
  }
  console.log(arr);
  if(age>18){
    console.log("You are Welcome");
  }
  else{
    console.log("Not Found");
  } 
};
(nameAge("abeer",23));

//! Task 8: Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.
//! wins get 3 points
//! draws get 1 point
//! losses get 0 points
//! footballPoints(3, 4, 2) ➞ 13
//! Only one line should be written inside the function
const footballPoints =(num1,num2,num3) =>{
result=num1*3+num2*1+num3*0;
return result;
};
 console.log(footballPoints(3,4,2));

//! Task 9: Create a function that takes in an array of numbers and returns the sum of its cubes.
//! sumOfCubes([1, 5, 9]) ➞ 855
//! Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
//! If given an empty array, return 0.
const sumOfCubes=(arr) =>{
  let sum=0;
  if(arr==0){
    return 0;
  }
  else{ for (let i=0;i< arr.length;i++) {
    sum= sum+arr[i]**arr.length;
    }
  return sum;
  } 
};
console.log(sumOfCubes([1, 5, 9]));

//! Task 10: Create a function take an index and return the value of The Fibonacci sequence for it
//! The Fibonacci numbers are the numbers in the following integer sequence 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
//! Input : 5
//! Output : 8

//! Input :8
//! Output :34
const fibonacci=(num) =>{
  let arr=[];
 arr[0]=1;
 arr[1]=1;
  for(let i=2;i<=num;i++){
   arr[i]=arr[i-1]+arr[i-2];
  }
  return arr[num];
}
 console.log(fibonacci(8));

//! Task 11 : Given an array of ones and zeroes, convert the equivalent binary value to an integer.

//! Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
const binaryNumber =(arr) =>{
  let num=0;
    for(let i=0;i<arr.length;i++){
      num= num+arr[i]*(2**(arr.length-1-i));
    }
    console.log(num)
  };
  binaryNumber([0, 0, 0, 1])

//! Task 12 :  Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
const removesString =(nam) =>{
  let arr=[];
    for(let i=1;i<nam.length-1;i++){
      arr[i]=nam[i]
    }
    string =arr.join("");
    console.log(string);
  }
  removesString("abeer");

//! Task 13 : Given an array of integers. Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
//! If the inpu)t is an empty array or is null, return an empty array.
//! Example: For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
const numberArr =(arr) =>{
  let num=0;
  let sum=0;
  if(arr==0){
    return"empty arrey";
  }
    else{
  for(let i=0;i<arr.length;i++){
  if(arr[i]>0){
    num++;
   }
   else{ 
   sum= sum+arr[i];
  }
  }
  return [num,sum];
  }
 };
console.log(numberArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));

//! Task 14: write a function to sort an array of numbers
//!   ex: [4, 5, 6, 3, 2]  => [ 2, 3, 4, 5, 6 ]
const arrSort =(arr) =>{
  for(let i=1;i<arr.length;i++){
  for(let j=0;j<i;j++){
    if(arr[i]<arr[j]){
      let x=arr[j];
      arr[j]=arr[i];
      arr[i]=x;
    }
  }
 }
 return arr;
};
 console.log (arrSort([4 ,5 ,6 ,3 ,2]));

//! Task 15: In one row (inside the function), write a function to calculate number of char & Spaces in an Input string
//! ex: "Vica Web Solutions" => Output: 18
const numberString =(nam) =>{
   return nam.length;
  };
  console.log(numberString("Vica Web Solutions"));