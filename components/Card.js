import React from "react";
import styled from "styled-components";

const CardElem = styled.div`
  position: relative;
  height: 300px;
  border: 1px solid ${(props) => props.colors.black};
  background: url(${(props) => props.image});
  background-position: center;
  background-size: cover;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 5px 2px ${(props) => props.colors.redC};
  }
`;
const Title = styled.h3`
  position: absolute;
  width: 100%;
  bottom: 0px;
  background: ${(props) => props.colors.yellow};
  padding: 3px;
  border-top: 1px solid ${(props) => props.colors.black};
  text-align: center;
`;

export default function Card(props) {
  return (
    <CardElem
      onClick={() => props.shuffleCards(props.index)}
      colors={props.colors}
      image={props.image}
    >
      <Title colors={props.colors}> {props.title} </Title>
    </CardElem>
  );
}
