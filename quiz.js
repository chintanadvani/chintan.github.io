const quizContainer = document.getElementById("quiz");

const resultsContainer = document.getElementById("results");

const submitButton = document.getElementById("submit");


const quizQuestions = [
    {
    question: "Chintan Advani is currently a member of :",
    answers: {
        a: "Civil Engineering society",

        b: "Data Science Group",

        c: "Transportation and Planning association",

        d: "Environmental engineering"
    },
    correctAnswer: "b"
    },

    {
        question: "Chintan Advani research interest lies in :",
        answers:{
            a: "Intelligent Transport Systems",

            b: "Civil structures",
    
            c: "Road Geometry and Design",
    
            d: "System design and control"

        },
        correctAnswer: "a"
    },


    {
        question: "Which of the following programming language is known by him :",
        answers:{
            a: "C",

            b: "C++",
    
            c: "Java",
    
            d: "Python"

        },
        correctAnswer: "d"
    },


    {
        question: "Which of the following isn't Chintan's Research SKills:",
        answers:{
            a: "Data Analysis",

            b: "Data visualization",
    
            c: "Stats",
    
            d: "None of the above"

        },
        correctAnswer: "d"
    },
];


function buildQuiz() {
    const output = [];

    for(i=0; i<quizQuestions.length; i++){

        const answers = [];

        for(letter in quizQuestions[i].answers){

            answers.push(
                '<label>'
                + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                + letter + ': '
                + quizQuestions[i].answers[letter]
                + '</label>'
                );
            }

            output.push(
                '<div class="question">' + quizQuestions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
                );
            }
            quizContainer.innerHTML = output.join('');
        }


function showResults() {
    // gather answer containers from our quiz
    var answerContainers = quizContainer.querySelectorAll('.answers');
    // keep track of user's answers
    var numCorrect = 0;
    // for each question...
    for(i=0; i<quizQuestions.length; i++){
    // find selected answer
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

            if(userAnswer===quizQuestions[i].correctAnswer){
                // add to the number of correct answers
                numCorrect++;
                // color the answers green
                answerContainers[i].style.color = 'lightgreen';
                }
                // if answer is wrong or blank
            else{
                // color the answers red
                answerContainers[i].style.color = 'red';
                }
            }

            if (numCorrect === 0) { 
                resultsContainer.innerHTML = "That wasn't your best effort - you didn't get a single answer correct.";      
            }
            
            if (numCorrect === 1) { 
                resultsContainer.innerHTML = "There's room for improvement there! You only got one correct answer.";
                }    
            
            if (numCorrect === 2) {
                resultsContainer.innerHTML = "That was okay! You got a score of 2 out of 4 for your responses. Have another go to see if you can improve on that.";
                }
            
            if (numCorrect === 3) {   
            resultsContainer.innerHTML = "Congratulations! You got a good score of 3 out of 4 for your responses. You know Chintan pretty well!";
                }    

            if (numCorrect === 4) { 
                resultsContainer.innerHTML = "Congratulations! You got a perfect score of 4 out of 4 for your responses. You know Chintan so well!";
                }
        }


buildQuiz();

submitButton.onclick = function() {
    showResults();
}
