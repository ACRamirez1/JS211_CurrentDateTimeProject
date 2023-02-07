// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**

// const { doc } = require("mocha/lib/reporters");

// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date());
console.log('hello')

const displayDate = () => {
  const currentDate = new Date();

  document.getElementById("display-element").innerHTML = currentDate;
};

// Write a JavaScript program to convert a number to a string.
const numToString = () => {
  let num = document.getElementById("num-to-str").value;

  let text = num.toString();

  document.getElementById("number").innerHTML = text;
};

// Write a JavaScript program to convert a string to the number.
const strToNumber = () => {

  let str = document.getElementById("str-to-num").value;

  let num = Number(str);

  console.log(`This is a ${typeof num}`);

  document.getElementById("results").innerHTML = num;
};

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// * Boolean
// * Null
// * Undefined
// * Number
// * NaN
// * String
const findTypeOf = () => {
let a = true
console.log(`a is a ${typeof a}`) 
let b = null;
let c;
let d = 32

let e = isNaN('Hello')
if (e == true) {
e = "e is a NaN"
}

f = "Hello"

let h2 = document.getElementById("practice")

let html = `<p>a is a ${typeof a}</p>
            <p>b is an object set to null</p>
            <p>c is a ${typeof c}</p>
            <p>d is a ${typeof d}</p>
            <p>${e}</p>
            <p>f is a ${typeof f}</p>`;

h2.insertAdjacentHTML("afterend", html);


// console.log(`bconsole.log(`c is a ${typeof c}`) is an object set to null`)

// console.log(`d is a ${typeof d`) 

};

// Write a JavaScript program that adds 2 numbers together.

const addTwoNums = () => {

  let numOne = parseInt(document.getElementById("num1").value)
  let numTwo = parseInt(document.getElementById("num2").value)

  sum = numOne + numTwo

  document.getElementById("sum-of-numbers").innerHTML = sum

}

// Write a JavaScript program that runs only when 2 things are true.

const twoTrue = () => {
  let timeForWorkout = document.getElementById("time").value
    
  let workoutAnswer = document.querySelector('input[name="workout"]:checked').value;

    if(workoutAnswer == 'yes' && (timeForWorkout >= '08:00' && timeForWorkout <= '17:00')){
      document.getElementById("time-to-workout").innerHTML = "LET'S GOOOOOOOOOO";
    } else if(workoutAnswer == 'yes' && (timeForWorkout < '08:00' || timeForWorkout > '17:00')){
      document.getElementById("time-to-workout").innerHTML = "Maybe next time!"    
    }else if (workoutAnswer == 'nah' && (timeForWorkout >= '08:00' && timeForWorkout <= '17:00')){
      document.getElementById("time-to-workout").innerHTML = "Your loss"
      console.log('you\'re wrong')
    } else if (workoutAnswer == 'nah' || (timeForWorkout < '08:00' || timeForWorkout > '17:00')){
        document.getElementById("time-to-workout").innerHTML = "Get your priorities straight."
     


    }
}



  // if (timeForWorkout >= '08:00' && timeForWorkout <= '17:00'){
    //   console.log('yeeeeeeeeee')
    //   console.log(timeForWorkout)
    // } else if(timeForWorkout < '08:00' || timeForWorkout > '17:00'){
    //   console.log('ahhhhhh snap!')
    //   console.log(timeForWorkout)
    // }

    //if workout is yes
    //and if time is greater than 08:00 and less than 17:00
    //then workout is yes

    //if workout yes
    //but if time is less than 08:00 and greater than 17:00 
    //then workout is no

    //if workout is no
    //then time is no





// Write a JavaScript program that runs when 1 of 2 things are true.

// Write a JavaScript program that runs when both things are not true.

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey,
// 2. reload VS Code,
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html`
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.

// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
