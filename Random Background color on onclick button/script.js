const containerEl=document.getElementById("container");
const btnEl=document.getElementById("btn");
var index=0;

btnEl.addEventListener("click",()=>{
  
var colors=["red","blue","yellow","pink"];
document.getElementsByTagName("body")[0].style.background=colors[index++];

if(index > colors.length - 1)
index = 0;

});