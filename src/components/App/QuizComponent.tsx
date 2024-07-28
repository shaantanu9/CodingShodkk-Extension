"use client";
import { useEffect, useState } from "react";
import { _quizService } from "../../utils/services/api/quiz.service";
import { _progressService } from "../../utils/services/api/quiz_progress.service";
import React from "react";
const QuizComponent = ({ url }) => {
  const [quiz, setQuiz] = useState<any>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<any>(0);
  const [responses, setResponses] = useState<any[]>([]);
  const [timer, setTimer] = useState<any>(600); // 10 minutes
  const [showModal, setShowModal] = useState<any>(false);
  const [score, setScore] = useState<any>(0);
  const [currentQuestion, setCurrentQuestion] = useState<any>(null);
  const [wrongAnswer, setWrongAnswer] = useState<any>([]);

  // Utility function to shuffle an array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect(() => {
    if (!url) return;
    const fetchQuiz = async () => {
      try {
        let res = await _quizService.getSingleQuiz({ url });

        if (res.data) {
          const shuffledQuestions = shuffleArray(res.data.questions);
          setTimer(shuffledQuestions.length * 30); // 30 seconds for each question
          setQuiz({ ...res.data, questions: shuffledQuestions });
          setCurrentQuestion({
            ...shuffledQuestions[0],
            options: shuffleArray(shuffledQuestions[0].options),
          });
        }
      } catch (error) {
        console.error("Error fetching or creating quiz:", error);
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
    try {
      const res = await _progressService.createProgress({
        quizId: quiz._id,
        responses,
        score,
      });

      if (res.statusCode === 200) {
        setShowModal(true);
      }
    } catch (error) {
      console.error("Error submitting quiz progress:", error);
    }
  };

  const handleAnswer = (
    questionId: string,
    givenAnswer: string,
    isCorrect: boolean,
    correctAnswer: string,
    question: string
  ) => {
    setResponses((prev) => [...prev, { questionId, givenAnswer, isCorrect }]);

    if (isCorrect) setScore((prev) => prev + 1);
    else {
      setWrongAnswer((prev:any) => [
        ...prev,
        { question, givenAnswer, correctAnswer },
      ]);
    }

    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setCurrentQuestion({
        ...quiz.questions[currentQuestionIndex + 1],
        options: shuffleArray(quiz.questions[currentQuestionIndex + 1].options),
      });
    } else {
      submitHandler();
    }
  };

  if (!quiz) return <div>Loading...</div>;

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <div style={timeStyle}>
          Time Left: {Math.floor(timer / 60)}:{String(timer % 60).padStart(2, "0")}
        </div>
        <button style={submitButtonStyle} onClick={submitHandler}>
          Submit Quiz
        </button>
      </div>
      <p style={descriptionStyle}>{quiz?.description}</p>
      <div style={questionContainerStyle}>
        <div style={questionStyle}>
          <h3>{currentQuestionIndex + 1}. {currentQuestion?.question}</h3>
        </div>
      </div>
      <div style={optionsContainerStyle}>
        {currentQuestion?.options?.map((option: string, index: number) => (
          index < 4 && (
            <button
              key={index}
              onClick={() =>
                handleAnswer(
                  currentQuestion?._id,
                  option,
                  option === currentQuestion?.correctAnswer,
                  currentQuestion.correctAnswer,
                  currentQuestion.question
                )
              }
              style={optionButtonStyle}
            >
              {String.fromCharCode(65 + index)}. {option}
            </button>
          )
        ))}
      </div>
      <h2 style={scoreStyle}>{score} / {quiz.questions.length}</h2>
      {showModal && (
        <div style={modalOverlayStyle}>
          <div style={modalStyle}>
            <p style={modalHeaderTextStyle}>
              Quiz Submitted Successfully. Your Score: {score} / {quiz.questions.length}
            </p>
            <div style={wrongAnswersContainerStyle}>
              {wrongAnswer.map((item, index) => (
                <div key={index} style={wrongAnswerStyle}>
                  <p style={wrongAnswerQuestionStyle}>
                    {index + 1}. {item.question}
                  </p>
                  <p style={givenAnswerStyle}>
                    Given Answer: {item.givenAnswer}
                  </p>
                  <p style={correctAnswerStyle}>
                    Correct Answer: {item.correctAnswer}
                  </p>
                </div>
              ))}
            </div>
            <button style={closeButtonStyle} onClick={() => setShowModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const containerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  padding: "1rem 2rem",
  borderRadius: "10px",
  backgroundColor: "#4456FF",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  color: "white",
};

const headerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "1rem",
};

const timeStyle: React.CSSProperties = {
  fontSize: "1.25rem",
  fontWeight: "bold",
  color: "red",
};

const submitButtonStyle: React.CSSProperties = {
  padding: "0.5rem 1rem",
  borderRadius: "5px",
  backgroundColor: "white",
  color: "black",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "background-color 0.3s",
};

const descriptionStyle: React.CSSProperties = {
  fontSize: "1.25rem",
  marginBottom: "1rem",
};

const questionContainerStyle: React.CSSProperties = {
  marginBottom: "1rem",
};

const questionStyle: React.CSSProperties = {
  padding: "1rem",
  borderRadius: "5px",
  backgroundColor: "white",
  color: "black",
  fontSize: "1.25rem",
  fontWeight: "bold",
};

const optionsContainerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
};

const optionButtonStyle: React.CSSProperties = {
  padding: "0.75rem 1.5rem",
  borderRadius: "5px",
  backgroundColor: "#868CFF",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "background-color 0.3s",
};

const scoreStyle: React.CSSProperties = {
  fontSize: "2rem",
  fontWeight: "bold",
  textAlign: "center",
  marginTop: "1rem",
};

const modalOverlayStyle: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modalStyle: React.CSSProperties = {
  backgroundColor: "white",
  padding: "2rem",
  borderRadius: "10px",
  color: "#4456FF",
  textAlign: "center",
};

const modalHeaderTextStyle: React.CSSProperties = {
  fontSize: "2rem",
  fontWeight: "bold",
};

const wrongAnswersContainerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  marginTop: "1rem",
};

const wrongAnswerStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
};

const wrongAnswerQuestionStyle: React.CSSProperties = {
  fontSize: "1.25rem",
  fontWeight: "bold",
  color: "#FF6347",
};

const givenAnswerStyle: React.CSSProperties = {
  fontSize: "1.25rem",
  fontWeight: "bold",
  color: "#FF0000",
};

const correctAnswerStyle: React.CSSProperties = {
  fontSize: "1.25rem",
  fontWeight: "bold",
  color: "#00FF00",
};

const closeButtonStyle: React.CSSProperties = {
  marginTop: "1rem",
  padding: "0.5rem 1rem",
  borderRadius: "5px",
  backgroundColor: "#4456FF",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "background-color 0.3s",
};

export default QuizComponent;
