import { faCode } from "@fortawesome/free-solid-svg-icons";

export const quizzesData = [
  {
    id: 1,
    icon: faCode,
    quizTitle: "Class XI Chemistry",
    quizQuestions: [
      {
        id: 1,
        mainQuestion: "What is the name of the element with the symbol Ca?",
        choices: [
          "A. Calcium",
          "B. Carbon",
          "C. Potassium",
          "D. None of these",
        ],
        correctAnswer: 1,
        answerResult: -1,
        statistics: {
          totalAttempts: 3,
          correctAttempts: 2,
          incorrectAttempts: 1,
        },
      },
      {
        id: 2,
        mainQuestion: "What is the name of the element with the symbol Mg?",
        choices: [
          "A. Magnesium",
          "B. Manganese",
          "C. Marble",
          "D. None of these",
        ],
        correctAnswer: 1,
        answerResult: -1,
        statistics: {
          totalAttempts: 2,
          correctAttempts: 1,
          incorrectAttempts: 1,
        },
      },
    ],
  },
];
