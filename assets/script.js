const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Quizz <span>sur les jeux vidéos</span>"
    },

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


// Quizz
const quizData = [
    {
        question: "Quel est le nom du personnage principal de la série The Legend of Zelda ?",
        options: ["Zelda", "Link", "Ganondorf", "Epona"],
        answer: "Link",
    },
    {
        question: "Lequel de ces jeux vidéo fait partie de la catégorie des MMORPG ?",
        options: ["Tekken", "Assassin's Creed", "Fortnite", "World of Warcraft"],
        answer: "World of Warcraft",
    },
    {
        question: "Quel est le jeu vidéo le plus vendu de tout les temps?",
        options: ["Minecraft", "Tetris", "GTA V", "Fortnite"],
        answer: "Minecraft",
    },
    {
        question: "What year was the PlayStation 1 released?",
        options: ["1993", "1994", "1995", "1996"],
        answer: "1994",
    },
];

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    optionsEl.innerHTML = "";

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => selectAnswer(button, option);
        optionsEl.appendChild(button);
    });
}

function selectAnswer(button, selectedOption) {
    // Clear previous selection
    const buttons = optionsEl.querySelectorAll("button");
    buttons.forEach(btn => btn.classList.remove("selected"));

    // Mark current button as selected
    button.classList.add("selected");

    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score++;
    }
    nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
        nextBtn.style.display = "none";
    } else {
        showResult();
    }
});

function showResult() {
    quiz.style.display = "none";
    resultEl.style.display = "block";
    const totalQuestions = quizData.length;
    const oneThird = Math.floor(totalQuestions / 3);
    const twoThirds = Math.floor(2 * totalQuestions / 3);
    let message;
    if (score <= oneThird) {
        message = "Pas terrible";
    } else if (score <= twoThirds) {
        message = "Moyen";
    } else if (score <= totalQuestions) {
        message = "Bien joué";
    }

    resultEl.innerHTML = `Tu as fais un score de ${score}/${totalQuestions}! <br> ${message}`;
}
loadQuestion();
nextBtn.style.display = "none";