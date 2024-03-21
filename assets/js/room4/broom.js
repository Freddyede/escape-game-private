document.addEventListener("DOMContentLoaded", () => {
  const broom = document.getElementById("broom");
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  document.addEventListener("mousemove", (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const maxX = screenWidth - broom.offsetWidth;
    const maxY = screenHeight - broom.offsetHeight;

    const newLeft = Math.min(mouseX, maxX);
    const newTop = Math.min(mouseY, maxY);

    const deltaX = mouseX - newLeft;
    const deltaY = mouseY - newTop;

    const newX = newLeft - deltaX;
    const newY = newTop - deltaY;

    broom.style.left = `${newX}px`;
    broom.style.top = `${newY}px`;
  });

  broom.addEventListener("mousemove", (event) => {
    event.stopPropagation();
  });
});
