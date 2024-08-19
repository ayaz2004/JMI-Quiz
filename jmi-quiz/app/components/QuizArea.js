"use client";

import React from "react";
import QuizCard from "./QuizCard.js";
import PlaceHolder from "./PlaceHolder.js";
import useGlobalContentProvider from "../ContextApi";

function QuizArea(props) {
  const { allQuizzes } = useGlobalContentProvider();
  return (
    <div className="poppins m-12 mt-10">
      {allQuizzes.length === 0 ? (
        <PlaceHolder />
      ) : (
        <div>
          <h2 className="text-xl font-bold">My Quizzes</h2>
          <div className="mt-6 flex gap-2 flex-wrap">
            {allQuizzes.map((singleQuiz, quizIndex) => (
              <div key={quizIndex}>
                <QuizCard singleQuiz={singleQuiz} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
export default QuizArea;
