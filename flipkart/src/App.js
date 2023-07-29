import Header from "./Header";
import card from "./card";
import { data } from './data';

import React from 'react';
import ClothesCards from './ClothesCards';
import './ClothesCards.css';


const App = () => {
  const clothesData = [
    {
      imageSrc: 'https://antnp.com/shop/image/cache/catalog/women%20fashion/one%20piece%20and%20dresses/AOF43EE/AOF43EE-brown-4x5-260x325.jpg',
      itemName: 'Cloth 1',
      itemDescription: 'Description of Clothes 1',
      realPrice: 50.00,
      offerPrice: 39.99,
    },
    {
      imageSrc: 'https://antnp.com/shop/image/cache/catalog/women%20fashion/one%20piece%20and%20dresses/AOF43FE/AOF43FE-green-4x5-260x325.jpg',
      itemName: 'Cloth 2',
      itemDescription: 'Description of Clothes 2',
      realPrice: 60.00,
      offerPrice: 49.99,
    },
    {
      imageSrc: 'https://antnp.com/shop/image/cache/catalog/women%20fashion/one%20piece%20and%20dresses/AOF4356/AOF4356-blue-lg-260x325.jpg',
      itemName: 'Cloth 3',
      itemDescription: 'Description of Clothes 2',
      realPrice: 60.00,
      offerPrice: 49.99,
    },
    {
      imageSrc: 'https://static.fibre2fashion.com/MemberResources/LeadResources/1/2022/6/Buyer/22203153/Images/22203153_0_one-piece-dress.jpg',
      itemName: 'Cloth 4',
      itemDescription: 'Description of Clothes 2',
      realPrice: 60.00,
      offerPrice: 49.99,
    },
    {
      imageSrc: 'https://tiimg.tistatic.com/fp/1/007/690/western-polyester-one-piece-dress-for-casual-and-party-wear-777.jpg',
      itemName: 'Cloth 5',
      itemDescription: 'Description of Clothes 2',
      realPrice: 60.00,
      offerPrice: 49.99,
    },
    {
      imageSrc: 'https://rukminim1.flixcart.com/image/550/650/xif0q/dress/f/z/l/xxl-1901-sheetal-associates-original-imaghqxaq6zf5wmf.jpeg?q=90&crop=false',
      itemName: 'Cloth 6',
      itemDescription: 'Description of Clothes 2',
      realPrice: 60.00,
      offerPrice: 49.99,
    },
    {
      imageSrc: 'https://2.wlimg.com/product_images/bc-full/2022/8/10128111/watermark/ladies-blue-one-piece-dress-1650536170-6301031.jpeg',
      itemName: 'Cloth 7',
      itemDescription: 'Description of Clothes 2',
      realPrice: 60.00,
      offerPrice: 49.99,
    },
    {
      imageSrc: 'https://rukminim1.flixcart.com/image/550/650/xif0q/dress/f/z/l/xxl-1901-sheetal-associates-original-imaghqxaq6zf5wmf.jpeg?q=90&crop=false',
      itemName: 'Cloth 8',
      itemDescription: 'Description of Clothes 2',
      realPrice: 60.00,
      offerPrice: 49.99,
    },
    {
      imageSrc: 'https://2.wlimg.com/product_images/bc-full/2022/8/10128111/watermark/ladies-blue-one-piece-dress-1650536170-6301031.jpeg',
      itemName: 'Cloth 9',
      itemDescription: 'Description of Clothes 2',
      realPrice: 60.00,
      offerPrice: 49.99,
    },
    {
      imageSrc: 'https://antnp.com/shop/image/cache/catalog/women%20fashion/one%20piece%20and%20dresses/AOF43EE/AOF43EE-brown-4x5-260x325.jpg',
      itemName: 'Cloth 10',
      itemDescription: 'Description of Clothes 2',
      realPrice: 60.00,
      offerPrice: 49.99,
    },
    {
      imageSrc: 'https://2.wlimg.com/product_images/bc-full/2022/8/10128111/watermark/ladies-blue-one-piece-dress-1650536170-6301031.jpeg',
      itemName: 'Cloth 11',
      itemDescription: 'Description of Clothes 2',
      realPrice: 60.00,
      offerPrice: 49.99,
    },
    {
      imageSrc: 'https://tiimg.tistatic.com/fp/1/007/690/western-polyester-one-piece-dress-for-casual-and-party-wear-777.jpg',
      itemName: 'Cloth 12',
      itemDescription: 'Description of Clothes 2',
      realPrice: 60.00,
      offerPrice: 49.99,
    },
  ];

  return (
    <div className="hele">
       <Header />
  
    <div className="container">
       
      {clothesData.map((item, index) => (
        <ClothesCards
          key={index}
          imageSrc={item.imageSrc}
          itemName={item.itemName}
          itemDescription={item.itemDescription}
          realPrice={item.realPrice}
          offerPrice={item.offerPrice}
        />
      ))}
    </div>
    </div>
  );
};

export default App;