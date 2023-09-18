export function createCard() {
    // Create the main container for cards
    // const containerCards = document.createElement("div");
    // containerCards.className = "container_cards";

    // Create a single card
    const card = document.createElement("div");
    card.className = "card";

    // Create img_card
    // const imgCard = document.createElement("div");
    // imgCard.className = "img_card";

    // // Create title-rating div
    // const titleRating = document.createElement("div");
    // titleRating.className = "title-rating";

    // // Create title div
    // const title = document.createElement("div");
    // title.className = "title";

    // // Create h3 and span inside title
    // const h3 = document.createElement("h3");
    // h3.className = "text_maj";
    // h3.textContent = "title";

    // const span = document.createElement("span");
    // span.className = "studio";
    // span.textContent = "Marvel Studios";

    // title.appendChild(h3);
    // title.appendChild(span);

    // Create rating div
    // const rating = document.createElement("div");
    // rating.className = "rating";



    card.appendChild(card);
    return card;

    // Append the main container to the body or another existing element
    // document.body.appendChild(containerCards);

}

// export function updateCardWithDetails(movieId, budget, release_date, genres) {
//     const allCards = document.querySelectorAll('.movie-card');
//     allCards.forEach(card => {
//         card.style.display = 'none';
//     });

//     const card = document.getElementById(`movie-${movieId}`);
//     if (card) {
//         card.style.display = 'block';

//         // Votre code pour ajouter le budget, la date de sortie et les genres ici...

//         // Retirer le lien "En savoir plus" existant s'il y en a un
//         const existingMoreLink = document.getElementById(`more-link-${movieId}`);
//         if (existingMoreLink) {
//             existingMoreLink.remove();
//         }

//         // Retirer le lien "Retour" existant s'il y en a un
//         const existingBackLink = document.getElementById(`back-link-${movieId}`);
//         if (existingBackLink) {
//             existingBackLink.remove();
//         }

//         // Ajouter un nouveau lien "Retour"
//         const backLink = document.createElement('a');
//         backLink.id = `back-link-${movieId}`;
//         backLink.innerText = 'Retour';
//         backLink.addEventListener('click', function (e) {
//             e.preventDefault();
//             allCards.forEach(card => {
//                 card.style.display = 'block';
//             });
//             backLink.remove();  // Supprimer le lien "Retour"

//             // Réajouter le lien "En savoir plus" s'il n'existe pas
//             if (!document.getElementById(`more-link-${movieId}`)) {
//                 const moreLink = document.createElement('a');
//                 moreLink.innerText = 'En savoir plus';
//                 moreLink.id = `more-link-${movieId}`;
//                 moreLink.addEventListener('click', function (e) {
//                     e.preventDefault();
//                     handleMovieClick(movieId);
//                 });
//                 card.appendChild(moreLink);
//             }
//         });
//         card.appendChild(backLink);
//     }
// }

