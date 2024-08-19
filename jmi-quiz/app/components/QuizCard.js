"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { faCode, faEllipsis, faPlay } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import useGlobalContentProvider from "../ContextApi";

function successRate(singleQuiz) {
  let correctQuestions = 0;
  let totalAttempts = 0;
  let successRate = 0;

  singleQuiz.quizQuestions.forEach((question) => {
    totalAttempts += question.statistics.totalAttempts;
    correctQuestions += question.statistics.correctAttempts;
  });

  successRate = Math.ceil((correctQuestions / totalAttempts) * 100);
  return successRate;
}

function QuizCard({ singleQuiz }) {
  const { quizToStartObject } = useGlobalContentProvider();
  const { setSelectQuizToStart } = quizToStartObject;
  const { quizTitle, quizQuestions, icon } = singleQuiz;

  const totalQuestions = quizQuestions.length;
  const globalSuccessRate = successRate(singleQuiz);
  return (
    <div className="rounded-lg bg-white p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col gap-2 border border-gray-300">
      <div className="relative bg-gradient-to-r from-green-500 to-green-700 w-full h-32 flex flex-col justify-center items-center rounded-md p-4">
        <div className="absolute top-3 right-3 flex gap-2">
          <FontAwesomeIcon
            className="text-white hover:text-gray-300 transition-colors"
            height={20}
            width={20}
            icon={faEllipsis}
          />
          <FontAwesomeIcon
            className="text-white hover:text-gray-300 transition-colors"
            height={40}
            width={40}
            icon={faCode}
          />
        </div>
        <h3 className="text-lg font-semibold text-gray-800">{quizTitle}</h3>
        <p className="text-sm text-gray-600">{totalQuestions} question(s)</p>
        <div className="flex gap-3 items-center">
          <div className="flex gap-1 items-center">
            <Image
              src="/target-777.png"
              width={20}
              height={20}
              alt="Target"
              layout="intrinsic"
              objectFit="contain"
            />
            <span className="text-xs text-gray-700">
              Success Rate: {globalSuccessRate}%
            </span>
          </div>
          <div
            onClick={() => {
              setSelectQuizToStart(singleQuiz);
            }}
            className="rounded-full w-10 h-10 bg-green-800 flex items-center justify-center cursor-pointer hover:bg-green-700 transition-colors"
          >
            <Link href="/quiz-start">
              <FontAwesomeIcon
                className="text-white"
                width={20}
                height={20}
                icon={faPlay}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizCard;
