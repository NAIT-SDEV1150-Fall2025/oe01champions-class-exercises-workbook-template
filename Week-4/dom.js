function demo1()
{
    console.log('YOu entered in DEMO1 function')
    document.querySelector('#dom_information').style.backgroundColor="pink"
}
function demo2()
{
    console.log('You entered in DEMO2 function')
    document.querySelector('.DOM_Info').style.backgroundColor="Transparent"
}
function demo3()
{
    console.log('You entered in DEMO3 function')
    document.querySelector('p').style.backgroundColor="#00FFFF"
}

//This function will calculate all p tags on the web page.
function demo6()
{
  console.log('Showing the QuerySelectorALl features')
  const pList=document.querySelectorAll("p")
    const count=pList.length;
    document.querySelector('#count1').innerHTML=`<strong>${count}</strong>`;
}
function demo7()
{
    const pList=document.querySelectorAll('p')
    pList.forEach(p=>{p.style.backgroundColor='#a9c2c2ff'})
}
function demo8()
{
    let variable=document.querySelector('#dom_information')
    document.querySelector('#attribute').innerHTML=  variable.getAttribute("class")
}
function demo9()
{
    document.querySelector('.DOM_Info').setAttribute("class","democlass")
}
function setAttr(selector,name,value)
{
    const element=document.querySelector(selector);
    if(element)
    {
        element.setAttribute(name, value)
        console.log('If statement is true and executed')
    }
    else
    {
        console.warn("There is an error and no selector has passed in this function")
    }
}