    // _______________________________+For Loop____________________________


//     1. Write a program to display the message 'Hello World' 5 times 
// in your browser using for loop

// Ans:
       
// for (let i = 0; i < 5; i++) {
//     console.log('Hello World');
// }

// Q 2 Write a program to print numeric counting from 1 to 10.
// Ans:

        // for(let i = 1; i<=10; i++)
        // {
        //     console.log(i);
//         // }

//  3. Write a program to print multiplication table of any number 
//    using for loop. Table number & length should be taken as an input from user.
// Ans:
          
        //  const num1 = +prompt('Enter any number');
        // const numLength = +prompt('Enter length');
        // const showMul = document.querySelector('div');
        // const head = document.querySelector('h3');

        // for(let i=1; i<=numLength; i++){

        //     head.innerHTML=(`Multiplication Table of ${num1}:<br>Length: ${numLength}`);
        //     showMul.innerHTML += (`${num1}* ${i} = ${num1*i}<br>`);
        // }
       
// Q 4:    You have an array
//         A = ['Nokia', 'Samsung', 'Apple', 'Sony', 'Huawei']
//         Write each element on new line with the help of for loop.
// Ans:

// const mobCompanies = ['Nokia', 'Samsung', 'Apple', 'Sony', 'Huawei'];
// const showNames = document.querySelector('ul');
// for (let i = 0; i < mobCompanies.length; i++){

//     showNames.innerHTML += (`<li>${mobCompanies[i]}</li>`);
// }

// Q  5. Write a program to print items of the following array using for 
// loop:
// fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry']
// Ans:        

        // const fruits= ['apple', 'banana', 'mango', 'orange', 'strawberry'];
        // const showFruit = document.querySelector('.fruit');
        // const showFruitIndex = document.querySelector('.fruitIndex');

        // for (let i = 0; i < fruits.length; i++){
        //     showFruit.innerHTML += (`${fruits[i]}<br>`);
        //     showFruitIndex.innerHTML += (`Element at index ${i} is ${fruits[i]}<br>`);
        // }

// Q 6: Write a program to initialize an array of N items by using prompt. Where N is number
//  of items as entered by the user
                
    //  const devices = [];
    //  const num = +prompt('Enter no of Items');
    //  const showLength = document.querySelector('.deviceLength');
    //  const showItems = document.querySelector('.deviceItems');
    //  const dispName = document.querySelector('.displayName');
    //     for (let i = 0; i <num; i++){
    //        const addDevice = prompt(`Enter itmem name ${i+1}`);
    //        devices.push(addDevice);
    //     }
    //     for (let j = 0; j <devices.length; j++){
    //     showLength.innerHTML = (`Number of Items ${devices.length}<br>`);
    //     dispName.innerHTML = '<h3>Items<h3>'
    //     showItems.innerHTML += (`${devices[j]}<br>`)
    //     }
    

//    Q 7:  Generate the following series in your browser. See example output.
//     a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
//     b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
//     c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
//     d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
//     e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
    // Ans:


 // a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
    // const showHead = document.querySelector('.countHead');
    // const showCount = document.querySelector('.counting');
    // for (let i= 1; i <=15; i++){
    //         showHead.innerHTML='<h3>Counting:<h3>';
    //         showCount.innerHTML +=(`${i},`);
    // }

    // b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
    // const showRevereHead = document.querySelector('.reverseHead');
    // const reverse = document.querySelector('.reverse');
    // for (let i = 10; i >=1; i-- ){
    //     showRevereHead.innerHTML = '<h3>Reverse Counting:</h3>'
    //     reverse.innerHTML +=(`${i},`) 
    // }

// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20  
//   const evenHead = document.querySelector('.evenHead');
//   const even = document.querySelector('.even');
//     for(let i = 0; i <=20; i++){
//         if(i%2===0){
//           evenHead.innerHTML = '<h3>Even:</h3>'
//           even.innerHTML += (`${i},`)     

//         }  
//     }
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

//   const oddHead = document.querySelector('.oddHead');
//   const odd = document.querySelector('.odd');
//     for(let i = 0; i <=20; i++){
//         if(i%2!==0){
//           oddHead.innerHTML = '<h3>Odd:</h3>'
//           odd.innerHTML += (`${i},`)     

//         }

//     }
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
//   const seriesHead = document.querySelector('.seriesHead');
//   const series = document.querySelector('.series');
//     for(let i = 1; i <=10; i++){
//           seriesHead.innerHTML = '<h3>Series:</h3>'
//           series.innerHTML += (`${i*2}K,`)    
//     }

