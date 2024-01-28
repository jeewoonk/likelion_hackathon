import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from "./Header2";
import styled from "styled-components";

import { FaCarrot } from 'react-icons/fa';
import { BiSolidBaguette } from "react-icons/bi";
import { FaFlask } from "react-icons/fa";

export default function Category() {
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
			<Header></Header>
			<div>
				{/* <div className='category'> */}
				<DIV1>
					<H1>카테고리 선택하기</H1>
					<P>
						이웃과 새로운 음식 취향을 공유해보세요!
						<br />
						나누고 싶은 식재료 카테고리가 무엇인가요?
					</P>
				</DIV1>
				{/* <div className='whole-wrapper'> */}
				<DIV2>
					{/* <div className="item-wrapper"> */}
					<DIV3>
						{/* <p className="item-tag">FRESH</p> */}
						<Title>FRESH</Title>
						{/* <FaCarrot className='icon' /> */}
						<StyledCarrot className='icon' />
						{/* <div className="item-name">신선 식품</div> */}
						<P2> 신선 식품</P2>
						<P3> 신선하고 건강한 농산물을 쉽고 편리하게 사고팔 수 있는 곳입니다. 제철 과일, 채소 등 다양한 신선 식품을 만나보세요.</P3>
						{/* <p className="item-explanation">신선 식품에 대한 설명을 씁시다. 신선 식품에 대한 설명을 씁시다. 신선 식품에 대한 설명을 씁시다.</p> */}
						{/* <button onClick={navigatefresh}>시작하기</button> */}
						<Button onClick={navigatefresh}>시작하기</Button>
					</DIV3>
					<DIV3>
						<Title>PROCESSED</Title>
						<StyledBaguette className='icon' />
						<P2> 가공 식품</P2>
						<P3> 품질 좋은 가공식품을 간편하게 거래할 수 있는 마켓입니다. 건강과 맛을 고려한 다양한 가공품을 손쉽게 구입해보세요. </P3>
						{/* <p className="item-explanation">가공 식품에 대한 설명을 씁시다. 가공 식품에 대한 설명을 씁시다. 가공 식품에 대한 설명을 씁시다.</p> */}
						<Button onClick={navigateprocessed}>시작하기</Button>
					</DIV3>
					<DIV3>
						<Title>ESSENTIALS</Title>
						<StyledFlask className='icon' />
						<P2> 생활 용품</P2>
						<P3> 일상생활 필수품을 손쉽게 구매 및 판매하는 공간입니다. 청결용품, 주방용품 등 집에서 필요한 모든 것을 여기서 찾아보세요. </P3>
						{/* <p className="item-explanation">가정 용품에 대한 설명을 씁시다. 가정 용품에 대한 설명을 씁시다. 가정 용품에 대한 설명을 씁시다.</p> */}
						<Button onClick={navigateessential}>시작하기</Button>
					</DIV3>
				</DIV2>
			</div>
		</React.Fragment>
	);
};

const DIV1 = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	color: black;
	background-color: #f1f1f1;
	font-family: Nanum;
`

const H1 = styled.h1`
	font-size: 40px;
	margin: 50px auto 30px auto;
	font-family: Nanum;
`

const P = styled.p`
	margin: 5px auto 5px auto;
	font-family: Nanum;
	letter-spacing: 0.5px;
	text-align: center;
	line-height: 1.5rem;
`

const DIV2 = styled.div`
	display: flex;
	justify-content: center;
	height: 100vh;
	background-color: #f1f1f1;
`

const DIV3 = styled.div`
	background-color: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 300px;
	height: 300px;
	margin: 20px;
	align-items: center;
	border-radius: 10px;
	border: 3px solid rgba(255, 255, 255, .2);
`

const Title = styled.p`
	padding: 10px;
	margin-bottom: 10px;
	background: #f1f1f1;
	border-radius: 15px;
	font-size: 18px;
	color: #254232;
	font-weight: 700;
	height: 40px;
	font-family: Rubik;
`

const StyledCarrot = styled(FaCarrot)`
  width: 45px;
  height: 45px;
  background-color: transparent;
  margin-bottom: 10px;
`;

const StyledBaguette = styled(BiSolidBaguette)`
  width: 45px;
  height: 45px;
  background-color: transparent;
  margin-bottom: 10px;
`;

const StyledFlask = styled(FaFlask)`
  width: 45px;
  height: 45px;
  background-color: transparent;
  margin-bottom: 10px;
`;

const P2 = styled.div`
	font-size: 17px;
	font-weight: bold;
	background-color: transparent;
	margin-bottom: 20px;
`

const P3 = styled.p`
	font-size: 14px;
	background-color: transparent;
	text-align: center;
	line-height: 1.5em;
	padding: 0 15px;
	margin-bottom: 5px;
	color: #161C2D;
	font-family: Nanum;
	font-weight: 12;
`

const Button = styled.button`
	width: 80%;
	height: 45px;
	margin-top: 10px;
	background: #254232;
	border: none;
	outline: none;
	border-radius: 10px;
	box-shadow: 0 0 10px rgba(0, 0, 0, .1);
	cursor: pointer;
	font-size: 16px;
	color: #FFFBF9;
	font-weight: 700;
`