import React from 'react';
import img from '../../../src/images/giphy.gif';

const PlaceOrder = () => {
    return (
        <div>
            <h1>You have placed your order!!</h1>
            <img src={img} alt="" />
        </div>
    );
};

export default PlaceOrder;