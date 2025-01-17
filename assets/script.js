const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
let actualSlider = 0;

const arrowLeft = document.querySelector('.arrow_left')
const arrowRight = document.querySelector('.arrow_right')
const bannerImg = document.querySelector('.banner-img');
const bannerTagline = document.querySelector('.banner-tagline');
const dotsContainer = document.querySelector('.dots');

//Function to create dots for each slide
function createDots() {
	// Create dots for each slides
	slides.forEach((slide) => {
		const dot = document.createElement('div');
		dot.classList.add('dot');
		// Add dot to the container
		dotsContainer.appendChild(dot);
	});
}

// Function to show slides
function showSlide() {
	const slide = slides[actualSlider];
	bannerImg.src = `./assets/images/slideshow/${slide.image}`;
	bannerTagline.innerHTML = slide.tagLine;
	console.log(`Image affichée : ${slide.image}`);
	updateDots();
}

// Function to updateDots
function updateDots() {
	const dots = document.querySelectorAll('.dots .dot');
	// Remove 'dot_selected' from each dot
	dots.forEach(dot => {
		dot.classList.remove('dot_selected');
	});
	// Apply the class "dot_selected" at the dot selected by the actual slider
	dots[actualSlider].classList.add('dot_selected');
}

// Event Listener for left arrow
arrowLeft.addEventListener('click', function () {
	console.log(`Click on the Left arrow !`);
	actualSlider--;
	if (actualSlider < 0) {
		actualSlider = slides.length - 1;
	}
	showSlide();
});

// Event Listener for right arrow
arrowRight.addEventListener('click', function () {
	console.log(`Click on the Right arrow !`);
	actualSlider++;
	if (actualSlider >= slides.length) {
		actualSlider = 0;
	}
	showSlide();
});

// Init
createDots();
showSlide();

