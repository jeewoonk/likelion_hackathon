import React from 'react';
// import './ItemList.css';
import styled from "styled-components";
import freshData from '../data/freshData';
import { useNavigate } from 'react-router-dom';

const ItemList = () => {
	const navigate = useNavigate();

    // return (
    //     <div className="item-list">
    //         {freshData.map(item => (
    //             <Item key={item.id} item={item} />
    //         ))}
    //     </div>
    // );

    // return (
    //     <div>
    //         <div className='item-list'>
    //             <h1>신선 식품</h1>
    //         </div>

    //         <div className='item-wrapper'>
    //             {freshData.map(item => (
    //                 <Item key={item.id} item={item} />
    //             ))}
    //         </div>
    //     </div>
        
    // );
    
    return (
        <div>
            <H1> FRESH </H1>
            <ItemListContainer>
                {freshData.map(item => (
                    <ItemContainer key={item.foodid}>
                        {/* <Image src={item.image} /> */}
                        <Image src={'potato.jpeg'} />
                        <h3>{item.title}</h3>
                        <p>Price: ${item.price}</p>
                        {/* Add more details as needed */}
                    </ItemContainer>
                ))}
            </ItemListContainer>
        </div>
        
    );
};

export default ItemList;

const H1 = styled.h1`
    font-size: 50px;
    margin: 0px;
    letter-spacing: -0.4px;
    font-weight: 800;
    justify-content: center;
    text-align: center;
`

const ItemListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
`;

const ItemContainer = styled.div`
    flex: 0 0 calc(25% - 20px);
    border: 1px solid #ddd;
    padding: 10px;
    text-align: center;
    box-sizing: border-box;
`;

const Image = styled.img`
    max-width: 100px;
    height: auto;
    display: block;
    margin: 0 auto;
`;
