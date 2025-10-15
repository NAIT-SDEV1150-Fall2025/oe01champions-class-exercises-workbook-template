console.log('Lesson 10 starter loaded');

// 1. Select required elements

const form = document.querySelector('#contact-form');
const result = document.querySelector('#result');

// 2. Function to gather and structure form data

function serializeForm(formE1)
{
    //const fullName = formE1.elements.fullName;
    //const email = formE1.elements.email;
    //const bio = formE1.elements.bio;

    //Destructuring: This is a feature in JavaScript that lets you unpack the values from arrays.
const {fullName, email, bio} = formE1.elements;

const plan = formE1.elements.plan.value;

Array.from(formE1.querySelectorAll('input[name="topics]:checked')).map(cb => cb.value);

}

// Access values using both form.elements and query selectors

// 3. Handle form submission
// Use 'submit' event on the form, not 'click' on the button

addEventListener('submit', (e)=>{
    e.preventDefault();

    serializeForm(form);
})

// Prevent default behavior (navigation/reload) using event.preventDefault()

// 4. Handle form reset - reset the result area text when the form is reset
