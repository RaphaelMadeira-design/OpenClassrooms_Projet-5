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
const dots = document.querySelectorAll('.dot');
// Position de la première diapo
let firstSlide = 0;

// Événement du clic sur la flèche gauche
left.addEventListener('click', function () {
    firstSlide = (firstSlide - 1);
    updateSlider(firstSlide, 'left');
    updateDots(firstSlide); // Mettez à jour les points indicateurs
});

// Événement du clic sur la flèche droite
right.addEventListener('click', function () {
    firstSlide = (firstSlide + 1) ;
    updateSlider(firstSlide, 'right');
    updateDots(firstSlide); // Mettez à jour les points indicateurs
});

// Changer l'image et le texte
function updateSlider(index, direction) {
      
    // Mettre à jour l'image
    const imagePath = `assets/images/slideshow/${slides[firstSlide].image}`;
    bannerImg.src = imagePath;

    // Mettre à jour le texte
    const tagLine = slides[firstSlide].tagLine;
    document.querySelector('p').innerHTML = tagLine;
}


// Afficher la première diapositive au chargement de la page
updateSlider(firstSlide);