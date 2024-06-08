const options1 = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNmM1N2U2NTJlZGEyNWZkY2RmMDU4NGQ3ODNkODBmMSIsInN1YiI6IjY0ZmViOTFiZTBjYTdmMDEwZGU5NGJkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.byjm1Rqd_OCdG1uwReYA5Zu6ipksmFeiGPRMO-zUWXY",
  },
};
async function fetchMoviePopular() {
  const response = await fetch(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc",
    options1
  );
  const result = await response.json();
  if (!response.ok)
    throw new Error("probleme avec la reponse  " + response.status);
  return result;
}

async function displayMoviePopular() {
  const cardPopular = document.querySelector(".container_filter_cards");
  cardPopular.innerHTML = ""; // Vider le contenu existant

  const data = await fetchMoviePopular();
  data.results.map((movie) => {
    const card = document.createElement("div");
    card.classList.add("card");
    console.log(movie);

    card.innerHTML = `
              <div class="content_card">
              
                <img  class="img_card" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
                        <div class="title">
                            <h3 class="text_maj">${movie.title}</h3>
                            <span class="studio">Marvel Studios</span>
                        </div>
              </div>

  `;
    cardPopular.appendChild(card);
  });
  card.innerHTML = ``;
}
displayMoviePopular();

const fetchMovieRate = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/account/null/rated/movies?language=en-US&page=1&sort_by=created_at.asc",
    options1
  );
  const result = await response.json();
  console.log(result);
};
const displayMovieRate = () => {
  const card = document.querySelector(".container_filter_cards");
  card.innerHTML = "";
};
