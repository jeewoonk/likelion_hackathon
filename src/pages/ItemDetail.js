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
    // console.log(itemId);
    // console.log(freshData);
    const item = freshData.find(freshData => freshData.foodid === itemId.itemId);

    // console.log(item);
    if (!item) {
        return <p>Item not found</p>; // Or any other error handling
    }

    return (
        <React.Fragment>
            <Header></Header>
            <DetailsContainer>
                <h2>{item.title}</h2>
                <img src={item.image} style={{ maxWidth: '200px', height: 'auto' }} />
                <p>Price: ${item.price}</p>
                {/* Add more details as needed */}
            </DetailsContainer>
        </React.Fragment>
    );
};

export default ItemDetails;

const DetailsContainer = styled.div`
    /* Add styles for your details container */
    margin-top: 20px;
    border: 1px solid #ddd;
    padding: 10px;
    text-align: center;
    font-family: NanumSquareNeo;
`;
