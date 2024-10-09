let container=document.getElementById("overall");
document.getElementById("home").addEventListener("click",function(){
    let h=document.createElement("h1");
    h.textContent="success";
    container.appendChild(h);
})
let themeSelector=document.getElementById("themeSelector");
themeSelector.addEventListener("click",function(){
    let theme=document.getElementById("theme");
    let a=document.getElementById("main");
    theme.classList.toggle("bg-dark");
    a.classList.toggle("dark-theme");
})