import React from "react";

import styled from "styled-components";
import banner1 from "../shared/banner1.png";

const Banner1 = () => {
  return (
    <React.Fragment>
      {/* 배너 1 */}
      <div style={{ backgroundColor: "#5f9ea0" }}>
        <DIV1>
          <div
            style={{
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <H1>
              자취생 식재료 나눔 서비스
              {/* <br />
              당근마켓 */}
            </H1>
            <P>
              dummy dummy dummy dummy
              {/* <br />
              가깝고 따뜻한 당신의 근처를 만들어요. */}
            </P>
          </div>

          <Image1></Image1>
        </DIV1>
      </div>
    </React.Fragment>
  );
};

export default Banner1;

const DIV1 = styled.div`
  width: 1500px;
  height: 760px;
  margin: 0px 100px 0px 200px;
  background-color: #5f9ea0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const H1 = styled.h1`
  font-size: 3.2rem;
  line-height: 1.3;
  padding-top: 100px;
  margin: 0px;
  margin-bottom: 2rem;
  letter-spacing: -0.4px;
  font-weight: 900;
`;

const P = styled.p`
  font-size: 17px;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

const Image1 = styled.div`
  bottom: 0;
  width: 754px;
  height: 635px;
  background-image: url(${banner1});
  background-size: 754px 635px;
  margin: 120px 0px 0px 0px;
`;
