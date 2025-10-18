console.log('Lesson 10 starter loaded');

const form = document.querySelector('#contact-form');
const result = document.querySelector('#result');

function serializeForm(formEl) {
  const { fullName, email, bio } = formEl.elements;

  const plan = formEl.elements.plan.value;

  const topics = Array.from(formEl.querySelectorAll('input[name="topics"]:checked'))
    .map(cb => cb.value);

  return {
    fullName: fullName.value.trim(),
    email: email.value.trim(),
    plan,
    topics,
    bio: bio.value.trim(),
    submittedAt: new Date().toLocaleString(),
  };
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const data = serializeForm(form);

  result.textContent
    = `Submission received:
      - Name: ${data.fullName || '(none)'}
      - Email: ${data.email || '(none)'}
      - Skill: ${data.plan || '(none)'}
      - Strengths: ${data.topics.length ? data.topics.join(', ') : '(none)'}
      - Bio: ${data.bio || '(none)'}
      - Time: ${data.submittedAt}`;
  
  // STUDENT TODO: Add validation logic to the form, ensure all fields are valid before allowing submission
  // HINT: see the 'input' event listener below for examples of validation logic. Perhaps
  // you can reuse some of that code here to validate all fields on submit, or create validation
  // functions that can be reused in both places.
});

form.addEventListener('reset', () => {
  result.textContent = 'Awaiting submission...';
});

// 1. Add validation logic to the form on 'input' events
form.addEventListener('input',(event)=>{
const target = event.target;
const error = document.querySelector('.error-msg');

// 1.1 custom validation for fullName (must contain two words)
if(target.name === 'fullName')
{
  const nameParts = target.value.trim().split(' ')
  if(nameParts.length < 2){
    target.classList.add('error');
    target.setCustomValidity('Full Name must contain atleast two words.');
    error.textContent = 'Please fill the fullName field.'
  }else {
    target.classList.remove('error');
    target.setCustomValidity('');
  }
}

if(target.name === 'bio'){
  if(target.value.trim().length < 40){
    target.setCustomValidity('Bio must be atleast 40 characters long');
  }
  else {
    target.setCustomValidity('');
  }
}

})



// 1.2 custom validation for bio (minimum length)

// 1.3 custom validation for email (basic '@' symbol check)

// 1.4 report the validity status to the user
  