// Q 8. You have an array
//     A = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
//     Write a program to enable 'search by user input' in an array.
//     After searching, prompt the user whether the given item is 
//     found in the list or not. Example:
// const  stock = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// const stockAvailable = document.querySelector('.stockAvailable');
// const stockNotAvailable = document.querySelector('.stockNotAvailable');
// const inputItem = prompt('Enter an item to check whether available in stock?');
// let found=false;
//     for(let i = 0; i<stock.length; i++){
//         if(inputItem.toLowerCase()===stock[i])
//         {
//              found =true;
//              stockAvailable.innerHTML = (`${inputItem} is <strong>available</strong> at index ${i} in our bakery`);
//             break;
        
//         }
//     }
//     if(!found){
//         stockAvailable.innerHTML = (`Sorry! ${inputItem} is <strong>not available</strong> in our bakery`);
//     }

// 9. Write a program to identify the largest number in the given 
// array.
// A = [24, 53, 78, 91, 12]
//    Ans: 
// const numberArr = [24, 53, 78,91,12];
// const arrItems = document.querySelector('.arrayItems');
// const largestNumber = document.querySelector('.largestNumber');
// let max = numberArr[0];
// for(let i = 0; i < numberArr.length; i++){
//     if(numberArr[i] > max){
//         max = numberArr[i];
//     }
    
// }
// arrItems.innerHTML = (`Array Items: ${numberArr}`)
// largestNumber.innerHTML += (`The largest number is ${max}`)

//Q 10  Write a program to identify the smallest number in the given 
// array.
// A = [24, 53, 78, 91, 12]

//    const arr = [24, 53, 78,91, 12];
//    const arrayItems = document.querySelector('.arrayItemSmall');
//    const smallestNumber = document.querySelector('.smallestNumber');
//    let minNumber = arr[0];
//    for (let i = 0; i < arr.length; i++){
//     if(arr[i]<minNumber){
//         minNumber = arr[i];
//     }
//    }
//   arrayItems.innerHTML = (`Array Items: ${arr}`);
//   smallestNumber.innerHTML = (`The smallest Number is ${minNumber}`)


//Q 11 Write a program to identify the largest & the smallest
// number in the given array.
// A = [24, 53, 78, 91, 12]

// const arr = [24, 53, 78, 91, 12];
// const arrItems = document.querySelector('.arrItem')
// const smallNumber = document.querySelector('.smallNumber')
// const largeNumber = document.querySelector('.largeNumber')
// let largestNumber = arr[0];
// let smallestNumber = arr[0];
// for (let i = 0;  i < arr.length; i++){
//     if(arr[i] > largestNumber){
//         largestNumber=arr[i]
//     }
//     if(arr[i] < smallestNumber){
//         smallestNumber=arr[i]
//     }
// }
// arrItems.innerHTML = (`Array Items: ${arr}`);
// smallNumber.innerHTML = (`The smallest Number is: ${smallestNumber}`);
// largeNumber.innerHTML = (`The Largest Number is: ${largestNumber}`);

// Q  12. Write a program to print multiples of 5 ranging 1 to 100
// Ans:
// 
//     const multiples = document.querySelector('.mulOfFive');
//     let result = ' ';
//     for (let i = 1; i <= 20; i++){
//         result +=(`${i*5},`);
        
//     }
//   multiples.innerHTML = (`Multiple of 5 ranging 1 to 100:<br> ${result}`);

//Q  13. You have given the following arrays:
// var students = ["Ali", "Sami", "Taha", "Inam"];
// var scores = [58, 73, 89, 90];
// Write a program to generate the following HTML table in your 
// browser using JS.
// Ans:
    //  const students = ["Ali", "Sami", "Taha", "Inam"];
    //  const scores = [58, 73, 89, 90];
    //  const tableRow = document.querySelector('.tableRow');
    //  const tableHead= document.querySelector('.students');
    //  const scoreHead= document.querySelector('.scores');

    //  tableHead.innerHTML = 'Students';
    //  scoreHead.innerHTML = 'Scores';

    //  for (let i = 0; i < students.length; i++){
       
    //     tableRow.innerHTML += (`<tr><td>${students[i]}</td><td>${scores[i]}</td></tr>`)    
    // }

