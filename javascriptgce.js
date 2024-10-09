let container=document.getElementById("overall");
document.getElementById("home").addEventListener("click",function(){
   
})
let themeSelector=document.getElementById("themeSelector");
themeSelector.addEventListener("click",function(event){  
    let textofanchor=document.querySelectorAll(".nav-link, .navbar-brand");
    let theme=document.getElementById("theme");
    theme.classList.toggle("bg-dark");
    if(event.target.value==="Dark Theme"){
        textofanchor.forEach(anchor => {
            anchor.style.color="white" ;
        });
    }
    else{
        textofanchor.forEach(anchor => {
            anchor.style.color="black" ;
        });
    }
    
})
