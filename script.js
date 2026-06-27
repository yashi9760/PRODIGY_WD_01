// Change navbar color on scroll

window.addEventListener("scroll", function(){

    const navbar = document.getElementById("navbar");

    if(window.scrollY > 50){
        navbar.style.background = "#00c6ff";
    }else{
        navbar.style.background = "#222";
    }

});