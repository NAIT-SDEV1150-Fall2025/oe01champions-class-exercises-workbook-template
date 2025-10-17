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

    //radio plan
    const plan = formE1.elements.plan.value;

    // Access values using both form.elements and query selectors
    const topics = Array.from(formE1.querySelectorAll('input[name="topics"]:checked')).map(cb => cb.value);

    //Return the structured values back to the form.
    return{
        fullName: fullName.value.trim(),
        email: email.value.trim(),
        plan,
        topics,
        bio: bio.value.trim(),
        submittedAt: new Date().toLocaleString()
    };
}


// 3. Handle form submission
// Use 'submit' event on the form, not 'click' on the button

form.addEventListener('submit', (e)=>{
    e.preventDefault();

   const data = serializeForm(form);

//Display the received results
result.textContent=
`Submission received:
-Name: ${data.fullName ||'(none)'}
-Email: ${data.email || '(none)'}
-Skill: ${data.plan || '(none)'}
-Strengths: ${data.topics.length ? data.topics.join(', ') : '(none)'}
-Bio: ${data.bio || '(none)'}
-Time: ${data.submittedAt}`;
})

// Prevent default behavior (navigation/reload) using event.preventDefault()

// 4. Handle form reset - reset the result area text when the form is reset

form.addEventListener('reset', ()=>{
    result.textContent='Form is ready to be filled again.'
})
