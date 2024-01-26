import React from 'react';
import { useState } from 'react';
import styled from "styled-components";
import { useNavigate, useLocation } from 'react-router-dom';

import freshData from '../data/freshData';
import processedData from '../data/processedData';
import essentialData from '../data/essentialData';

const Item = () => {
	const navigate = useNavigate();
    const location = useLocation();

    const [itemID, setitemID] = useState(
        location.state?.itemID
      );
    
    const navigateItem = () => {
        navigate("/category/fresh/{itemid}")
    }
    
    switch (itemID) {
        case 'fresh':
            return (
                <div>
                    <H1> Fresh Produced Food </H1>
                    <ItemListContainer>
                        {freshData.map(item => (
                            <ItemContainer key={item.foodid}
                            onClick={() => navigate("/category/fresh/itemid=1")}>
                            {/* onClick={() => navigate("/category/fresh/${item.foodid}")}> */}
                                <Image src={item.image} />
                                <h3>{item.title}</h3>
                                <p>Price: ${item.price}</p>
                            </ItemContainer>
                        ))}
                    </ItemListContainer>
                </div>
            );      
        case 'processed':
            return (
                <div>
                    <H1> Processed Food </H1>
                    <ItemListContainer>
                        {processedData.map(item => (
                            <ItemContainer key={item.foodid}>
                                <Image src={item.image} />
                                <h3>{item.title}</h3>
                                <p>Price: ${item.price}</p>
                            </ItemContainer>
                        ))}
                    </ItemListContainer>
                </div>
            );      
        case 'essential':
            return (
                <div>
                    <H1> Home Good Essentials </H1>
                    <ItemListContainer>
                        {essentialData.map(item => (
                            <ItemContainer key={item.foodid}>
                                <Image src={item.image} />
                                <h3>{item.title}</h3>
                                <p>Price: ${item.price}</p>
                            </ItemContainer>
                        ))}
                    </ItemListContainer>
                </div>
            );      
    }
};

export default Item;

const H1 = styled.h1`
    font-size: 45px;
    margin: 20px;
    letter-spacing: 0.4px;
    font-weight: 600;
    justify-content: center;
    text-align: center;
`
const H2 = styled.h2`
    font-size: 20px;
    font-weight: 300;
    font-color: #A5A5A5;
    text-align: center;
`

const ItemListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 3px;
`;

const ItemContainer = styled.div`
    flex: 0 0 calc(25% - 35px);
    // border: 1px solid #ddd;
    padding: 10px;
    text-align: center;
    box-sizing: border-box;
`;

const Image = styled.img`
    width: 210px;
    height: 210px;
	border-radius: 10px;
    display: block;
    margin: 0 auto;
`;
