"use client";

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
}

const QuizPage: React.FC<QuizPageProps> = ({ language, onReset }) => {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);

  useEffect(() => {
    if (language) {
      const filteredQuestions = quizData.filter(
        (question: QuizQuestion) => question.language === language
      );
      setQuestions(filteredQuestions);
    }
  }, [language]);

  const handleAnswer = (answer: string): void => {
    setUserAnswers((prev) => [
      ...prev,
      { questionIndex: currentQuestion, selectedAnswer: answer },
    ]);

    if (
      questions[currentQuestion] &&
      answer === questions[currentQuestion].correctAnswer
    ) {
      setScore((prevScore) => prevScore + 1);
    }

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
  };

  if (!language) {
    return <div className="text-center">Loading...</div>;
  }

  return (
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
              questions[ua.questionIndex].correctAnswer !== ua.selectedAnswer
          ).length > 0 && (
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">Review Incorrect Answers</h2>
              <ul className="space-y-4">
                {userAnswers.map((ua, index) => {
                  const question = questions[ua.questionIndex];
                  if (question.correctAnswer !== ua.selectedAnswer) {
                    return (
                      <li key={index} className="border p-4 rounded">
                        <p>
                          <strong>Question:</strong> {question.question}
                        </p>
                        <p>
                          <strong>Your Answer:</strong> {ua.selectedAnswer}
                        </p>
                        <p>
                          <strong>Correct Answer:</strong> {question.correctAnswer}
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
              onClick={onReset}
              className="text-sm text-gray-500 hover:underline"
            >
              <ArrowRight/>Exit Quiz
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
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  {answer}
                </button>
              </li>
            ))}
          </ul>
          <p className="text-lg mb-6">Score: {score}</p>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Loading...</h1>
        </div>
      )}
    </motion.div>
  );
};

export default QuizPage;
