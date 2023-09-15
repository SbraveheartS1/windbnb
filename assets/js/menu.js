document.addEventListener("DOMContentLoaded", (event) => {

    
    let inputLocation = document.querySelector(".navbar__input");
    let inputGuest = document.querySelector(".navbar__input-guest");

    let mobileMenu = document.querySelector(".menu__mobile");

    let btnClose = document.querySelector(".mobile__xmark");

    let btnSearch = document.querySelector(".mobile__search");


    // Obtén una referencia a tu elemento .layout
    let layout = document.querySelector(".layout");

    // Agrega un manejador de eventos para el evento "resize" de la ventana
    window.addEventListener("resize", function() {
    // Verifica el ancho actual de la ventana
    let windowWidth = window.innerWidth || document.documentElement.clientWidth;

    // Comprueba si el ancho es menor de 600 píxeles
    if (windowWidth < 900) {
        // Aquí puedes ejecutar tu código o desencadenar el evento que desees
        inputLocation.addEventListener("click", (event) => {
            let visible = document.querySelector(".menu__mobile--visible");
    
            if(!visible){
                mobileMenu.classList.add("menu__mobile--visible");
            }
        })
    
        inputGuest.addEventListener("click", (event) => {
            let visible = document.querySelector(".menu__mobile--visible");
    
            if(!visible){
                mobileMenu.classList.add("menu__mobile--visible");
            }
        })
    
        btnClose.addEventListener("click", (event) => {
            let visible = document.querySelector(".menu__mobile--visible");
    
            if(visible){
                mobileMenu.classList.remove("menu__mobile--visible");
            }
        })
    
        btnSearch.addEventListener("click", (event) => {
            let visible = document.querySelector(".menu__mobile--visible");
    
            if(visible){
                mobileMenu.classList.remove("menu__mobile--visible");
            }
        })

    }
    });


    
})