import React from 'react';
import './Header.css';
// import SearchIcon from '@material-ui/icons/Search';
// import AcUnitIcon from '@material-ui/icons/AcUnit';
// import { makeStyles } from "@material-ui/core/styles";
import Avatar from 'react-avatar';
import { FaSearch, FaHome, FaFlag } from 'react-icons/fa';
import {BsCollectionPlay} from 'react-icons/bs';
import {BiStore, BiUserCircle} from 'react-icons/bi';
import { useStateValue } from './StateProvider';
// import IconButton from '@material-ui/core/IconButton';
// import AddIcon from '@material-ui/core/icons/Add';

export default function Header() {
    const [{user}, dispatch] = useStateValue();
    return (
        <div className="header">
            <div className="header__left">
                <img 
                    src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"
                />
                
                <div className="header__input">
                    <div className="header__input__icon">
                        <FaSearch size="15" color="white"/>
                    </div>
                    
                    
                    <input 
                        type="text" 
                        placeholder="Search Here"
                    />
                </div>
            </div>

            <div className="header__center">
                <div className="header__icons
                header__icons--active">
                    <FaHome size='1.4em'  />
                </div>

                <div className="header__icons
                ">
                    <FaFlag size='1.4em' />
                </div>
                
                <div className="header__icons">
                    <BsCollectionPlay size='1.5em' />
                </div>

                <div className="header__icons">
                    <BiStore size='1.6em' color="white"/>
                </div>

                <div className="header__icons">
                    <BiUserCircle size='1.6em' />
                </div>
            </div>

            <div className="header__right">
                <div className="header__info">
                    <Avatar 
                        src={user.photoURL}
                        round="100px"
                        size="40"
                    />
                    <h4>{user.displayName}</h4>
                </div>

                {/* <IconButton>
                    <AddIcon />
                </IconButton> */}
            </div>
        </div>
    )
}
