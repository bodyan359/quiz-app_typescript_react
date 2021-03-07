import React from 'react';
import QuestiongCard from './components/QuestionCard';
import { fetchQuizQuestions, Difficulty, QuestionState } from './API';

const TOTAL_QUESTIONS = 10;

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

function App() {
  const [loading, setLoading] = React.useState(false);
  const [questions, setQuestions] = React.useState<QuestionState[]>([]);
  const [number, setNumber] = React.useState(0);
  const [userAnswers, setUserAnswers] = React.useState<AnswerObject[]>([]);
  const [score, setScore] = React.useState(0);
  const [gameOver, setGameOver] = React.useState(true);

  // console.log(questions);

  const startQuiz = async () => {
      setLoading(true);
      setGameOver(false);

      try {
        const newQuestions = await fetchQuizQuestions(
          TOTAL_QUESTIONS,
          Difficulty.EASY
        );
  
        setQuestions(newQuestions);
        setScore(0);
        setUserAnswers([]);
        setNumber(0);
        setLoading(false);
      }
      catch(e) {
        console.log(e);
        console.log('error');
      }


  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if(!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if(correct)
        setScore(prev => prev +1);
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    const nextQuestion = number +1;

    if(nextQuestion === TOTAL_QUESTIONS){
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
};

  return (
    <div className="App">
        <h1>TypeScript React Quiz</h1>
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ?
        <button className="start" onClick={startQuiz}>
          Start
        </button>
         : null}
        {gameOver && <p className="score">Score: </p>}

        {loading && <p>Loading...</p> }
        {!loading && !gameOver ? (
        <QuestiongCard 
        questionNr={number+1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number]: undefined}
        callback={checkAnswer}
        />
        ): null}
        {!gameOver && !loading && userAnswers.length === number +1 && number !== TOTAL_QUESTIONS-1 ?
        (
        <button className="next" onClick={nextQuestion}>
          Next
        </button>
       ):null}  
    </div>
  );
}

export default App;
