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


function updateSlider() {
	if (slide >= slides.length) {
		slide = 0
	}
	if (slide < 0) {
		slide = slides.length - 1
	}
    
    const imagePath = "assets/images/slideshow/" + slides[slide].image
    bannerImg.src = imagePath

	const text = document.querySelector('p')
    const tagLine = slides[slide].tagLine
    text.innerHTML = tagLine
	
	updateDots();
}

function updateDots() {
	dots.innerHTML = ''
	for (let position = 0; position < slides.length; position++) {
		const dot = document.createElement('div')
		dot.classList.add('dot')
		if (position === slide) {
            dot.classList.add('dot_selected')
		}
		dots.appendChild(dot)
	}
}

updateSlider()