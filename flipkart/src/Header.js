import React from 'react';
import "./Header.css";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import MoreT from './MoreT';
import LoginT from './LoginT';
import 'tippy.js/themes/light.css';



const Header = () => {
  return (
    <div className="header">
      <div className="header__first">
        <img src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="flipkart logo" />
        <div className="header__first1">
          <span style={{
            fontSize:'11px',
            color:'white',
            fontStyle:'italic'
          }}>Explore</span>
          <span style={{
            color:'#f9e107',
            fontSize:'11px',
            fontStyle:'italics'
          }}>Plus</span>
          <span><img src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png" alt=""/></span>

        </div>
      </div>
      <div className="header__second">
        <input type='text' placeholder='Search for products'/>
      </div>
      <div className="header__third">
        <Tippy theme='light'
        content={<LoginT></LoginT>} interactive={true}>
            <button>Login</button>
        </Tippy>
        
      </div>
      <div className="header__fourth">
        <Tippy theme='light' content={<MoreT></MoreT>} interactive={true}>

        <span>More</span>
        </Tippy>
      </div>
      <div className="header__fifth">
        <p>Cart</p>
      </div>
    </div>
    
  )
}

export default Header