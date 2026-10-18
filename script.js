
const questions = [
    {
        question: "When your friend says 'I'm fine', what do you think?",
        answers: [
            "They are actually fine 😌",
            "Something is definitely wrong 👀",
            "Time to investigate 🕵️"
        ],
        scores: [0, 10, 20]
    },
    {
        question: "How do you react when someone ignores your message?",
        answers: [
            "I don't care 😎",
            "I check their last seen 👀",
            "I create 20 imaginary stories 😭"
        ],
        scores: [0, 10, 20]
    },
    {
        question: "Your plan gets cancelled. What do you do?",
        answers: [
            "Enjoy my free time 😌",
            "Feel a little sad 😅",
            "This is the worst day ever 😭"
        ],
        scores: [0, 10, 20]
    }
];

let currentQuestion = 0;
let totalScore = 0;

function playGame() {
    currentQuestion = 0;
    totalScore = 0;
    showQuestion();
}

function showQuestion() {
    const game = document.querySelector(".game-card");

    if (currentQuestion >= questions.length) {
        let result;

        if (totalScore <= 20) {
            result = "Peaceful Panda 🐼";
        } else if (totalScore <= 40) {
            result = "Drama Queen 🎭";
        } else {
            result = "CEO of Overthinking 👑";
        }

        game.innerHTML = `
            <h2>Your Result 🎉</h2>
            <h3>${result}</h3>
            <p>Your Drama Score: ${totalScore}/60</p>
            <button onclick="playGame()">Play Again 🔄</button>
        `;
        return;
    }

    const q = questions[currentQuestion];

    game.innerHTML = `
        <h3>Question ${currentQuestion + 1} of ${questions.length}</h3>
        <h2>${q.question}</h2>
        ${q.answers.map((answer, index) => `
            <button class="answer-btn"
                onclick="selectAnswer(${index})">
                ${answer}
            </button>
        `).join("<br><br>")}
    `;
}

function selectAnswer(index) {
    totalScore += questions[currentQuestion].scores[index];
    currentQuestion++;
    showQuestion();
}
