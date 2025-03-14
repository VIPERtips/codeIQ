import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { quizData } from "./QuizData";
import { ArrowRight } from "lucide-react";

interface QuizQuestion {
  language: string;
  question: string;
  answers: string[];
  correctAnswer: string;
}

interface UserAnswer {
  questionIndex: number;
  selectedAnswer: string;
}

interface QuizPageProps {
  language: string;
  onReset: () => void;
  onScoreSubmitted?: () => void;
}

const QuizPage: React.FC<QuizPageProps> = ({
  language,
  onReset,
  onScoreSubmitted,
}) => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [showConfirmExit, setShowConfirmExit] = useState<boolean>(false);

  useEffect(() => {
    if (language) {
      const filteredQuestions = quizData.filter(
        (question: QuizQuestion) => question.language === language
      );
      const shuffledQuestions = filteredQuestions.sort(
        () => Math.random() - 0.5
      );
      setQuestions(shuffledQuestions);
    }
  }, [language]);

  useEffect(() => {
    if (showResult) {
      const username = localStorage.getItem("username");
      if (username) {
        fetch("http://localhost:8080/api/users/score", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username: username, score: score }),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Failed to submit score");
            }
            return response.json();
          })
          .then((data) => {
            console.log("Score submitted:", data);
            if (onScoreSubmitted) {
              onScoreSubmitted();
            }
          })
          .catch((error) =>
            console.error("Error submitting score:", error)
          );
      }
    }
  }, [showResult, score, onScoreSubmitted]);

  const handleAnswer = (answer: string): void => {
    // Determine if the answer is correct
    const currentQuiz = questions[currentQuestion];
    const isCorrect = currentQuiz && answer === currentQuiz.correctAnswer;

    // Play sound based on answer correctness
    if (isCorrect) {
      new Audio("/sounds/correct.mp3").play();
      setScore((prevScore) => prevScore + 1);
    } else {
      new Audio("/sounds/wrong.mp3").play();
    }

    setUserAnswers((prev) => [
      ...prev,
      { questionIndex: currentQuestion, selectedAnswer: answer },
    ]);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const handlePlayAgain = (): void => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setUserAnswers([]);
    setQuestions((prev) => [...prev].sort(() => Math.random() - 0.5));
  };

  const confirmExitSubmit = (): void => {
    // Trigger score submission and exit quiz
    setShowResult(true);
    setShowConfirmExit(false);
  };

  const progress = (currentQuestion / questions.length) * 100;

  if (!language) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24"
      >
        {showResult ? (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Quiz Result</h1>
            <p className="text-xl mb-6">
              Your score is {score} out of {questions.length}.
            </p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handlePlayAgain}
            >
              Play Again
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-4"
              onClick={onReset}
            >
              Choose a different programming language
            </button>
            {userAnswers.filter(
              (ua) =>
                questions[ua.questionIndex].correctAnswer !==
                ua.selectedAnswer
            ).length > 0 && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">
                  Review Incorrect Answers
                </h2>
                <ul className="space-y-4">
                  {userAnswers.map((ua, index) => {
                    const question = questions[ua.questionIndex];
                    if (
                      question.correctAnswer !== ua.selectedAnswer
                    ) {
                      return (
                        <li
                          key={index}
                          className="border p-4 rounded"
                        >
                          <p>
                            <strong>Question:</strong>{" "}
                            {question.question}
                          </p>
                          <p>
                            <strong>Your Answer:</strong>{" "}
                            {ua.selectedAnswer}
                          </p>
                          <p>
                            <strong>Correct Answer:</strong>{" "}
                            {question.correctAnswer}
                          </p>
                        </li>
                      );
                    }
                    return null;
                  })}
                </ul>
              </div>
            )}
          </div>
        ) : questions.length > 0 ? (
          <div className="text-center">
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setShowConfirmExit(true)}
                className="text-sm text-gray-500 hover:underline flex items-center"
              >
                <ArrowRight className="mr-2 w-5 h-5" />
                Exit Quiz
              </button>
            </div>
            <h1 className="text-3xl font-bold mb-4">
              {language.charAt(0).toUpperCase() + language.slice(1)} Quiz
            </h1>
            <h2 className="text-xl mb-6">
              {questions[currentQuestion].question}
            </h2>
            <ul className="flex flex-col items-center mb-6">
              {questions[currentQuestion].answers.map((answer, index) => (
                <li key={index} className="mb-4">
                  <button
                    onClick={() => handleAnswer(answer)}
                    className="w-64 h-20 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded flex items-center justify-center text-center px-4"
                  >
                    {answer}
                  </button>
                </li>
              ))}
            </ul>

            <div className="w-full bg-gray-300 h-2 mb-4 rounded">
              <div
                style={{ width: `${progress}%` }}
                className="bg-blue-500 h-2"
              ></div>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Loading...</h1>
          </div>
        )}
      </motion.div>

      {showConfirmExit && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-800 p-8 rounded shadow-lg w-11/12 max-w-md mx-4 text-center"
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              Exit Quiz
            </h2>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              Do you want to submit your current score before exiting?
            </p>
            <div className="flex justify-around">
              <button
                onClick={confirmExitSubmit}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Submit & Exit
              </button>
              <button
                onClick={() => setShowConfirmExit(false)}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default QuizPage;
