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
const hoverStatus = document.querySelector('#hover-status');

// 3. click: toggle a highlight class on the body
btnToggle.addEventListener('click', () => 
{
document.body.classList.toggle('highlight')

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
hoverStatus.textContent='Status: HOvering';
})
hoverCard.addEventListener('mouseout', ()=>{
hoverStatus.textContent='Status: Not Hovering'
})

// 6. keydown: show last key pressed (global listener)

// 7. Event delegation: one listener on the <ul> for all <li> elements
