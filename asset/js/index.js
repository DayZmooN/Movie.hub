//jeton lecture seule :eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNmM1N2U2NTJlZGEyNWZkY2RmMDU4NGQ3ODNkODBmMSIsInN1YiI6IjY0ZmViOTFiZTBjYTdmMDEwZGU5NGJkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.byjm1Rqd_OCdG1uwReYA5Zu6ipksmFeiGPRMO-zUWXY

// fetch movie new
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNmM1N2U2NTJlZGEyNWZkY2RmMDU4NGQ3ODNkODBmMSIsInN1YiI6IjY0ZmViOTFiZTBjYTdmMDEwZGU5NGJkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.byjm1Rqd_OCdG1uwReYA5Zu6ipksmFeiGPRMO-zUWXY",
  },
};
// fetch movie popular;

fetch(
  "https://api.themoviedb.org/3/account/null/rated/movies?language=en-US&page=1&sort_by=created_at.asc",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

async function fetchMovieNew() {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
      options
    );
    const result = await response.json();
    if (!response.ok)
      throw new Error("probleme avec la reponse  " + response.status);

    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function displayMovie() {
  const container = document.querySelector(".slider-wrapper");
  const data = await fetchMovieNew();
  //   for (let i = 0; i < data.results; i++) {
  //     card.innerHTML = `${data.results[i].id}`;
  //     container.appendChild(card);
  //   }
  //   array.forEach((data) => {
  //     card.innerHTML = `${data.results[i].id}`;
  //     container.appendChild(card);
  //   });
  // const results = data.results;
  data.results.map((movie) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
              <div class="content_card">
              
                <img  class="img_card" src="https://image.tmdb.org/t/p/w500${movie.backdrop_path}" alt="${movie.title}">
                        <div class="title">
                            <h3 class="text_maj">${movie.title}</h3>
                            <span class="studio">Marvel Studios</span>
                        </div>
              </div>
               
      
    `;
    container.appendChild(card);
  });
}
displayMovie();
