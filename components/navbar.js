import React from "react";
import styled from "styled-components";

const NavbarElem = styled.nav`
  display: flex;
  padding: 10px 0;
  background: ${(props) => props.colors.orangeC};
  box-shadow: 0px 3px 5px 0px ${(props) => props.colors.redB};
`;

const Navleft = styled.div`
  flex: 1;
  flex-basis: 75%;
  padding-left: 5px;
`;
const Navright = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  p {
    width: 120px;
  }
`;
const Header = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  text-shadow: 0px 0px 5px ${(props) => props.colors.redB};
`;
const Refresh = styled.p`
  border: 1px solid ${(props) => props.colors.redB};
  color: ${(props) => props.colors.redB};
  text-align: center;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.colors.orangeC};
    border: 1px solid ${(props) => props.colors.orangeC};
    background-color: ${(props) => props.colors.redB};
  }
  &:active {
    background-color: ${(props) => props.colors.redD};
  }
`;
export default function Navbar(props) {
  return (
    <NavbarElem colors={props.colors}>
      <Navleft>
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/Asian-College-pngv2.png/220px-Asian-College-pngv2.png"
          alt="logo"
        />
        <Header colors={props.colors}> Memory Game</Header>
        <p> Click each character without clicking any of them twice!</p>
      </Navleft>
      <Navright>
        <p> Score: {props.score}</p>

        <p> Best Score: {props.topScore} </p>
        <Refresh onClick={props.refreshScore} colors={props.colors}>
          {" "}
          Refresh Score{" "}
        </Refresh>
      </Navright>
    </NavbarElem>
  );
}
