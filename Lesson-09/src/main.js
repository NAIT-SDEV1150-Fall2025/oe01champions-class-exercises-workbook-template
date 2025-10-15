console.log('Lesson 09 starter loaded');

// ============== Propagation demo

// 1. Select required elements
const log = document.getElementById('log');
const outer = document.getElementById('outer');
const inner = document.getElementById('inner');
const button = document.getElementById('btn-propagate');
const link = document.getElementById('link');


// 2. Add event listeners

function outerClick()
{
    console.log('Outer Div Clicked')
  log.textContent += 'Outer Div Clicked (Capture) | '  
}

// 2.1 Outer div - using a named function

outer.addEventListener('click', outerClick);

// 2.2 Inner div - using an anonymous function

inner.addEventListener('click', function(){
    console.log('Inner Div Clicked')
    log.textContent += 'Inner Div Clicked | '
})

// 2.3 Button - using an arrow function

button.addEventListener('click', (e)=>{
    console.log('Button clicked')
    log.textContent += 'Button Clicked | '

    e.stopPropagation();
})

link.addEventListener('click', (e)=>{
 
    e.preventDefault();
})
// ============== Gallery demo

// 1. Select required elements
const thumbnails = document.querySelector('.thumbnails');
const viewer = document.querySelector('.viewer');
const mainImage = document.getElementById('main-image');
const closeBtn = document.getElementById('close-viewer');

// 2. Add event listeners
// 2.1 Thumbnails container - using an arrow function
thumbnails.addEventListener('click', (e)=>{

    if(e.target.tagName === 'IMG')
    {
        mainImage.src = e.target.src;
        viewer.classList.add('show');
    }
})

// 2.2 Close button - using an arrow function
closeBtn.addEventListener('click',()=>{
viewer.classList.remove('show');
})

// Student TODO: Add event listener to document, which closes
addEventListener('keydown', (e)=>{
    if(e.key === 'Escape'){
    viewer.classList.remove('show');
    }
})

// the viewer when the Escape key is pressed
