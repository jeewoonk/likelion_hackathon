import React from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import Header from "./Header";

import main from '../assets/main.png';
import main2 from '../assets/main2.jpeg';
import main3 from '../assets/main3.jpeg';

const Main = () => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <Header></Header>
        <div>
          <DIV1>
            <div
              style={{
                flexDirection: "column",
              }}
            >
              <H1>
                자취마켓.
              </H1>
              <P1>
                이웃과 나누는 맛,
                <br />
                자취마켓에서 함께해요
              </P1>

              <Button onClick={() => navigate("/category")}>
                시작하기
              </Button>
            </div>
          </DIV1>
        </div>
        <DIV2>
          <div
              style={{
                flexDirection: "column",
              }}
            >
            <H2> 
              Less Waste,
              <br />
              More Taste
            </H2>
            <P2>
              불필요한 식재료는 나누고, 필요한 맛을 더하세요.
            </P2>
          </div>
              
        </DIV2>
        <DIV3>
        </DIV3>
    </React.Fragment>
  );
};

export default Main;


const DIV1 = styled.div`
  // width: 1200px;
  height: 800px;
  // margin: 0px 100px 0px 200px;
  background-image: url(${main});
  display: flex;
  // align-items: center;
  justify-content: space-evenly;
  background-repeat:no-repeat;
  background-size: cover;
  // background-position: center center;  
  background-color: transparent;   
  font-family: Nanum; 
`;

const H1 = styled.h1`
  font-size: 5rem;
  // line-height: 1.3;
  padding-top: 100px;
  padding-left: 270px;
  margin: 0px;
  // margin-bottom: 2rem;
  // letter-spacing: -0.4px;
  font-weight: 800;
  background-color: transparent;
`;

const P1 = styled.p`
  font-size: 37px;
  display: block;
  padding-left: 270px;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  background-color: transparent;
  letter-spacing: 1px;
  margin: 70px 0px 0px 0px;
  line-height: 3.5rem;
`;

const Button = styled.button`
  width: 200px;
  height: 70px;
  //padding-left: 300px;
  border-radius: 10px;
  border: solid 1.2px #000000;
  box-sizing: border-box;
  text-decoration: none;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  margin: 70px 110%;
  background-color: #254232;
  color: #fff;
  font-size: 25px;
  font-family: Nanum; 
`;

const DIV2 = styled.div`
  // width: 1200px;
  height: 800px;
  // margin: 0px 100px 0px 200px;
  background-image: url(${main2});
  display: flex;
  // align-items: center;
  justify-content: space-evenly;
  background-repeat:no-repeat;
  background-size: cover;
  background-position: center center;  
  // background-color: transparent;   
  font-family: Nanum; 
  filter: brightness(110%)
`;

const H2 = styled.h1`
  font-size: 80px;
  line-height: 103px;
  padding-top: 100px;
  // padding-left: 270px;
  // margin: 1000px;
  // margin-bottom: 2rem;
  // letter-spacing: -0.4px;
  font-weight: 400;
  background-color: transparent;
  font-family: Libre;
  text-align: center;
`;

const P2 = styled.p`
  font-size: 37px;
  display: block;
  // margin-block-start: 1em;
  // margin-block-end: 1em;
  // margin-inline-start: 0px;
  // margin-inline-end: 0px;
  // background-color: transparent;
  letter-spacing: 1px;
  margin: 70px 0px 0px 0px;
  line-height: 3.5rem;
  text-align: center;
`;

const DIV3 = styled.div`
  // width: 1200px;
  height: 800px;
  // margin: 0px 100px 0px 200px;
  background-image: url(${main3});
  display: flex;
  // align-items: center;
  justify-content: space-evenly;
  background-repeat:no-repeat;
  background-size: cover;
  background-position: center center;  
  // background-color: transparent;   
  font-family: Nanum; 
  filter: brightness(110%)
`;