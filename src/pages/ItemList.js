import React from 'react';
import './ItemList.css';
import Item from '../components/Item';
import freshData from '../data/freshData'; // Import your data

const ItemList = () => {
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
        <div className="item-list">
            {freshData.map(item => (
                <div key={item.foodid} className="item">
                    <img src={item.image} style={{ maxWidth: '100px', height: 'auto' }} />
                    <h3>{item.title}</h3>
                    <p>Price: ${item.price}</p>
                    {/* Add more details as needed */}
                </div>
            ))}
        </div>
    );
};

export default ItemList;
