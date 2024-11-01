const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Sélection de la bannière
const bannerImg = document.querySelector('.banner-img');
// Sélection des flèches
const left = document.querySelector('.arrow_left');
const right = document.querySelector('.arrow_right');
// Sélection des points
const dots = document.querySelector('.dots');
// Position de la première diapo
let index = 0;

// Événement du clic sur la flèche gauche
left.addEventListener('click', function () {
    index--; // = (index - 1)
    updateSlider();
});

// Événement du clic sur la flèche droite
right.addEventListener('click', function () {
    index++ // = (index + 1);
    updateSlider();
});

// Changer l'image et le texte
function updateSlider() {
	if (index >= slides.length) { // Si mon index est supérieur ou égal à la taille de mon tableau (le nombre de diapositives) alors...
		index = 0; // ... index revient à sa position d'origine, donc 0.
	}
	if (index < 0) { // Si mon index est inférieur à 0 alors...
		index = slides.length -1; // index est égal à la taille de mon tableau moins 1 (Parce que 4 éléments dans le tableau mais on compte de 0 à 3 donc on met -1)
	}
    
    // Mettre à jour l'image
    const imagePath = `assets/images/slideshow/${slides[index].image}`;
    bannerImg.src = imagePath;

    // Mettre à jour le texte
    const tagLine = slides[index].tagLine;
    document.querySelector('p').innerHTML = tagLine;
	updateDots(); // Dès qu'on appelle la fonction updateSlider ou appelle aussi celle des dots, updateDots
}

const updateDots = () => {
	dots.innerHTML = '';
	for (let i = 0; i < slides.length; i++) { // Pour i = 0, i est inférieur à la taille de mon tableau, on ajoute +1 i
		const dot = document.createElement("div"); //On créé la div .dot
		dot.classList.add('dot'); // On ajoute la dit créée .dot
		if (i === index) { // Si i est égal à mon index alors...
            dot.classList.add('dot_selected'); // ... on ajoute la class .dot_selected
		}
		dots.appendChild(dot); //dot est l'enfant de l'élement dots
	}
}

// Afficher la première diapositive au chargement de la page
updateSlider();