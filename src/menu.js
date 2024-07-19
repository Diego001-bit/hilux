let dive=document.getElementById("area-menu");
window.addEventListener('resize', tamanho)
onload=tamanho()
export function tamanho() {
  if (window.innerWidth >= 500) {
    dive.innerHTML = `<a href="index.html">Home</a>
    <a href="https://www.toyota.com.br/modelos/hilux-cabine-dupla" target="_blank">Mercado</a>
    <a href="https://toyotabrasil.gupy.io/" target="_blank">sobre</a>`;
  } else {
    dive.innerHTML = `<i class="fa-solid fa-bars" id="menu-bars"></i>`; // Corrigi para 'none' para ocultar o elemento quando a tela for maior que 720px
  }
}
// let menuBars=document.getElementById("menu-bars")
// let partemenu=document.getElementById("partemenu")
// menuBars.addEventListener("click",apareca())
// function apareca()