const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const reset= document.getElementById("reset");

const box=document.getElementById("box");

//Increment
increment.addEventListener("click",function ()
{
   const value=Number(box.innerText);
   if(value>=9)
  {
     alert("value is greater than 9");
  }
  else
  {
    box.innerText=value +1;
  }
})

//Decrement

decrement.addEventListener("click", ()=>
{
    const value=Number(box.innerText);
     if(value > 0)
    {box.innerText=value - 1;}
     else 
   {  alert("Negative value is not allowed");}
  
});

//Reset
reset.addEventListener("click",()=>
{
    box.innerText=0;

});

