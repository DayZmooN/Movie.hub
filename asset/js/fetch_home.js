import { createCard } from "./creatCard.js";
// Ajout de cette fonction ici pour qu'elle soit accessible globalement.
window.handleMovieClick = function (movieId) {
    fetchMovieDetailsAndDisplay(movieId);
}
const optionsList = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNmM1N2U2NTJlZGEyNWZkY2RmMDU4NGQ3ODNkODBmMSIsInN1YiI6IjY0ZmViOTFiZTBjYTdmMDEwZGU5NGJkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.byjm1Rqd_OCdG1uwReYA5Zu6ipksmFeiGPRMO-zUWXY'
    }
};

// Première requête pour la liste des films
fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', optionsList)
    .then(response => response.json())
    .then(response => {
        const content = document.getElementById('content');
        const containerCards = document.createElement("div");
        containerCards.className = "container_cards";
        content.append(containerCards);


        for (const movie of response.results) {
            const movieCardElement = createCard(movie.title, movie.id, movie.poster_path);
            containerCards.appendChild(movieCardElement);
        }
        // let dataSite;
        // for (let data of response.results) {
        //     dataSite = data;
        //     const entrie = Object.entries(dataSite);
        //     console.log(dataSite);
        //     console.log(entrie);
        //     let img = document.createElement('p');
        //     img.innerText = `${entrie}`;
        //     app.append(img);

        // }
        // const entrie = Object.entries(dataSite);




    })
    .catch(err => console.error(err));

// Fonction pour effectuer la deuxième requête pour les détails du film
// function fetchMovieDetailsAndDisplay(movieId) {
//     const optionsDetails = {
//         method: 'GET',
//         headers: {
//             accept: 'application/json',
//             Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNmM1N2U2NTJlZGEyNWZkY2RmMDU4NGQ3ODNkODBmMSIsInN1YiI6IjY0ZmViOTFiZTBjYTdmMDEwZGU5NGJkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.byjm1Rqd_OCdG1uwReYA5Zu6ipksmFeiGPRMO-zUWXY'
//         }
//     };

//     fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, optionsDetails)
//         .then(response => response.json())
//         .then(movieData => {
//             updateCardWithDetails(movieId, movieData.budget, movieData.release_date, movieData.genres);

//         })
//         .catch(err => console.error(err));

// }
