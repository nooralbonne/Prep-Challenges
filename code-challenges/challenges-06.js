'use strict';

// -------------------------------------------------------------------------------------------------------
//  Challenge 01:
//  Required:
//
//  Write a function that takes an array and returns the maximum value in the provided array
//  without using build-in functions.
//  
// Input: [12, 32, 22, 45, 78, 12, 50]
// Output: 78
//  
const findMax = (arr)=>{
    let max = arr[0];
    for(let i=0 ; i< arr.length; i++){
    if (arr[i] > max){
        max=arr[i];
}
    }
    return max;
}
let arr =[12, 32, 22, 45, 78, 12, 50];
let x= findMax(arr);


// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
//  Challenge 02:
//  Required:
//
//  Write a function that takes an arrays and returns the Sum of the numeric values
//  inside the array (there could be strings inside), without using built-in functions
//  
// Input: [20, '234', 'car', 41, 20, 'chair']
// Output: 81
//  
arr = [20, '234', 'car', 41, 20, 'chair']
const sumNums = (arr)=>{
    let sum=0;
for (let i=0 ; i< arr.length ; i++){
    if(arr[i]/1===arr[i]){
        sum = sum+arr[i];
    }
}
    return sum;
}
console.log(sumNums(arr));
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
//  Challenge 03:
//  Required:
//
//  Write a function that takes an array and returns the array reversed
//  without using built-in functions
//  
// Input: ['C#', 'JS', 'Ruby','Python'] 
// Output: ['Python','Ruby','JS','C#']


/*arr=['C#', 'JS', 'Ruby','Python'];
const reverseArray = (arr)=>{
    let arr2=[];
    for(let i=arr.length-1 ; i>=0 ; i--){
    arr2.push(arr[i]);
    }
    arr=arr2;
    return arr;*/
    const reverseArray= (arr)=>{
        let x= arr.length -1;
        let arr2= [];
        for (let i = 0; i<arr.length ;i++){
            arr2[i] = arr[x-i];
    }
    return arr2;
}
// -------------------------------------------------------------------------------------------------------
module.exports = {findMax , sumNums, reverseArray};



