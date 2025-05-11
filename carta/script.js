const btnAbrir = document.querySelector("#Abrir");
const btnCerrar = document.querySelector("#Cerrar");

//Abrir Carta
btnAbrir.addEventListener("click", () => {
    const ElementoSuperior = document.querySelector(".superior");
    ElementoSuperior.classList.add("abrir-superior");

const h1  = document.querySelector("h1");
const p = document.querySelector("p");
h1.style.transform = "translateY(-200px)";
p.style.transform = "translateY(-200px)";
h1.style.transition = "transform 0.65s ease-in-out";
p.style.transition = "transform 0.65s ease-in-out";

const IconoCorazon = document.querySelector(".bx");
IconoCorazon.classList.add("bx-rotada");

setTimeout(() => {
    const ElementoMensaje = document.querySelector(".mensaje"); 
    ElementoMensaje.classList.add("abrir-mensaje");
    ElementoSuperior.style.zIndex = -1;
}, 700);
});

//Cerrar Carta
btnCerrar.addEventListener("click",() => {
    const ElementoSuperior = document.querySelector(".superior");
 
    const ElementoMensaje = document.querySelector(".mensaje")
    ElementoMensaje.classList.remove("abrir-mensaje");
   
setTimeout(() => {
const h1  = document.querySelector("h1");
const p = document.querySelector("p");
h1.style.transform = "translateY(0px)";
p.style.transform = "translateY(0px)";

const IconoCorazon = document.querySelector(".bx");
IconoCorazon.classList.remove("bx-rotada");

ElementoSuperior.style.zIndex = 0;
ElementoSuperior.classList.remove("abrir-superior");
}, 700);
});

//Con clik en la carta
const contendedor = document.querySelector("#AbrirContenedor");
contendedor.addEventListener("click", () => {
    const ElementoSuperior = document.querySelector(".superior");
ElementoSuperior.classList.add("abrir-superior");
const h1  = document.querySelector("h1");
const p = document.querySelector("p");
h1.style.transform = "translateY(-200px)";
p.style.transform = "translateY(-200px)";
h1.style.transition = "transform 0.65s ease-in-out";
p.style.transition = "transform 0.65s ease-in-out";

const IconoCorazon = document.querySelector(".bx");
IconoCorazon.classList.add("bx-rotada");

setTimeout(() => {
    ElementoSuperior.style.zIndex = -1;
    const ElementoMensaje = document.querySelector(".mensaje"); 
    ElementoMensaje.classList.add("abrir-mensaje");
}, 700);
})

