// Botão subir ao topo
const btnTopo = document.getElementById("btnTopo");

window.onscroll = () => {
  if (window.scrollY > 200) {
    btnTopo.style.display = "block";
  } else {
    btnTopo.style.display = "none";
  }
};

btnTopo.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Trocar título da aba ao passar o mouse
const tituloOriginal = document.title;
window.addEventListener("blur", () => {
  document.title = "Volta aqui! 💻";
});
window.addEventListener("focus", () => {
  document.title = tituloOriginal;
});

// Menu mobile toggle
const menuToggle = document.getElementById("menu-toggle");
const menuMobile = document.getElementById("menu-mobile");

menuToggle.onclick = () => {
  menuMobile.classList.toggle("hidden");
};
