import React from 'react'
import './Header.css'
import { ReactComponent as Logo } from '../assets/GCNLogoTxtRed.svg'
import FacebookIcon from '../assets/IconCrc_Facebook.png'
import TwitterIcon from '../assets/IconCrc_Twitter.png'
import InstagramIcon from '../assets/IconCrc_Instagram.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from "@fortawesome/free-brands-svg-icons"   

function Header() {
    return (
        <div className='header'>
            <div className="header__top">
                <div className="logo">
                    <Logo />
                </div>
                <div className="header-links">
                    <span>Events</span>
                    <span>Club</span>
                    <span>Shop</span>
                </div>
            </div>
            <div className="header__burger-menu">
                <div className="header__burger-btn">
                    <div className="hamburger">
                        <span className="line line-1"></span>
                        <span className="line line-2"></span>
                        <span className="line line-3"></span>
                    </div>
                </div>
                <ul className="social-links">
                    <li>
                        <a href="/"><img src={FacebookIcon} alt="facebook-icon"/></a>
                    </li>
                    <li>
                        <a href="/"><img src={TwitterIcon} alt="twitter-icon"/></a>
                    </li>
                    <li>
                        <a href="/"><img src={InstagramIcon} alt="instagram-icon"/></a>
                    </li>
                    <li>
                        <a href="/"><FontAwesomeIcon icon={faYoutube}/></a>
                    </li>
                </ul>
            </div>
            <div className="header__dropdownMenu">
                <ul className="dropdownMenu-items">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">GCN Show</a>
                    </li>
                    <li>
                        <a href="/">How to</a>
                    </li>
                    <li>
                        <a href="/">Maintance</a>
                    </li>
                    <li>
                        <a href="/">Ask GCN</a>
                    </li>
                    <li>
                        <a href="/">Training</a>
                    </li>
                    <li>
                        <a href="/">Features</a>
                    </li>
                    <li>
                        <a href="/">Top 10s</a>
                    </li>
                    <li>
                        <a href="/">GCN Racing</a>
                    </li>
                    <li>
                        <a href="/">GCN Tech</a>
                    </li>
                    <li>
                        <a href="/">Presenters</a>
                    </li>
                    <li>
                        <a href="/">Conor Dunne</a>
                    </li>
                    <li>
                        <a href="/">Daniel Lloyd</a>
                    </li>
                    <li>
                        <a href="/">James Lowsley-Williams</a>
                    </li>
                    <li>
                        <a href="/">Jon Cannings</a>
                    </li>
                    <li>
                        <a href="/">Manon Lloyd</a>
                    </li>
                    <li>
                        <a href="/">Oliver Bridgewood</a>
                    </li>
                    <li>
                        <a href="/">Simon Richardson</a>
                    </li>
                    <li>
                        <a href="/">Tom Last</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header
