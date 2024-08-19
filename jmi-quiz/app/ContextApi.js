"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { quizzesData } from "./QuizzesData";

const GlobalContent = createContext();

export function ContextProvider({ children }) {
  const [allQuizzes, setAllQuizzes] = useState([]);
  const [selectQuizToStart, setSelectQuizToStart] = useState(null);

  useEffect(() => {
    setAllQuizzes(quizzesData);
  }, []);

  return (
    <GlobalContent.Provider
      value={{
        allQuizzes,
        setAllQuizzes,
        quizToStartObject: { selectQuizToStart, setSelectQuizToStart },
      }}
    >
      {children}
    </GlobalContent.Provider>
  );
}

export default function useGlobalContentProvider() {
  return useContext(GlobalContent);
}
