function changeTitles() {
    var titre = document.getElementsByClassName('jumbotron-heading')[0].textContent = "Ce que j'ai appris à THP";
    console.log(titre);
}

function changeCallToActions() {
    document.getElementsByClassName('jumbotron')[0].getElementsByTagName('p')[1].getElementsByTagName('a')[0].textContent = "OK je veux tester !";
    document.getElementsByClassName('jumbotron')[0].getElementsByTagName('p')[1].getElementsByTagName('a')[0].setAttribute('href', "http://www.thehackingproject.org");
    document.getElementsByClassName('jumbotron')[0].getElementsByTagName('p')[1].getElementsByTagName('a')[1].textContent = "Non Merci";
    document.getElementsByClassName('jumbotron')[0].getElementsByTagName('p')[1].getElementsByTagName('a')[1].setAttribute('href', "https://www.pole-emploi.fr/accueil/");
}

function changeLogoName() {
    var todo = document.querySelectorAll('header a')[3];
    todo.textContent = "The THP Experience";
    todo.style.fontSize = "2em";
}

function populateImages() {
    let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "https://i.imgur.com/bJE9Pka.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];
    const cards_collection = document.getElementsByClassName("card-img-top");
    console.log(cards_collection[0]);
    for (let i = 0; i < cards_collection.length; i++) {
        cards_collection[i].src = imagesArray[i]
    };
};

function deleteLastCards() {
    const cards_collection2 = document.getElementsByClassName('col-md-4');
    for (let i = (cards_collection2.length - 1); i >= 6; i--) {
        cards_collection2[i].parentNode.removeChild(cards_collection2[i]);
    }
}

function changeCardsText() {
    const cards_collection2 = document.getElementsByClassName('card-text');
    let content_array = ["L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web", "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML", "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."];
    for (let i = 0; i < 3; i++) {
        cards_collection2[i].textContent = content_array[i];
    }
}

function changeViewButtons() {
    let viewButtons = document.getElementsByClassName('btn-group');
    for (let i = 0; i < viewButtons.length; i++) {
        viewButtons[i].children[0].className = "btn btn-sm btn-success";
    }
}


changeTitles();
changeCallToActions();
changeLogoName();
populateImages();
deleteLastCards();
changeCardsText();
changeViewButtons();