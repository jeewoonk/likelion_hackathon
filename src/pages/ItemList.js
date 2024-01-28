import React, { useState } from 'react';
import styled from "styled-components";
import { useNavigate, useLocation } from 'react-router-dom';
import Header from "./Header2";

import freshData from '../data/freshData';
import processedData from '../data/processedData';
import essentialData from '../data/essentialData';

const ItemList = () => {
	const navigate = useNavigate();
    const navigateItem = (itemId, categoryID) => {
        navigate(`/item/${itemId}`, {state: {itemId: {itemId}}});
    };

    const location = useLocation();
    const categoryID = location.state?.categoryID;
    
    switch (categoryID) {
        case 'fresh':
            return (
		        <React.Fragment>
                    <Header></Header>
                    <DIV1>
                        <H1> FRESH </H1>
                        <H2> 신선하고 건강한 농산물을 쉽고 편리하게 사고팔 수 있는 곳입니다. 제철 과일, 채소 등 다양한 신선 식품을 만나보세요. </H2>
                        <Button1>
                            최신순 ↑
                        </Button1>
                        <Button2>
                            별점순 ↑
                        </Button2>
                        <ItemListContainer>
                            {freshData.map(item => (
                                <ItemContainer key={item.foodid}
                                onClick={() => navigateItem(item.foodid)}>
                                    <Image src={item.image} />
                                    <H3>{item.title}</H3>
                                    <P>Price: ${item.price}</P>
                                </ItemContainer>
                            ))}
                        </ItemListContainer>
                    </DIV1>
                </React.Fragment>
            );      
        case 'processed':
            return (
		        <React.Fragment>
                    <Header></Header>
                    <DIV1>
                        <H1> PROCESSED </H1>
                        <H2> 품질 좋은 가공식품을 간편하게 거래할 수 있는 마켓입니다. 건강과 맛을 고려한 다양한 가공품을 손쉽게 구입해보세요. </H2>
                        <Button1>
                            최신순 ↑
                        </Button1>
                        <Button2>
                            별점순 ↑
                        </Button2>
                        <ItemListContainer>
                            {processedData.map(item => (
                                <ItemContainer key={item.foodid}
                                onClick={() => navigateItem(item.foodid)}>
                                    <Image src={item.image} />
                                    <H3>{item.title}</H3>
                                    <P>Price: ${item.price}</P>
                                </ItemContainer>
                            ))}
                        </ItemListContainer>
                    </DIV1>
                </React.Fragment>
            );      
        case 'essential':
            return (
		        <React.Fragment>
                    <Header></Header>
                    <DIV1>
                        <H1> ESSENTIALS </H1>
                        <H2> 일상생활 필수품을 손쉽게 구매 및 판매하는 공간입니다. 청결용품, 주방용품 등 집에서 필요한 모든 것을 여기서 찾아보세요. </H2>
                        <Button1>
                            최신순 ↑
                        </Button1>
                        <Button2>
                            별점순 ↑
                        </Button2>
                        <ItemListContainer>
                            {essentialData.map(item => (
                                <ItemContainer key={item.foodid}
                                onClick={() => navigateItem(item.foodid)}>
                                    <Image src={item.image} />
                                    <H3>{item.title}</H3>
                                    <P>Price: ${item.price}</P>
                                </ItemContainer>
                            ))}
                        </ItemListContainer>
                    </DIV1>
                </React.Fragment>
            );      
    }
};

export default ItemList;

const DIV1 = styled.div`
    background-color: #f1f1f1;
`

const H1 = styled.h1`
    font-size: 45px;
    // margin: 10px 10px;
    letter-spacing: 0.4px;
    font-weight: 1000;
    justify-content: center;
    text-align: center;
    font-family: Gilroy;
    padding: 20px;
`
const H2 = styled.h2`
    font-size: 20px;
    font-weight: 350;
    font-color: #A5A5A5;
    text-align: center;
    // margin: 10px;
    font-family: Gilroy;
    padding: 15px;
`

const Button1 = styled.button`
    width: 110px;
    border-radius: 20px;
    border: solid 1.2px #000000;
    box-sizing: border-box;
    text-decoration: none;
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    padding: 10px;
    height: 35px;
    margin: 0px 0px 10px 100px;
    background-color: #ffffff;
    color: #000000;
    font-size: 14px;
    font-family: Nanum;
`

const Button2 = styled.button`
    width: 110px;
    border-radius: 20px;
    border: solid 1.2px #000000;
    box-sizing: border-box;
    text-decoration: none;
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    padding: 7px;
    height: 35px;
    margin: 0px 0px 10px 30px;
    background-color: #ffffff;
    color: #000000;
    font-size: 14px;
    font-family: Nanum;
`

const ItemListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
`;

const ItemContainer = styled.div`
    flex: 0 0 calc(23% - 30px);
    border: 1px solid #ddd;
    padding: 10px;
    text-align: left;
    box-sizing: border-box;
    // padding: px;
    font-family: Nanum;
`;

const H3 = styled.h3`
    padding: 8px 0px 0px 30px;
    letter-spacing: 0.4px;
    font-weight: 400;
    font-size: 18px;
`

const P = styled.p`
    padding: 3px 0px 0px 30px;
    font-weight: 500;
    font-size: 15px;
`

const Image = styled.img`
    width: 210px;
    height: 210px;
	border-radius: 10px;
    display: block;
    margin: 0 auto;
    filter: drop-shadow(2px 2px 2px #8e918f);
`;
