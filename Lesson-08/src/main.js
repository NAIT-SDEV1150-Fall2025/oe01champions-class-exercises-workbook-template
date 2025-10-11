console.log('Lesson 08 starter loaded');
function inlineEvent()
{
    alert('Second alert')
}
console.log('exited the function')
document.querySelector('#clickTwo').onclick= function () {
    alert('Third Alert');
}
// 1. load event (document ready) - NOTE this is unnecessary if using `defer` in the script tag or using module type

// 2. Selecting elements
const btnToggle=document.querySelector('#btn-toggle');
const btnMessage=document.querySelector('#btn-message');
const message=document.querySelector('#message');
const hoverCard = document.querySelector('#hover-card');
const test = document.querySelector('.card');
const hoverStatus = document.querySelector('#hover-status');
const keyOutput = document.querySelector('#key-output');
const list = document.querySelector('#list');
const selection = document.querySelector('#selection');
const test1 = document.querySelector('#page-title')

// 3. click: toggle a highlight class on the body
btnToggle.addEventListener('click', () => 
{
//document.body.classList.toggle('highlight')
test1.classList.toggle('highlight')

const on=document.body.classList.contains('highlight')

if(on===true){
    btnToggle.textContent='Highlight is ON'
}
else{
    btnToggle.textContent='Highlight is OFF'
}
})
// 4. click: change message textContent (no HTML parsing)
btnMessage.addEventListener('click', () => {
    const timestring=new Date().toLocaleTimeString();
    message.textContent=`Message updated at ${timestring}`    
});

// 5. mouseover / mouseout: display hover status on the card
hoverCard.addEventListener('mouseover', ()=>{
hoverStatus.textContent='Status: Hovering';
})
hoverCard.addEventListener('mouseout', ()=>{
hoverStatus.textContent='Status: Not Hovering'
})

// 6. keydown: show last key pressed (global listener)
document.addEventListener('keydown', (e)=>{
keyOutput.textContent=`Last key pressed is: ${e.key} and code is ${e.code}`
})

// 7. Event delegation: one listener on the <ul> for all <li> elements
list.addEventListener('click', (event)=>{
    if(event.target.tagName === 'LI')
    {
        const li = event.target

        list.querySelectorAll('li.active').forEach(el=>el.classList.remove('active'));
        li.classList.add('active')

        const id = li.getAttribute('data-id')
        selection.textContent=`Selected item: ${id}`;
    }
})