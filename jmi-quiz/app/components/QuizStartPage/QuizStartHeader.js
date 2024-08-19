"use client";

import React from "react";
import { faCode, faStopwatch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useGlobalContentProvider from "@/app/ContextApi";

function QuizStartHeader({ parentTimer }) {
  const { quizToStartObject } = useGlobalContentProvider();
  const { selectQuizToStart } = quizToStartObject;

  const { quizTitle, quizQuestions } = selectQuizToStart;

  return (
    <div className="flex justify-between">
      <div className="flex gap-2 justify-center">
        <div className="bg-green-700 w-12 h-12 flex items-center justify-center rounded-md">
          <FontAwesomeIcon
            className="text-white"
            width={25}
            height={25}
            icon={faCode}
          />
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="font-bold text-xl">{quizTitle}</h2>
          <span className="font-light text-sm">
            {quizQuestions.length} Questions
          </span>
        </div>
      </div>

      <div className="flex gap-2 items-center">
        <FontAwesomeIcon
          className="text-green-700"
          width={20}
          height={20}
          icon={faStopwatch}
        />
        <span>00:00:{parentTimer}</span>
      </div>
    </div>
  );
}

export default QuizStartHeader;
