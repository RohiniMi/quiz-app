import React, { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:5500/question")
      .then(res => setQuestions(res.data));
  }, []);

  if (questions.length === 0) return <h2>Loading...</h2>;

  const current = questions[index];

  const handleAnswer = (option) => {
    if (option === current.answer) {
      setScore(score + 1);
    }
    setIndex(index + 1);
  };

  const progress = ((index) / questions.length) * 100;

  if (index >= questions.length) {
    return (
      <div style={{ textAlign: "center" }}>
        <h2>Quiz Finished 🎉</h2>
        <h3>Score: {score} / {questions.length}</h3>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "500px", margin: "auto" }}>
      <h2>Quiz App</h2>

      {/* Progress Bar */}
      <div style={{ width: "100%", background: "#ddd", height: "10px" }}>
        <div style={{
          width: `${progress}%`,
          height: "10px",
          background: "green"
        }} />
      </div>

      <p>{index + 1} / {questions.length}</p>

      <h3>{current.question}</h3>

      {current.options.map((opt, i) => (
        <button key={i} onClick={() => handleAnswer(opt)}
          style={{ display: "block", margin: "10px 0" }}>
          {opt}
        </button>
      ))}
    </div>
  );
}