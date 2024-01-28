import React, { useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Header from "./Header2";

import freshData from '../data/freshData';
import processedData from '../data/processedData';
import essentialData from '../data/essentialData';

const ItemDetails = () => {
    // const { itemId } = useParams(); // Get the itemId from URL parameters
    // const item = freshData.find(item => item.foodid.toString() === itemId); // Find the item with the matching id

    const location = useLocation();
    const [itemId, setitemId] = useState(
        location.state?.itemId
    );

    const item = freshData.find(freshData => freshData.foodid === itemId.itemId);

    if (!item) {
        return <p>Item not found</p>;
    }

    return (
        <React.Fragment>
            <Header></Header>
            <MainContainer>
                <DIV1>
                    <Title>{item.title}</Title>
                    <Image src={item.image} />
                    {/* <Quantity> 수량: {item.quantity}개</Quantity> */}
                </DIV1>
                <DIV2>
                    <Price> US ${item.price} / ea</Price>
                    <Quantity> 수량: {item.quantity}개</Quantity>
                    <Seller>
                        Seller: {item.userid}
                        {/* Rating */}
                        {/* <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_star.png" className="star"></img> */}
                    </Seller>
                    <Hr />
                    <Description>
                        {item.description}
                    </Description>
                    <Button>채팅 보내기</Button>
                </DIV2>
            </MainContainer>
        </React.Fragment>
    );
};

export default ItemDetails;

const MainContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    // padding: 20px;
    gap: 20px;
    background-color: #f1f1f1;
    font-family: Nanum;
    height: 1000px;
`;

const DIV1 = styled.div`
    display: flex;
	flex-direction: column;
    flex: 1;
    padding: 20px;
`

const Title = styled.h2`
    font-size: 35px;
    margin: 30px 0px 40px 60px;
    // padding: 60px;
`

const Image = styled.img`
    width: 500px;
    height: 500px;
    border-radius: 10px;
    display: block;
    margin: -10px 0px 0px 60px;
    // filter: drop-shadow(2px 2px 2px #8e918f);
`

const DIV2 = styled.div`
    margin: 40px;
    display: flex;
	flex-direction: column;
    text-align: left;
    flex: 1;
    padding: 20px;
`

const Price = styled.p`
    font-size: 30px;
    margin-bottom: 20px;
`

const Quantity = styled.p`
    margin: 0px 0px 25px 0px;
    font-size: 20px;
    // padding: 15px;
`

const Seller = styled.p`
    font-size: 20px;
    color: #808080;
`

const Hr = styled.hr`
    border: 0;
    height: 1px;
    background-color: #ccc; // You can change the color as needed
    margin: 10px 0; // Adjust spacing around the line
`;

const Description = styled.p`
    font-size: 20px;
    margin-top: 70px;
    letter-spacing: 1px;
    line-height: 2.5rem;
`

const Button = styled.button`
    width: 700px;
    height: 50px;
    border-radius: 10px;
    border: solid 1.2px #000000;
    box-sizing: border-box;
    text-decoration: none;
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    background-color: #254232;
    color: #fff;
    font-size: 25px;
    margin-top: 100px;
`