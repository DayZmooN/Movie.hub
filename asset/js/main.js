document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.getElementById("checkbox");
    const modal = document.getElementById("modal");

    checkbox.addEventListener("change", function () {
        if (this.checked) {
            modal.style.display = "flex";
            // body.style.overflow = "hidden";
            setTimeout(() => {
                modal.style.opacity = 1;
            }, 10);
        } else {
            modal.style.display = "none";
            modal.style.opacity = 0;  // Rend la modal complètement transparente
            setTimeout(() => {  // Un petit délai pour être sûr que l'opacité est bien à 0
                modal.style.display = "none";  // Enfin, on masque la modal
            }, 500);
        }
    });
});
