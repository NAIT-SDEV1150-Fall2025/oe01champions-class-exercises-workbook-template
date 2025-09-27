function addList()
{
  const featureList=document.querySelector('#feature-list')
  const li=document.createElement('li');
  li.className='feature'
  li.textContent='Flexible'
  featureList.appendChild(li);
}
function allListItems()
{
  const features=document.querySelector('.feature')
  features.forEach((li, idx)=>{
    li.textContent=`${idx+1}.${li.textContent}`;
  });
}