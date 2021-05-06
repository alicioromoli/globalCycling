import React from 'react'
import { ReactComponent as Logo } from'../assets/GCNLogo.svg'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'  
import { faFacebook } from "@fortawesome/free-brands-svg-icons"  
import { faTwitter } from "@fortawesome/free-brands-svg-icons" 
import { faInstagram } from "@fortawesome/free-brands-svg-icons"     

function Footer() {
    return (
        <div className="footer__wrapper">
            <div className="footer__top">
                <div className="footer__top-title">
                    <div className="footer-logo">
                        <Logo />
                    </div>
                    <div className="footer__social-links">
                        <ul className="footer__social-links">
                            <li>
                                <a href="/"><FontAwesomeIcon icon={faFacebook}/></a>
                            </li>
                            <li>
                                <a href="/"><FontAwesomeIcon icon={faTwitter}/></a>
                            </li>
                            <li>
                                <a href="/"><FontAwesomeIcon icon={faInstagram}/></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer__top-body">
                    <div className="footer__top-body-header">
                        <a href="/">See full archive</a>
                    </div>
                    <div className="footer__top-body-menu-list">
                        <a href="/">May 2021</a>
                        <a href="/">April 2021</a>
                        <a href="/">March 2021</a>
                        <a href="/">February 2021</a>
                        <a href="/">January 2021</a>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <ul className="footer__links">
                    <li>
                        <a href="mailto:info@playsportsnetwork.com">info@playsportsnetwork.com</a>
                    </li>
                    <li>
                        <a href="/">Home</a>
                        <span> | </span>
                    </li>
                    <li>
                        <a href="/">Editorial policy</a>
                        <span> | </span>
                    </li>
                    <li>
                        <a href="/">Privacy policy</a>
                        <span> | </span>
                    </li>
                    <li>
                        <a href="/">Cookie policy</a>
                        <span> | </span>
                    </li>
                    <li>
                        <a href="/">Terms and conditions</a>
                        <span> | </span>
                    </li>
                    <li>
                        <a href="/">YouTube Terms and conditions</a>
                        <span> | </span>
                    </li>
                    <li>
                        <a href="/">Promotion rules</a>
                    </li>
                    <li>
                        <a href="/">© 2021 Play Sports Network</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