// Q  14. Write a program that prints number from start of the array
//     to desired stop value. Given array:
//     var scores = [12, 45, 3, 22, 34, 50];
//     (Hint: take stop value from user)
//     E.g. if user gives 3 as input value print 12, 45, 3
//     if user gives 34 as input value print 12, 45, 3, 22, 34
// Ans:
        // const scores = [12, 45, 3, 22, 34, 50];
        // const showVal = document.querySelector('.printValue');
        // const userInput = +prompt('Enter any value');
        // for (let i = 0;  i < scores.length; i++){
        //     if(scores[i]===userInput){
        //     showVal.innerHTML = (`Output: ${scores.slice(0,i+1)}`);
        //     }
        // }

    // 15. You have an array
    //     A = [ [1,2,3] , [4,5,6] , [7,8,9] ]
    //     Write each element on new line with the help of nested for  loops.
    // Ans: 
        // const nestedArr = [ [1,2,3] , [4,5,6] , [7,8,9,] ];
        // const showArr = document.querySelector('.nestedArr');
        //        for (let i = 0; i < nestedArr.length; i++){
        //     for (let j = 0; j < nestedArr[i].length; j++){
        //         // console.log(nestedArr[i][j])
        //         showArr.innerHTML  += (`${nestedArr[i][j]}`) 
        //         }
        //         showArr.innerHTML += `<br>`
        //     }

//  16. Write a program to repeatedly print the value of the variable 
// num which is input by user. Value should be decreasing by 0.5 
//  each time, as long as x Value remains positive.
// Ans:
    //         const showPrint = document.querySelector('.repeatPrint');
    //         let userValue = +prompt('Enter a number')
    //         console.log(userValue);
    //         for (var i = userValue; i >=  0; i-=0.5){
    // showPrint.innerHTML += (`${[i]},`);
    //         }

// Q 17. The even/odd reporter
//     Write a for loop that will iterate from 0 to 20. For each 
//     iteration, it will check if the current number is even or odd, and 
//     report that to the screen (e.g. "2 is even").
//         const evenOdd = document.querySelector('.evenOdd');
// for (let i = 0; i <= 20; i++){
//         if(i%2===0){
//             evenOdd.innerHTML += (`${i} is even<br>`);
//         }
// else 
// {
//     evenOdd.innerHTML += (`${i} is odd<br>`)
// }

// }

// Q :18. Write a program to calculate the product of the odd integers 
// from 1 to 7.
// // Ans:
//        const showProductNumber = document.querySelector('.oddInteger');
//             let mulNumber =1;
//             for(let i = 1; i <= 7; i+=2){
//                     mulNumber  *= i;
//                 }
//                 showProductNumber.innerHTML = (`The Product of odd intgers from 1 to 7 is <b>${mulNumber}</b>`);
            
            
// Q 19 Write a program that will write out a wedge of stars. The user 
// will enter the initial number of stars, and the program will write 
// out lines of stars where each line has one few star than the 
// previous line. Initial number of stars: 7

// Ans:
            // const showStars = document.querySelector('.stars');
            // const userInp = +prompt('Enter star number');
            // for(let i = userInp; i > 0; i--){
            //         let stars = ' ';
            //         for (let j = 0; j < i; j++) {
            //         stars += ('*')
            //     }
            //     showStars.innerHTML += (`${stars}<br>`);
                 
            // }

// 20. Write a program to create the following patterns in your 
//     browser. Take number of lines as an input
  const starSquare = document.querySelector('.starSquare');
   const starInc = document.querySelector('.starInc');
   const starDec =document.querySelector('.starDec');
// a
        // function showSquarePattern(size){
        //     for(let i = 0; i < size; i++){
        //     let showSqure = '';
        //     for(let j = 0; j < size; j++){
        //         showSqure +=('*')
        //     }
        //     starSquare.innerHTML += (`${showSqure}<br>`)
        //     }
        // }
        //     const size = +prompt('Enter size ');
        //     showSquarePattern(size)

// b
       
    //     function increPattern(size){
    //         for (let i = 1; i <= size; i++) {
    //             let showPattern = '';
    //             for (let j = 1; j <= i; j++){
    //                 showPattern += '*';
    //             }
    //             starInc.innerHTML +=(`${showPattern}<br>`);
    //         }
    //     }
    // const size = +prompt('Enter size to print');
    // increPattern(size);

// c     
            function decrePattern(size) {
                for(let i = size; i>0; i--){
                    let decPatShow = '';
                    for(let j = 0; j < i; j++){
                        decPatShow += '*'; 
                    }
                    starDec.innerHTML += (`${decPatShow}<br>`) 
                }    
            }
            const size = +prompt('Enter size');
            decrePattern(size); 

                

   