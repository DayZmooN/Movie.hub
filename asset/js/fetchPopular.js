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
  const container = document.querySelector(".container_filter_cards");
  container.innerHTML = ""; // Vider le contenu existant
  loader();
  const data = await fetchMoviePopular();

  setTimeout(() => {
    container.innerHTML = ""; // clear for loader

    data.results.map((movie) => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
              <div class="content_card">
                <img  class="img_card" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
                        <div class="title">
                            <h3 class="text_maj">${movie.title}</h3>
                            <span class="studio">Marvel Studios</span>
                        </div>
              </div>
  `;
      container.appendChild(card);
    });
  }, 200);
}
displayMoviePopular();
///////////////////////////////
///fetch movie rate///
////////////////////////////
const fetchMovieRate = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=en-US&page=1&sort_by=vote_count.desc",
    options1
  );
  const result = await response.json();
  if (!response.ok)
    throw new Error("probleme avec la reponse  " + response.status);
  return result;
};

const displayMovieRate = async () => {
  const Container = document.querySelector(".container_filter_cards");
  //clear container
  Container.innerHTML = "";
  //loader card
  loader();
  try {
    const data = await fetchMovieRate();
    setTimeout(() => {
      Container.innerHTML = ""; // clear for loader

      data.results.map((movie) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
    <div class="content_card">
      <img  class="img_card" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
      <div class="title">
        <h3 class="text_maj">${movie.title}</h3>
        <span class="studio">Marvel Studios</span>
      </div>
    </div>
    `;
        Container.appendChild(card);
      });
    }, 200);
  } catch (error) {
    console.error("Error displaying best movies:", error);
  }
};

/////
///displayMovieBest///
/////

const fetchMovieBest = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=en-US&page=1&sort_by=primary_release_date.desc",
    options1
  );
  const result = await response.json();
  return result;
};

const displayMovieBest = async () => {
  const Container = document.querySelector(".container_filter_cards");
  //clear container
  Container.innerHTML = "";
  //loader card
  loader();
  try {
    const data = await fetchMovieBest();
    setTimeout(() => {
      Container.innerHTML = ""; // clear for loader
      console.log(data);
      data.results.map((movie) => {
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
        Container.appendChild(card);
      });
    }, 1000);
  } catch (error) {
    console.error("Error displaying best movies:", error);
  }
};
