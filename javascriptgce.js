
let container=document.getElementById("overall");
document.getElementById("home").addEventListener("click",function(){
   
})

let themeSelector=document.getElementById("themeSelector");
themeSelector.addEventListener("change",function(event){  
    let textofanchor=document.querySelectorAll(".nav-link, .navbar-brand");
    let theme=document.querySelector(".navbar-light,.light-theme");
    theme.classList.toggle("bg-dark");
    theme.classList.toggle("navbar-dark");

    if(event.target.value==="Dark Theme"){
        textofanchor.forEach(anchor => {
            anchor.style.color="white" ;
        });
        document.body.style.BackgroundColor="Black";
    }
    else{
        textofanchor.forEach(anchor => {
            anchor.style.color="black" ;
        });
        document.body.style.BackgroundColor="white";
    }
    
})
