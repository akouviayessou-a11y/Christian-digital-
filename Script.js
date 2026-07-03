document.addEventListener("DOMContentLoaded", function () {

    const bouton = document.getElementById("btnProjet");

    bouton.addEventListener("click", function () {

        alert(`👋 Bonjour ! Merci de votre intérêt pour Christian Digital.\n\nNotre entreprise est prête à vous accompagner dans votre projet numérique.`);

    });

});

const cartes = document.querySelectorAll(".card");

cartes.forEach(function(carte){

    carte.addEventListener("mouseenter", function(){

        carte.style.transform = "translateY(-10px) scale(1.03)";

    });

    carte.addEventListener("mouseleave", function(){

        carte.style.transform = "translateY(0px) scale(1)";

    });

});

window.addEventListener("scroll", function(){

    const nav = document.querySelector("nav");

    if(window.scrollY > 50){

        nav.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";

    }else{

        nav.style.boxShadow = "none";

    }

});