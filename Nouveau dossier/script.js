const quizData = [
    {
        question: "1. Que signifie GPU dans l'UC?",
        a: "Guépéou",
        b: "Graphics Processing Unit",
        c: "Ground Power Unit",
        d: "Grands Parents Uniques",
        correct: "b",
    },
    {
        question: "2. Quel est le rôle de la carte graphique ?",
        a: "Générer une image à l'écran",
        b: "Réguler la température de l'ordinateur",
        c: "Afficher la carte de France",
        d: "Pour faire de joli graphiques sur Excel",
        correct: "a",
    },
    {
        question: "3. Citez un matériau d'interface thermique",
        a: "Le plastique thermique",
        b: "La pâte thermique",
        c: "Le papier thermique",
        d: "Un matériau d'interface thermique",
        correct: "b",
    },
    {
        question: "4. A quel composent Daft Punk fait référence dans leur album 'Random Access Memories' ?",
        a: "La mémoire de vidéo",
        b: "La mémoire de stockage",
        c: "La mémoire vive",
        d: "La mémoire morte",
        correct: "c",
    },
    {
        question: "5. Quel est le support principal sur lequel tous ces éléments reposent ?",
        a: "La carte père",
        b: "La carte mère",
        c: "La carte fils",
        d: "La carte maitresse",
        correct: "b",
    },
    {
        question: "6. Pourquoi il y a un ventilateur dans l'UC ?",
        a: "Empêcher une surchauffe de ses éléments",
        b: "Empêcher une surchauffe de l'écran",
        c: "Au cas où on fait tourner Android Studio",
        d: "L'été quand il fait chaud",
        correct: "a",
    },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer;
    answerEls.forEach(answerEl =>{
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer){
        if (answer === quizData[currentQuiz].correct){
            score++
        }

        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2>Vous avez répondu correctement à ${score}/${quizData.length} questions !
            <button onclick="location.reload()">Reload</button>
            `
        }
    }
})



