import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { nanoid } from "nanoid";
const CardHolderElem = styled.div`
  width: 100%;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(6, 1fr);
  padding: 2rem;

  @media only screen and (max-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media only screen and (max-width: 889px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 350px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default function CardHolder(props) {
  function shuffleCards(index) {
    props.setSelected(index);
    setCards((prevCards) => {
      for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [prevCards[i], prevCards[j]] = [prevCards[j], prevCards[i]];
      }
      return prevCards;
    });
  }
  const [cards, setCards] = React.useState(
    props.cardData.map((card) => {
      return (
        <Card
          colors={props.colors}
          image={card.image}
          title={card.title}
          selected={card.selected}
          shuffleCards={shuffleCards}
          index={card.index}
          position={card.position}
          key={nanoid()}
        />
      );
    })
  );
  return <CardHolderElem>{cards}</CardHolderElem>;
}
