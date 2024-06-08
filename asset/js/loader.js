const loaderLoader = async () => {
  const Container = document.querySelector(".container_filter_cards");
  Container.innerHTML = "";
  for (let i = 0; i < 10; i++) {
    const loaderCard = document.createElement("div");
    loaderCard.classList.add("card-loader");
    loaderCard.innerHTML = `
      <div class="content-loader">
        <div class="img-loader"></div>
        <div class="title-loader"></div>
        </div>
      `;
    Container.appendChild(loaderCard);
  }
};
