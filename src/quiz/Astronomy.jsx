import { useReducer, useRef, useState } from "react";
import styles from "./astronomy.module.css";
import Ingameheader from "../header/Ingameheader";
import answerclick from "/sounds/answerclick.wav";
import bgmmusic from "/sounds/astronomybgm.mp3";

export default function Astronomy() {
  const hoverSound = useRef(null);
  const clicksoundFile = useRef(null);

  const astronomyquestions = [
    {
      id: 1,
      questiontext: "What is the largest planet in the solar system?",
      options: ["Mercury", "Mars", "Jupiter", "Pluto"],
      correctanswer: "Jupiter",
      gif: "./images/astronomygifs/question1gif.gif",
    },
    {
      id: 2,
      questiontext: "What is the closest planet to the Sun?",
      options: ["Earth", "Mercury", "Venus", "Jupiter"],
      correctanswer: "Mercury",
      gif: "./images/astronomygifs/question2gif.gif",
    },
    {
      id: 3,
      questiontext: "What is the largest planet in the solar system",
      options: ["Mercury", "Mars", "Jupiter", "Pluto"],
      correctanswer: "Jupiter",
    },
  ];
  const [currentQuestionIndex, setcurrentQuestionIndex] = useState(0);
  const currentquestion = astronomyquestions[currentQuestionIndex];
  const [score, setScore] = useState(0);
  const [finish, setFinished] = useState(false);
  const [showCorrectAnswer, setshowCorrectAnswer] = useState(false);

  function checkcorrectanswer(option, index) {
    //checks if finished na yung quiz
    if (currentQuestionIndex == astronomyquestions.length - 1) {
      setTimeout(() => {
        setFinished(true);
      }, 6000);
    }
    //checks if tama yung sagot ni user and sets the score
    if (option == currentquestion.correctanswer) {
      setScore(score + 1);
    }
    setTimeout(() => {
      setshowCorrectAnswer(true);
      setTimeout(() => {
        setcurrentQuestionIndex(currentQuestionIndex + 1);
        setshowCorrectAnswer(false);
      }, 3000);
    }, 3000);
  }

  const [timerpopup, settimerpopup] = useState(true);
  const [timer, setTimer] = useState(3);
  if (timer > 0) {
    setTimeout(() => {
      setTimer(timer - 1);
    }, 1000);
  } else if (timer == 0 && timerpopup) {
    settimerpopup(!timerpopup);
    console.log(timerpopup);
  }
  return (
    <>
      <h1>{timer}</h1>
    </>
    // <>

    //   <audio ref={hoverSound} src={answerclick} preload="auto" />
    //   {/* <audio src={bgmmusic} autoPlay loop /> */}

    //   <Ingameheader />
    //   {/* conditionally irrender yung components if done naba yung quiz or hindi */}

    //   {finish ? (
    //     // result screen
    //     <div className={styles.resultscreen}>
    //       <h1>{score}</h1>
    //     </div>
    //   ) : (
    //     // quiz screen
    //     <div className={styles.AstronomyQuiz}>
    //       <div className={styles.questioncontainer}>
    //         <h1 className={styles.question}>{currentquestion.questiontext}</h1>
    //         <img
    //           className={styles.gif}
    //           src={currentquestion.gif}
    //           alt="questiongif"
    //         />
    //       </div>
    //       <div className={styles.optionscontainer}>
    //         <ul className={styles.uloptions}>
    //           {currentquestion.options.map((option, index) => (
    //             <button
    //               className={`${styles.optionbuttons} ${
    //                 styles.optionbuttons1
    //               } ${
    //                 showCorrectAnswer
    //                   ? currentquestion.correctanswer == option
    //                     ? styles.green
    //                     : styles.darken
    //                   : ""
    //               } `}
    //               onClick={() => {
    //                 checkcorrectanswer(option, index);
    //                 hoverSound.current.play();
    //               }}
    //               key={index}
    //             >
    //               {option}
    //             </button>
    //           ))}
    //         </ul>
    //       </div>
    //     </div>
    //   )}
    // </>
  );
}
