var button = document.querySelectorAll(".btn")
var back = document.querySelector("body");

// console.log(button);
// console.log(back);

button.forEach(function(button)
{
//   console.log(button);
   button.addEventListener("click", function(e)
   {
    //  console.log(e);
    //  console.log(e.target);

     if(e.target.id === 'grey')
     {
        back.style.backgroundColor = "grey";
     }
     if(e.target.id === "yellow")
     {
        back.style.background = "yellow"
     }
     if(e.target.id === "red")
     {
        back.style.background = "red";
     }
     if(e.target.id === "pink")
     {
        back.style.background = "pink"
     }
     if(e.target.id === "white")
     {
        back.style.background = "white"
     }
   });
});