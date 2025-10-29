console.log('Lesson 14 loaded');

// importing dayjs library
import dayjs from 'dayjs';

// Lets import from Utils.js
// named export is used to call specific variale, function or object from customized utils js to here, using curly braces {}
import { greetUser } from './utils.js';

// a way to import the default values from utils js.
import utils from './utils.js';

// How can we import everything from utils js.
// import * as utils from './utils.js';

// import animation method from animejs library which we installed using npm.
import { animate } from 'animejs';

const currentDate = dayjs().format('dddd, MMMM D, YYYY');

document.querySelector('#today').textContent = `Today's date is: ${currentDate}`;

// ask a input from the user.
const name = prompt('Enter your name');

// Pass the user's input for a dynamic value response.
const message = greetUser(name || utils.defaultName);

// Now send back to the HTML element's address.
document.querySelector('#greeting').textContent = message;

animate('#greeting', {
  translateX: [-20, 0],
  opacity: [0, 1],
  duration: 2000,
  easing: 'easeOutQuad',
  loop: false,
});
