import React from 'react';
// import template from '../data/images/image.jpg/';

const Item = ({ item }) => {
    return (
        <div className="item">
            <img src={item.image} />
            <h3>{item.title}</h3>
            <p>Price: ${item.price}</p>
            {/* Add more details as needed */}
        </div>
    );
};

export default Item;
