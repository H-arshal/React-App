import React, { useState } from "react";
function Ex6QuizApp() {
  const Questions = [
    {
      question: "Which of the following is not a Java keyword?",
      options: ["interface", "extends", "implement", "throws"],
      answer: 2,
    },
    {
      question: "What is the default value of a boolean variable in Java?",
      options: ["true", "false", "0", "null"],
      answer: 1,
    },
    {
      question: "Which method is used to start a thread execution in Java?",
      options: ["start()", "run()", "init()", "execute()"],
      answer: 0,
    },
    {
      question: "Which class is the parent class of all classes in Java?",
      options: ["Object", "Class", "System", "Throwable"],
      answer: 0,
    },
    {
      question: "What is the size of the `int` data type in Java?",
      options: ["16 bits", "32 bits", "64 bits", "8 bits"],
      answer: 1,
    },
    {
      question: 'What is the output of `System.out.println(2 + 3 + "Java");`?',
      options: ["5Java", "Java5", "Java23", "23Java"],
      answer: 0,
    },
    {
      question: "Which collection class allows duplicate elements?",
      options: ["HashSet", "TreeSet", "ArrayList", "LinkedHashSet"],
      answer: 2,
    },
    {
      question:
        "Which access modifier makes a member accessible only within its own package?",
      options: ["private", "protected", "public", "default"],
      answer: 3,
    },
    {
      question:
        'What is the output of the following code snippet?\n`String s = "Java";\nSystem.out.println(s.substring(1, 3));`',
      options: ["Ja", "ava", "av", "Java"],
      answer: 2,
    },
    {
      question: "Which interface does the `ArrayList` class implement?",
      options: ["List", "Set", "Queue", "Map"],
      answer: 0,
    },
    {
      question: "What is the result of the expression `5 + 2 * 3` in Java?",
      options: ["11", "21", "16", "17"],
      answer: 0,
    },
  ];
  var [currentQue, setCurrentQue] = useState(0);
  var [showScore, setShowScore] = useState(false);
  var [score, setScore] = useState(0);
  function showQue() {
    setShowScore(false);
    setCurrentQue(0);
    setScore(0);
  }
  const handleClick = (index) => {
    const nextQue = currentQue + 1;
    if (nextQue < Questions.length) {
      if (index === Questions[currentQue].answer) {
        setScore(score + 1);
      }
      setCurrentQue(nextQue);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="ex6">
      {showScore ? (
        <div className="main-container">
          <div className="que-container">
            <h2>Score is : {score}</h2>
            <button onClick={showQue}>Ok</button>
          </div>
        </div>
      ) : (
        <div className="main-container">
          <div className="que-container">
            <div className="que-no">
              <h3>
                Question <span>{currentQue + 1}</span>/{Questions.length}
              </h3>
            </div>
            <div className="Question">{Questions[currentQue].question}</div>
          </div>
          <div className="opt-container">
            {Questions[currentQue].options.map((opt, index) => (
              <div
                key={index}
                className="options"
                onClick={() => handleClick(index)}
              >
                {opt}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
export default Ex6QuizApp;
