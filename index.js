const historia = document.getElementById("botao-historia");
const musica = document.getElementById("musica");
const fundoMorcego = document.getElementById("background-video");
localStorage.setItem("pagina", JSON.stringify("1"));

document.addEventListener("DOMContentLoaded", () => {
  localStorage.setItem("audioTime", 0);
  localStorage.setItem("audioState", "playing");
  const audioState = localStorage.getItem("audioState");

  if (audioState === "playing") {
    musica.currentTime = parseFloat(localStorage.getItem("audioTime")) || 0;
    musica.play();
  }

  musica.addEventListener("play", () => {
    localStorage.setItem("audioState", "playing");
  });

  musica.addEventListener("pause", () => {
    localStorage.setItem("audioState", "paused");
  });

  musica.addEventListener("timeupdate", () => {
    localStorage.setItem("audioTime", musica.currentTime);
  });

  fundoMorcego.play();
  setInterval(() => {
    fundoMorcego.currentTime = 0;
    fundoMorcego.play();
  }, 10000);
  
});
const livre = document.getElementById("botao-livre");
historia.addEventListener("click", () => {
  localStorage.setItem("modo", JSON.stringify("historia"));
  localStorage.setItem("save", JSON.stringify("ca1-ex1"));
  localStorage.setItem("exAtual", JSON.stringify("ca1-ex1"));
  localStorage.setItem("exConcluidos", JSON.stringify([]));
  localStorage.setItem("audioTime", musica.currentTime);
  localStorage.setItem("audioState", musica.paused ? "paused" : "playing");
  window.location.href = "./tela_historia/index.html";
});
livre.addEventListener("click", () => {
  localStorage.setItem("modo", JSON.stringify("livre"));
  localStorage.setItem("save", JSON.stringify("ca1-ex1"));
  localStorage.setItem("exAtual", JSON.stringify("ca1-ex1"));
  localStorage.setItem("exConcluidos", JSON.stringify([]));
  localStorage.setItem("pagina", JSON.stringify("4"));
  localStorage.setItem("audioTime", musica.currentTime);
  localStorage.setItem("audioState", musica.paused ? "paused" : "playing");
  window.location.href = "./tela_historia/index.html";
});
