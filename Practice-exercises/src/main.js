//This is old piece of functionality
/*
import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
*/
console.log('This is the step-1 after entering to the main.js block')
const card_container=document.querySelector('.card')
let input
input= prompt('Please enter a label','JavaScript as Default')

//displaying the user input on the console.
console.log(input);

//Conditinal statement will be used to cover the objective.
if(input===null)
{
  console.log('On clicking CANCEL button, Null value is returned.')
  document.querySelector('.card').innerHTML=`User clicked Cancel, Hence, the response is ${input}`

} else if(input.trim()==="")
{
  console.log('User is trying to enter empty string')
  alert("Entering a empty string is not allowed")

  do
  {

      input= prompt("Please enter a correct label")

      
      if(input===null)
      {
        console.log('On clicking CANCEL button, Null value is returned.')
        document.querySelector('.card').innerHTML=`User clicked Cancel, Hence, the response is ${input}`

      } 
    else if(input.trim()==="")
      {
        console.log('User is trying to enter empty string')
        alert("Entering a empty string is not allowed")
        //document.querySelector('.card').innerHTML=`User tried entering empty string, Hence, the response is ${input}`
      }
  }while(input.trim()==="")

  document.querySelector('.card').innerHTML=`User finally entered string value, Hence, the response is ${input}`
} else
    {
      console.log('User input is: '+ input)
        //document.querySelector('.card').innerHTML=input;

       const addCard= document.createElement('section');
       addCard.className='card'
       addCard.textContent=input.trim();
       card_container.appendChild(addCard)
    }