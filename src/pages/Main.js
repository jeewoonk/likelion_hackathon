import React from "react";
import styled from "styled-components";
import main from '../assets/main.png';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <div style={{ backgroundColor: "#F1F1F1" }}>
        <DIV1>
          <div
            style={{
              flexDirection: "column",
              // justifyContent: "space-between",
            }}
          >
            <H1>
              자취마켓
            </H1>
            <P>
              이웃과 나누는 맛,
              <br />
              자취마켓에서 함께해요
            </P>

            <Button onClick={() => navigate("/category")}>
              시작하기
            </Button>
          </div>
        </DIV1>
      </div>
    </React.Fragment>
  );
};

export default Main;


const DIV1 = styled.div`
  // width: 1200px;
  height: 800px;
  // margin: 0px 100px 0px 200px;
  background-image: url(${main});
  background-color: #F1F1F1;
  display: flex;
  // align-items: center;
  justify-content: space-evenly;
  background-repeat:no-repeat;
  background-size: cover;
  background-position: center center;      
`;

const H1 = styled.h1`
  font-size: 5rem;
  // line-height: 1.3;
  padding-top: 100px;
  padding-left: 270px;
  margin: 0px;
  // margin-bottom: 2rem;
  letter-spacing: -0.4px;
  font-weight: 900;
`;

const P = styled.p`
  font-size: 37px;
  display: block;
  padding-left: 270px;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

const Button = styled.button`
  width: 200px;
  height: 70px;
  // padding-left: 300px;
  border-radius: 10px;
  border: solid 1.2px #000000;
  box-sizing: border-box;
  text-decoration: none;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  margin: 70px 250px;
  background-color: #254232;
  color: #fff;
  font-size: 25px;
`;