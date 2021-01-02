import React, {useState} from 'react'
import './header.css'
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import Avatar from 'react-avatar';

function Header() {

    const [items, setItems] = useState(0);

    return (
        <div className="header">
            <div className="header__image">
                <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
                alt="amazon_logo"
                />    
            </div>

            <div className="header__search">
                <input type="text" placeholder=""/>
                <button><FaSearch/></button>
            </div>
            <div className="header__cart">
                <h4> {items}</h4>
                <p><FaShoppingCart /></p>
                
            </div>

            <div className="header__profile">
                <Avatar
                round={true}
                alt="AK"
                src="https://ksassets.timeincuk.net/wp/uploads/sites/55/2017/06/mrrobot_s2_cast_rami-malek2.jpg"
                size="55"
                /> 
            </div>
        </div>
    )
}

export default Header
