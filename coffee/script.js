var btn=document.querySelector("button")
var input=document.querySelector("input")
var dis=document.querySelector(".final-gateway h4")
var fp=document.querySelector(".final-gateway h3")
var flag=0

btn.addEventListener("click",function()
{
   if( input.value>=5 &&input.value<10)
   {
     dis.innerHTML=`<h5id="dis-statement">10%discount applied </h5>
                     <h4>total price:${(input.value*10)}</h4>`
    
    
     fp.innerHTML=`<h3>final price:${(input.value*10)-((input.value*10)/10)}</h3>`

   }
   else if(input.value >=10){
    dis.innerHTML=`<h5 id="dis-statement">20%discount applied </h5>
    <h4>total price:${(input.value*10)}</h4>`
    fp.innerHTML=`<h3>final price:${(input.value*10)-((input.value*10)/5)}</h3>`
   }

   
    else if(input.value<=0)
{
    fp.innerHTML=`<h3>final price:Invalid</h3>`
    dis.innerHTML=`<h3>total  price:Invalid</h3>`

}
else if(input.value>=1 && input.value<=6)
   {   
    fp.innerHTML=`<h3>final price:${(input.value*10)}</h3>`
    dis.innerHTML=`<h5 id="dis-statement">No discount available  </h5>
    <h4>total price:${(input.value*10)}</h4>`
    

   }
});


 



