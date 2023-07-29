import React from 'react';

const ClothesCard = ({ imageSrc, itemName, itemDescription, realPrice, offerPrice }) => {
  return (
    <div className="card">
      <img className="item-image" src={imageSrc} alt={itemName} />
      <div className="item-name">{itemName}</div>
      <div className="item-description">{itemDescription}</div>
      <div className="price">
        <span className="real-price">${realPrice}</span>
        <span className="offer-price">${offerPrice}</span>
      </div>
    </div>
  );
};

export default ClothesCard;