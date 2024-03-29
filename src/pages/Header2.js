import React from "react";
import { Grid } from "../elements";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';


const Header = (props) => {
  const navigate = useNavigate();

  const navigatefresh = () => {
		navigate("/category/fresh", {state: { categoryID: 'fresh' }});
	}
	const navigateprocessed = () => {
		navigate("/category/processed", {state: { categoryID: 'processed' }});
	}

	const navigateessential = () => {
		navigate("/category/essential", {state: { categoryID: 'essential' }});
	}

  return (
    <React.Fragment>
      <div
        style={{
          // position: "sticky",
          top: "0px",
          left: "5px",
          width: "100%",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Grid is_flex padding="5px 10px" margin="auto">
          <Grid is_start maxwidth="550px">
            <Logo onClick={() => navigate("/")}> 자취마켓. </Logo>
            <InputWrap>
              <Grid is_flex>
                <Input placeholder="식재료를 검색해보세요!"></Input>
                <img
                  style={{ marginRight: "10px" }}
                  src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/header/search-icon-7008edd4f9aaa32188f55e65258f1c1905d7a9d1a3ca2a07ae809b5535380f14.svg"
                ></img>
              </Grid>
            </InputWrap>
          </Grid>
          
          <Grid is_flex width="500px">
            <Cat onClick={navigatefresh}>
              FRESH
            </Cat>
            <Cat onClick={navigateprocessed}>
              PROCESSED
            </Cat>
            <Cat onClick={navigateessential}>
              ESSENTIALS
            </Cat>
          </Grid>
          
          <Grid is_flex maxwidth="200px">
            <Button onClick={() => navigate("/")}>
              마이페이지
            </Button>
            <Button onClick={() => navigate("/chat")}>
              채팅
            </Button>
          </Grid>
          
        </Grid>
      </div>
    </React.Fragment>
  );
};

Header.defaultProps = {};

export default Header;

const Logo = styled.h1`
  color: #161C2D;
  text-align: center;
  font-family: Nanum;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.133px;
`;

const InputWrap = styled.div`
  border-radius: 5px;
  border: solid 1px #e9ecef;
  text-decoration: none;
  height: 40px;
  box-sizing: border-box;
  margin: 10px 20px;
`;

const Input = styled.input`
  border: hidden;
  margin: 0px;
  padding: 10px;
  width: 340px;
  font-size: 16px;
  font-weight: 500;
  margin: auto;
  -webkit-appearance: none;
  margin-top: 3px;
  background-color: transparent;
  font-family: Nanum;
`;

const Image = styled.img`
  width: 120px;
`;

const Cat = styled.h1`
  // width: 120px;
  vertical-align: middle;
  font-size: 20px;
  font-weight: 300;
  // display: flex;
  // justify-content: space-between;
  // max-width: 500px;
`

const Button = styled.button`
  width: 110px;
  border-radius: 20px;
  border: solid 1.2px #000000;
  box-sizing: border-box;
  text-decoration: none;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  padding: 7px;
  height: 40px;
  margin: 0px 5px;
  background-color: #ffffff;
  color: #000000;
  font-size: 14px;
  font-family: Nanum;
`;
