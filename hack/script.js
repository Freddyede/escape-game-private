document.addEventListener('mousemove', (e) => {
  const { clientX, clientY } = e;
  const { innerWidth, innerHeight } = window;

  const posX = (clientX / innerWidth) * 100;
  const posY = (clientY / innerHeight) * 100;

  const scene = document.querySelector('.scene');
  if (scene) {
    scene.style.perspectiveOrigin = `${posX}% ${posY}%`;
  }
});

document.addEventListener('mousemove', (e) => {
  const { clientX, clientY } = e;
  const { innerWidth, innerHeight } = window;

  const posX = (clientX / innerWidth) * 100;
  const posY = (clientY / innerHeight) * 100;

  const scene = document.querySelector('.scene');
  if (scene) {
    scene.style.perspectiveOrigin = `${posX}% ${posY}%`;
  }
});
document.addEventListener('mousemove', (e) => {
  const { clientX, clientY } = e;
  const { innerWidth, innerHeight } = window;

  const posX = (clientX / innerWidth) * 100;
  const posY = (clientY / innerHeight) * 100;

  const scene = document.querySelector('.scene');
  if (scene) {
      scene.style.perspectiveOrigin = `${posX}% ${posY}%`;
  }
});

document.addEventListener('mousemove', (e) => {
  // Calculer la position de la souris en pourcentage
  const posX = (e.clientX / window.innerWidth) * 100;
  const posY = (e.clientY / window.innerHeight) * 100;

  // Obtenir la ligne et la scène
  const line = document.querySelector('.line');
  const scene = document.querySelector('.scene');

  // Modifier la perspective en fonction de la position de la souris
  if (scene) {
      scene.style.perspectiveOrigin = `${posX}% ${posY}%`;
  }

  // Appliquer une animation à la ligne pour qu'elle s'étire et monte le mur
  if (line) {
      const scaleX = posX / 100; // La longueur de la ligne sera basée sur la position X de la souris
      const scaleY = posY > 50 ? (posY - 50) / 50 : 0; // Monter le mur seulement si la souris est dans la partie supérieure
      line.style.transform = `translateZ(-${posX}px) scaleX(${scaleX}) scaleY(${scaleY})`;
  }
});
document.addEventListener('mousemove', (e) => {
  const { clientX, clientY } = e;
  const { innerWidth, innerHeight } = window;

  const posX = (clientX / innerWidth) * 100;
  const posY = (clientY / innerHeight) * 100;

  const scene = document.querySelector('.scene');
  scene.style.perspectiveOrigin = `${posX}% ${posY}%`;
});
