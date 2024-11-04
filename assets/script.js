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

const bannerImg = document.querySelector('.banner-img');
const left = document.querySelector('.arrow_left');
const right = document.querySelector('.arrow_right');
const dots = document.querySelector('.dots');
let index = 0;

left.addEventListener('click', function () {
    index = index - 1
    updateSlider();
});

right.addEventListener('click', function () {
    index = index + 1
    updateSlider();
});

function updateSlider() {
	if (index >= slides.length) {
		index = 0;
	}
	if (index < 0) {
		index = slides.length -1;
	}
    
    const imagePath = `assets/images/slideshow/${slides[index].image}`;
    bannerImg.src = imagePath;

    const tagLine = slides[index].tagLine;
    document.querySelector('p').innerHTML = tagLine;
	updateDots();
}

function updateDots() {
	dots.innerHTML = '';
	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement("div");
		dot.classList.add('dot');
		if (i === index) {
            dot.classList.add('dot_selected');
		}
		dots.appendChild(dot);
	}
}

updateSlider();