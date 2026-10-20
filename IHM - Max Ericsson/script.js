const temaknapp = document.querySelector("#tema");
temaknapp.hidden = false;

function bytTema() {
  document.body.classList.toggle("morkt");
  if (document.body.classList.contains("morkt")) {
    temaknapp.textContent = "☀";
    temaknapp.setAttribute("aria-label", "Byt till ljust läge");
    temaknapp.title = "Byt till ljust läge";
  } else {
    temaknapp.textContent = "☾";
    temaknapp.setAttribute("aria-label", "Byt till mörkt läge");
    temaknapp.title = "Byt till mörkt läge";
  }
}

temaknapp.addEventListener("click", bytTema);

document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const bounds = card.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    card.style.setProperty("--project-rotate-x", `${-y * 7}deg`);
    card.style.setProperty("--project-rotate-y", `${x * 7}deg`);
  });

  card.addEventListener("pointerleave", () => {
    card.style.setProperty("--project-rotate-x", "0deg");
    card.style.setProperty("--project-rotate-y", "0deg");
  });
});

const contactBox = document.querySelector(".vintage-contact-box");

if (
  contactBox &&
  window.VANTA &&
  window.VANTA.FOG &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  window.VANTA.FOG({
    el: contactBox,
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200,
    minWidth: 200,
    highlightColor: 0xc65a6d,
    midtoneColor: 0x932f43,
    lowlightColor: 0x3b0e17,
    baseColor: 0x330a12,
    blurFactor: 0.35,
    speed: 1.45,
    zoom: 0.68,
  });
}
