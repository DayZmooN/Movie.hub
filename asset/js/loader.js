const loader = async () => {
  const containerFilter = document.querySelector(".container_filter_cards");
  const containerSlider = document.querySelector(".slider-wrapper");
  containerFilter.innerHTML = "";
  // containerSlider.innerHTML = "";

  for (let i = 0; i < 10; i++) {
    const loaderCard = document.createElement("div");
    loaderCard.classList.add("card-loader");
    loaderCard.innerHTML = `
      <div class="content-loader">
        <div class="img-loader"></div>
        <div class="title-loader"></div>
      </div>
    `;
    containerSlider.appendChild(loaderCard); // Ajoute également à containerSlider

    containerFilter.appendChild(loaderCard);
  }
};

loader(); // Appelle la fonction loader une seule fois
