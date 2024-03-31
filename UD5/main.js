// Define las preguntas y respuestas
const questions = [
    {
        question: "¿Cuál es la capital de Francia?",
        options: ["Londres", "París", "Roma"],
        answer: "París"
    },
    {
        question: "¿Cuál es el símbolo químico del oro?",
        options: ["Au", "Ag", "Fe"],
        answer: "Au"
    },
    {
        question: "¿Cuál es el planeta más grande del sistema solar?",
        options: ["Marte", "Venus", "Júpiter"],
        answer: "Júpiter"
    },
    {
        question: "¿Cuál es el hueso más largo del cuerpo humano?",
        options: ["Húmero", "Fémur", "Tibia"],
        answer: "Fémur"
    },
    {
        question: "¿Cuál es la unidad básica de la vida?",
        options: ["Célula", "Átomo", "Molécula"],
        answer: "Célula"
    }
];

// Inicializa el cuestionario
let currentQuestionIndex = 0;
let score = 0;

// Elementos del DOM
const questionElement = document.getElementById('question');
const optionsElement = document.querySelector('.flex.flex-col.space-y-3');
const nextButton = document.getElementById('nextBtn');
const prevButton = document.getElementById('prevBtn');
const questionCountElement = document.getElementById('questionCount');
const scoreElement = document.getElementById('score');


// Función para mostrar la pregunta actual y sus opciones
function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    // Limpia las opciones anteriores
    optionsElement.innerHTML = '';

    // Agrega las nuevas opciones
    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('text-black', 'hover:bg-black', 'hover:text-white', 'py-2', 'px-4', 'rounded-lg');
        button.addEventListener('click', () => {checkAnswer(option);nextQuestion()});
        optionsElement.appendChild(button);

    });

    // Actualiza el contador de preguntas
    questionCountElement.textContent = `Pregunta ${currentQuestionIndex + 1} de ${questions.length}`;
}



// Función para verificar la respuesta seleccionada por el usuario
function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score++;
    }
}

// Función para avanzar a la siguiente pregunta
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function previousQuestion() {
 
 if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    showQuestion();
 }
}
// Función para mostrar el resultado final
function showResult() {
    questionElement.textContent = `Tu puntuación final es: ${score} de ${questions.length}`;
    optionsElement.innerHTML = '';
    nextButton.style.display = 'none';
    prevButton.style.display = 'none';
    scoreElement.textContent = ''; // Puedes mostrar el puntaje final si lo deseas
}

// Inicializa el cuestionario al cargar la página
showQuestion();

// Event Listener para el botón "Siguiente"
nextButton.addEventListener('click', nextQuestion);

// Event Listener para el botón "Anterior"
prevButton.addEventListener('click', prevQuestion);