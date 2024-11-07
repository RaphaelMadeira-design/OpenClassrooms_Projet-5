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

const bannerImg = document.querySelector('.banner-img')
const bannerTag = document.querySelector('p')
const left = document.querySelector('.arrow_left')
const right = document.querySelector('.arrow_right')
const dots = document.querySelector('.dots')
let slide = 0

left.addEventListener('click', function () {
    slide--
    updateSlider()
});

right.addEventListener('click', function () {
    slide++
    updateSlider()
});

function updateDots() {
	dots.innerHTML = ''
	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement('div')
		dot.classList.add('dot')
		if (i === slide) {
            dot.classList.add('dot_selected')
		}
		dots.appendChild(dot)
	}
}

function updateSlider() {
	if (slide >= slides.length) {
		slide = 0
	}
	if (slide < 0) {
		slide = slides.length - 1
	}
    
    bannerImg.src = "assets/images/slideshow/" + slides[slide].image

	bannerTag.innerHTML = slides[slide].tagLine
	
	updateDots();
}

updateSlider()