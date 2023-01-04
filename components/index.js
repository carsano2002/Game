import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "./navbar";
import COLORS from "../colors";
import CARDINFODATA from "../Data/CardInfo.js";
import CardHolder from "./CardHolder";
export default function Content(props) {
  const [cardInfo, setCardInfo] = useState(CARDINFODATA);
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(getTopScore());

  useEffect(() => {
    if (score == 12) {
      resetGame();
    }
  }, [score]);

  function getTopScore() {
    const localTopScore = localStorage.getItem("topScore");
    if (localTopScore) {
      return parseInt(localTopScore);
    } else {
      return 0;
    }
  }
  function resetGame() {
    setScore(0);
    setCardInfo((prevData) => {
      return prevData.map((card) => {
        return {
          ...card,
          selected: false
        };
      });
    });
  }

  function checkTopScore(score) {
    if (score > topScore) {
      setTopScore((prevScore) => {
        return score;
      });
      localStorage.setItem("topScore", JSON.stringify(topScore + 1));
    }
  }

  function IncremementScore() {
    setScore((prevScore) => {
      checkTopScore(prevScore + 1);
      return prevScore + 1;
    });
  }

  function setSelected(index) {
    setCardInfo((prevInfo) => {
      if (prevInfo[index - 1].selected) {
        resetGame();
      } else {
        prevInfo[index - 1].selected = true;

        IncremementScore();
      }

      return prevInfo;
    });
  }

  function refreshScore() {
    localStorage.setItem("topScore", "0");
    setTopScore(0);
  }

  return (
    <>
      <Navbar
        score={score}
        topScore={topScore}
        colors={COLORS}
        refreshScore={refreshScore}
      />
      <CardHolder
        setSelected={setSelected}
        cardData={CARDINFODATA}
        colors={COLORS}
      />
    </>
  );
}
