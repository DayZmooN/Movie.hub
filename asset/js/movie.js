// Définir les options pour la requête
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNmM1N2U2NTJlZGEyNWZkY2RmMDU4NGQ3ODNkODBmMSIsInN1YiI6IjY0ZmViOTFiZTBjYTdmMDEwZGU5NGJkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.byjm1Rqd_OCdG1uwReYA5Zu6ipksmFeiGPRMO-zUWXY",
  },
};

// Fonction pour afficher les loaders
const loader = (container) => {
  container.innerHTML = ""; // Efface le contenu existant
  for (let i = 0; i < 10; i++) {
    const loaderCard = document.createElement("div");
    loaderCard.classList.add("card-loader");
    loaderCard.innerHTML = `
        <div class="content-loader">
          <div class="img-loader"></div>
          <div class="title-loader"></div>
          <div class="description-loader"></div>
        </div>
      `;
    container.appendChild(loaderCard);
  }
};

// Fonction générique pour afficher les films avec un délai
const displayMovies = async (fetchFunction, container) => {
  loader(container);
  try {
    const data = await fetchFunction();
    setTimeout(() => {
      container.innerHTML = ""; // Efface les loaders après le délai
      data.results.forEach((movie) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <div class="content_card">
              <img class="img_card" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
              <div class="title">
                <h3 class="text_maj">${movie.title}</h3>
                <span class="studio">Marvel Studios</span>
              </div>
            </div>
          `;
        container.appendChild(card);
      });
    }, 1000); // Ajoute un délai de 2000 ms (2 secondes)
  } catch (error) {
    console.error("Error displaying movies:", error);
  }
};

// Fonctions de récupération de données
const fetchMovieNew = async () => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
      options
    );
    const result = await response.json();
    if (!response.ok)
      throw new Error("Problème avec la réponse: " + response.status);
    return result;
  } catch (error) {
    console.error(error);
  }
};

const fetchMoviePopular = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc",
    options
  );
  const result = await response.json();
  if (!response.ok)
    throw new Error("Problème avec la réponse: " + response.status);
  return result;
};

const fetchMovieRate = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=en-US&page=1&sort_by=vote_count.desc",
    options
  );
  const result = await response.json();
  if (!response.ok)
    throw new Error("Problème avec la réponse: " + response.status);
  return result;
};

const fetchMovieBest = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=en-US&page=1&sort_by=primary_release_date.desc",
    options
  );
  const result = await response.json();
  return result;
};

// Écouteur d'événements pour les filtres
document.querySelectorAll(".filter span").forEach((span) => {
  span.addEventListener("click", async (event) => {
    const filter = event.target.dataset.filter;
    const container = document.querySelector(".container_filter_cards");

    // Appeler la fonction de récupération appropriée avec un délai
    if (filter === "popular") {
      await displayMovies(fetchMoviePopular, container);
    } else if (filter === "rate") {
      await displayMovies(fetchMovieRate, container);
    } else if (filter === "best") {
      await displayMovies(fetchMovieBest, container);
    }
  });
});

// Afficher les nouveaux films par défaut au chargement de la page
displayMovies(fetchMovieNew, document.querySelector(".slider-wrapper"));

displayMovies(
  fetchMoviePopular,
  document.querySelector(".container_filter_cards")
);
