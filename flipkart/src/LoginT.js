import React from 'react';
import "./LoginT.css";

const LoginT = () => {
  return (
    <div className="logint">
        <div className='logint__in'>
            <h2 className='new'>New Customer</h2>
            <h2 className='old'>Signup</h2>
        </div>
        <hr/>
        <div className='logint__in'>
            <p>My Profile</p>
        </div>
        <hr/>
        <div className='logint__in'>
            <p>Flipkart Plus</p>
        </div>
        <hr/>
        <div className='logint__in'>
            <p>Orders</p>
        </div>
        <hr/>
        <div className='logint__in'>
            <p>Wishlist</p>
        </div>
        <hr/>
        <div className='logint__in'>
            <p>Rewards</p>
        </div>
        <hr/>
        <div className='logint__in'>
            <p>Gift Cards</p>
        </div>
        <hr/>
    </div>
  )
}

export default LoginT;