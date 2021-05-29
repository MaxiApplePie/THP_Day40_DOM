// Verif
console.log(document);

// Question 1 :
// Combien y a-t-il d'éléments <p> présents dans la page HTML ? Imprime-le // résultat dans la console.
console.log(document.getElementsByTagName("p").length); // 20

// Question 2 :
// Quel est le contenu texte de l'élément portant l'id coucou ? Imprime-le dans // la console.
console.log(document.getElementById("coucou").textContent);
// => Le DOM est une interface standardisée pour accéder au contenu HTML d'une page.

// Question 3 :
// Quelle est l'URL vers laquelle pointe le 3ème élément <a> de la page HTML ? // Imprime-la dans la console.
console.log(document.getElementsByTagName("a")[2].getAttribute("href"));
// => https://openclassrooms.com/fr/courses/3306901-creez-des-pages-web-interactives-avec-javascript/3501871-decouvrez-le-dom

// Question 4 :
// Combien d'éléments portent la classe compte-moi ? Imprime le résultat dans // la console.
console.log(document.getElementsByClassName("compte-moi").length);
// => 12

// Question 5 :
// Combien d'éléments <li> portent la classe compte-moi ? Imprime le résultat // dans la console.
console.log(document.querySelectorAll('li.compte-moi').length);
// => 6

// Question 6 :
// Combien d'éléments <li> et situés dans une liste ordonnée portent la classe // compte-moi ? Imprime le résultat dans la console.
console.log(document.querySelectorAll('ul > li.compte-moi').length);
// => 5

// Question 7 :
// Petit jeu de piste à résoudre si possible sans regarder le fichier HTML…
// La page contient un seul élément <div>. Celui-ci contient 2 éléments // "unordered list" ou <ul>. Dans le second <ul>, le premier élément de la // liste (tag <li>) est caché visuellement de l'utilisateur mais toi, tu peux // en récupérer le contenu. Affiche-le dans la console.
console.log(document.getElementsByTagName('div')[0].getElementsByTagName('ul')[1].getElementsByTagName('li')[0].innerHTML);
console.log(document.querySelector('div ul~ul li').innerHTML);