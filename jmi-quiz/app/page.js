"use client";

import { useEffect } from "react";
import Navbar from "./components/Navbar.js";
import QuizArea from "./components/QuizArea.js";
import useGlobalContentProvider from "./ContextApi.js";

export default function Home() {
  const { quizToStartObject } = useGlobalContentProvider();
  const { setSelectQuizToStart } = quizToStartObject;

  useEffect(() => {
    setSelectQuizToStart(null);
  }, []);

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <QuizArea />
    </div>
  );
}
