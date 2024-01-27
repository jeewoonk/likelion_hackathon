import React, { useState } from 'react';
import styled from "styled-components";
import { useNavigate, useLocation } from 'react-router-dom';
import ItemDetail from './ItemDetail';

import freshData from '../data/freshData';
import processedData from '../data/processedData';
import essentialData from '../data/essentialData';

const ItemList = () => {
	const navigate = useNavigate();
    // const navigateItem = () => {
    //     navigate("/category/{itemid}")
    // }
    const navigateItem = (itemId) => {
        navigate(`/item/${itemId}`, {state: {itemId: {itemId}}}); // Navigate to the item details page
    };

    const location = useLocation();
    const [categoryID, setcategoryID] = useState(
        location.state?.categoryID
      );
    // console.log(categoryID);

    // const [selectedItem, setSelectedItem] = useState(null);
    // const [modalIsOpen, setModalIsOpen] = useState(false);
    // const openModal = (item) => {
    //     setSelectedItem(item);
    //     setModalIsOpen(true);
    // };
    const [selectedItem, setSelectedItem] = useState(null);

    
    switch (categoryID) {
        case 'fresh':
            return (
                <div>
                    <H1> Fresh Produced Food </H1>
                    <H2> 
                        fresh produce explanation fresh produce explanation fresh produce explanation
                    </H2>
                    <ItemListContainer>
                        {freshData.map(item => (
                            <ItemContainer key={item.foodid}
                            onClick={() => navigateItem(item.foodid)}>
                            {/* onClick={() => navigate("/category/fresh/itemid=1", {state: {itemID: 1}})}> */}
                            {/* onClick={() => navigate("/category/fresh/${item.foodid}")}> */}
                                <Image src={item.image} />
                                <H3>{item.title}</H3>
                                <P>Price: ${item.price}</P>
                            </ItemContainer>
                        ))}
                    </ItemListContainer>

                    {/* <ItemDetail 
                        item={selectedItem} 
                        isOpen={modalIsOpen} 
                        onRequestClose={() => setModalIsOpen(false)} 
                    /> */}
                    {/* {selectedItem && <ItemDetail item={selectedItem} />} */}
                </div>
            );      
        case 'processed':
            // title = 'Processed Food';
            // data = processedData;
            return (
                <div>
                    <H1> Processed Food </H1>
                    <H2> 
                        processed food explanation processed food explanation processed food explanation 
                    </H2>
                    <ItemListContainer>
                        {processedData.map(item => (
                            <ItemContainer key={item.foodid}>
                                <Image src={item.image} />
                                <H3>{item.title}</H3>
                                <p>Price: ${item.price}</p>
                            </ItemContainer>
                        ))}
                    </ItemListContainer>
                </div>
            );      
        case 'essential':
            // title = 'Home Good Essentials';
            // data = essentialData;
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

    // return (
    //     <div>
    //         <H1> {title} </H1>
    //         <ItemListContainer>
    //             {data.map(item => (
    //                 <ItemContainer key={item.foodid}>
    //                     <Image src={item.image} />
    //                     <h3>{item.title}</h3>
    //                     <p>Price: ${item.price}</p>
    //                 </ItemContainer>
    //             ))}
    //         </ItemListContainer>
    //     </div>
    // );      
};

export default ItemList;

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
    margin: 20px;
`

const ItemListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
`;

const ItemContainer = styled.div`
    flex: 0 0 calc(23% - 40px);
    // border: 1px solid #ddd;
    padding: 10px;
    text-align: left;
    // box-sizing: border-box;
    // padding: px;
`;

const H3 = styled.h3`
    padding: 3px 0px 0px 30px;
`

const P = styled.p`
    padding: 3px 0px 0px 30px;
`

const Image = styled.img`
    width: 210px;
    height: 210px;
	border-radius: 10px;
    display: block;
    margin: 0 auto;
`;
