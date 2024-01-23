import React from "react";
import { Grid } from "../elements";
import styled from "styled-components";
// import { history } from "../redux/configureStore";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import {Routes, Route, useNavigate} from 'react-router-dom';


const Header = (props) => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <div
        style={{
          position: "sticky",
          top: "0px",
          width: "100%",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Grid is_flex padding="5px 0px" width="1024px" margin="auto">
          <Grid is_start maxwidth="700px">
            <Image
              onClick={() => navigate("/")}
              src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/header/logo-basic-24b18257ac4ef693c02233bf21e9cb7ecbf43ebd8d5b40c24d99e14094a44c81.svg"
            ></Image>
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

          <Button2
            // onClick={() => {
            //   history.push("/login");
            // }}
            onClick={() => navigate("/login")}
          >
            Log In
          </Button2>
          <Button2
            // onClick={() => {
            //   history.push("/signup");
            // }}
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </Button2>
        </Grid>
      </div>
    </React.Fragment>
  );
};

Header.defaultProps = {};

export default Header;

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
`;

const Image = styled.img`
  width: 120px;
`;

const Button = styled.div`
  display: inline-block;
  color: #495057;
  font-size: 14px;
  margin-left: 8px;
  font-weight: 700;
  vertical-align: middle;
`;

const Button2 = styled.button`
  width: 140px;
  border-radius: 5px;
  border: solid 1px #ffdcc5;
  box-sizing: border-box;
  text-decoration: none;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  padding: 7px;
  height: 40px;
  margin: 0px 5px;
  background-color: #ffffff;
  color: #666666;
`;
