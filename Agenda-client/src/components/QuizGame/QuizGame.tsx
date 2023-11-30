import Quiz from 'react-quiz-component';
import questions from './questions';

function QuizGame() {
  return (
    <div>
      <Quiz quiz={questions} shuffleAnswer={true} />
    </div>
  );
}

export default QuizGame;

//credits (wingkwong): https://www.npmjs.com/package/react-quiz-component
