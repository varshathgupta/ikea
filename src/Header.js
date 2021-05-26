import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import MenuIcon from '@material-ui/icons/Menu';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';


function Header() {

    
    
    return (
        <nav className="header">
            <div className="header__right">
                <MenuIcon className="header__menu"/>
            </div>
                <Link to="/">
                    <img 
                        className="header__logo" 
                        src="https://www.ikea.com/nl/en/static/ikea-logo.f88b07ceb5a8c356b7a0fdcc9a563d63.svg"
                        alt=""
                    />
                </Link>
                <Link to="/products" className="header__pro">
                    <h4 className="header__title">Products</h4>
                </Link>
                <Link to="/rooms" className="header__pro">
                    <h4 className="header__title">Rooms</h4>
                </Link>
                <Link to="/rooms" className="header__pro">
                    <h4 className="header__title">Deals</h4>
                </Link>
            <div className="header__search">
                <input 
                    type="text" 
                    className="header__searchInput"
                    placeholder="What are you looking for?"    
                />
                    <CameraAltIcon className="header__cameraIcon"/> 
                    <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <Link to="/" className="header__link">
                    <div className="header__option">
                        {/* <span>Hello there</span> */}
                        <LocalShippingIcon/>
                    </div>
                </Link>

                

                 <Link to="/" className="header__link">
                    <div className="header__option">
                      
                        <FavoriteBorderIcon/>
                    </div>
                </Link> 
                <Link to="/" className="header__link">
                    <div className="header__option">
                      
                        <ShoppingBasketIcon/>
                    </div>
                </Link> 
                <Link to="/" className="header__link">
                    <div className="header__option">
                      
                        <PersonOutlineIcon/>
                    </div>
                </Link> 
                               
                
                
            </div>
            
        </nav>
        
            
       
    )
    return(
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                    <Link color="inherit" href="" >
                    Series
                    </Link>
                    
                    <Typography color="textPrimary">Billy Series</Typography>
                </Breadcrumbs>
    )
}

export default Header;
