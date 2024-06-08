document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.getElementById("checkbox");
  const modal = document.getElementById("modal");

  checkbox.addEventListener("click", function () {
    if (this.checked) {
      setTimeout(() => {
        modal.style.display = "block";
        modal.style.transition = "opacity 0.5s ease";

        modal.style.opacity = 1;
      }, 500);
    } else {
      setTimeout(() => {
        modal.style.opacity = 0;
        modal.style.transition = "opacity 0.5s ease-in-out";
        modal.style.opacity = 0;

        modal.style.display = "none"; // Enfin, on masque la modal
      }, 500);
    }
  });
});
