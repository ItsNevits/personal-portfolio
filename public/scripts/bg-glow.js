// Efecto de punto de luz que sigue al mouse en el fondo
let glowX = 60;
let glowY = 30;
let needsUpdate = false;

document.addEventListener('mousemove', (e) => {
  glowX = (e.clientX / window.innerWidth) * 100;
  glowY = (e.clientY / window.innerHeight) * 100;
  needsUpdate = true;
});

function updateGlow() {
  if (needsUpdate) {
    document.body.style.setProperty('--glow-x', `${glowX}%`);
    document.body.style.setProperty('--glow-y', `${glowY}%`);
    needsUpdate = false;
  }
  requestAnimationFrame(updateGlow);
}
updateGlow(); 