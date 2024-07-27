import React, { useEffect, useState } from "react";
import { _quizService } from '../../utils/services/api/quiz/quiz.service';
const QuizComponent = () => {



    const [quiz, setQuiz] = useState<any>(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [responses, setResponses] = useState<any[]>([]);
    const [timer, setTimer] = useState(600); // 10 minutes
    const [showToast, setShowToast] = useState(false);
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(
      quiz?.questions[currentQuestionIndex],
    );
    const [wrongAnswer, setWrongAnswer] = useState([]);
    // Utility function to shuffle an array
    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };
  
    useEffect(() => {
      // Fetch the quiz when the component mounts
      if (!url) return console.log('No URL');
      const fetchQuiz = async () => {
        const res = await _quizService.getSingleQuiz({ url });
        if (res.data) {
          const shuffledQuestions = shuffleArray(res.data.questions);
          // shuffledQuestions.length = 1;
          setTimer(shuffledQuestions.length * 30); // 10 minutes for each question
          setQuiz({ ...res.data, questions: shuffledQuestions }); // Assuming it gets the first quiz
          setCurrentQuestion({
            ...shuffledQuestions[currentQuestionIndex],
            options: shuffleArray(
              shuffledQuestions[currentQuestionIndex].options,
            ),
          });
        } else {
          const res = await _quizService.createQuiz({ url });
          setQuiz({ ...res.data });
        }
      };
      fetchQuiz();
    }, [url]);
  
    useEffect(() => {
      if (timer === 0) {
        submitHandler(); // Auto-submit when timer runs out
      }
      const interval = setInterval(() => {
        setTimer((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
      return () => clearInterval(interval);
    }, [timer]);
  
    const submitHandler = async () => {
      const res = await _progressService.createProgress({
        quizId: quiz._id,
        responses,
        score,
      });
  
      if (res.statusCode === 200) {
        setShowToast(true);
        // setTimeout(() => {
        //   setShowToast(false);
        // }, 1000);
      }
      // clearInterval(interval); // Stop the timer
    };
  
    const handleAnswer = (
      questionId: string,
      givenAnswer: string,
      isCorrect: boolean,
      correctAnswer: string,
      question: string,
    ) => {
      setResponses((prev) => [...prev, { questionId, givenAnswer, isCorrect }]);
  
      if (isCorrect) setScore((prev) => prev + 1);
      else {
        setWrongAnswer((prev) => [
          ...prev,
          { question, givenAnswer, correctAnswer },
        ]);
      }
  
      if (currentQuestionIndex < quiz.questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        // setCurrentQuestion;
        Array.isArray(quiz.questions) &&
          setCurrentQuestion({
            ...quiz.questions[currentQuestionIndex + 1],
            options: shuffleArray(
              quiz.questions[currentQuestionIndex + 1].options,
            ),
          });
      } else {
        submitHandler();
      }
    };
  
    if (!quiz) return <div>Loading...</div>;
  

  return (
    <div>
        <div className="w-full text-center">
        {/* <h4 className="mb-4 text-2xl font-bold text-white md:text-4xl">{quiz?.title}</h4> */}
        <div className="absolute right-12 flex items-center justify-center gap-8">
          <div className="text-lg font-semibold text-red-500">
            Time Left: {Math.floor(timer / 60)}:
            {String(timer % 60).padStart(2, '0')}
          </div>
          <button
            className="text-black rounded-lg bg-white px-4 py-2 font-medium transition hover:bg-gray-100"
            onClick={submitHandler}
          >
            Submit Quiz
          </button>
        </div>
        <p className="mb-8 text-lg font-medium text-gray-300 md:text-xl">
          {quiz?.description}
        </p>
        <div className="flex justify-start">
          <div className="w-3/4 rounded-lg bg-white p-4 font-medium text-gray-800 shadow-md">
            <h3 className="text-black text-xl font-semibold">
              {currentQuestionIndex + 1}. {currentQuestion?.question}
            </h3>
          </div>
        </div>
        <div className="w-50 mt-4 flex flex-col items-start justify-start gap-4">
          {currentQuestion?.options?.map(
            (option: string, index: number) =>
              index < 4 && (
                <button
                  key={index}
                  onClick={() =>
                    handleAnswer(
                      currentQuestion?._id,
                      option,
                      option === currentQuestion?.correctAnswer,
                      currentQuestion.correctAnswer,
                      currentQuestion.question,
                    )
                  }
                  className="rounded-lg bg-brandLinear px-4 py-2 font-bold text-white transition hover:border-2 hover:border-white hover:bg-blueSecondary"
                >
                  {String.fromCharCode(65 + index)}. {option}
                </button>
              ),
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizComponent;
