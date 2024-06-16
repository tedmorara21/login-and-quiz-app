let questionsHTML = '';

let answer;
let correctAnswer;

let resetTimeoutId;

let answeredCount = 0;
let correctCount = 0;
let wrongCount = 0;

question.forEach((question) => {
    questionsHTML = questionsHTML + `
    <div class="question-box js-question-box-${question.id}">
        <p class="question-number">Question ${question.id}</p>
        <div class="question-flexbox js-question-flexbox-${question.id}">
            <p class="question">${question.message}</p> 
            <input id="answerInput" class="answer-input js-answer-input-${question.id}" type="text">
            <button class="submit-button js-submit-button-${question.id}" onclick="
                answer = (document.querySelector('.js-answer-input-${question.id}').value).toLowerCase();
                markAnswer('${question.answer}');
                document.querySelector('.js-question-box-${question.id}')
                    .innerHTML = '';
                ">Submit</button>
        </div>
    </div>
    `
    ;
})

document.querySelector('.js-question-display-area')
    .innerHTML = questionsHTML;

document.querySelector('.js-result-container')
    .innerHTML = `
            <div class="result-title"><span>RESULTS</span></div>
            <div class="marks-display-area">
                <div>Answered questions <br> <span class="js-answered-count">0</span></div>
                <div>Correct <br> <span class="js-correct-count">0</span></div>
                <div>Incorrect <br> <span class="js-wrong-count">0</span></div>
            </div>

            <div class="reset-button-area">
                <button class="reset-button js-reset-button">Reset</button>
                <div class="display-reset-message js-display-reset-message"></div>
            </div>
    `;

function markAnswer(correctAnswer) {
    if (answer === correctAnswer) {
        answeredCount += 1;
        correctCount += 1;

        document.querySelector('.js-answered-count')
            .innerHTML = answeredCount;
        document.querySelector('.js-correct-count')
            .innerHTML = correctCount;
        document.querySelector('.js-wrong-count')
            .innerHTML = wrongCount;
    } else {
        answeredCount += 1;
        wrongCount += 1;

        document.querySelector('.js-answered-count')
            .innerHTML = answeredCount;
        document.querySelector('.js-correct-count')
            .innerHTML = correctCount;
        document.querySelector('.js-wrong-count')
            .innerHTML = wrongCount;
    }
};

function resetResults () {
    answeredCount = 0;
    correctCount = 0; 
    wrongCount = 0;   
}

document.querySelector('.js-reset-button')
    .addEventListener ('click', () => {
        resetResults();

        document.querySelector('.js-answered-count')
            .innerHTML = answeredCount;
        document.querySelector('.js-correct-count')
            .innerHTML = correctCount;
        document.querySelector('.js-wrong-count')
            .innerHTML = wrongCount;

        document.querySelector('.js-question-display-area')
            .innerHTML = questionsHTML;

        resetMessage = document.querySelector('.js-display-reset-message');
        resetMessage.innerHTML = 'Results have been reset!';

        clearTimeout(resetTimeoutId);

        resetTimeoutId = setTimeout(() => {
            resetMessage.innerHTML = '';
        }, 1500);
    });

function removeQuestion(questionId) {
    document.querySelector(`'.js-question-flexbox-${questionId}'`)
        .innerHTML = '';
}