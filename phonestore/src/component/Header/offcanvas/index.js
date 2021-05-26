import React from 'react'
import { OffcanvasStyle } from './OffcanvasElement'
import { GiHamburgerMenu } from 'react-icons/gi'
import 'bootstrap/js/dist/offcanvas'
import { Link } from 'react-router-dom'
import { BiEnvelope } from 'react-icons/bi'
import { FaHeart, FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn, FaRegEnvelopeOpen } from 'react-icons/fa'
import {
    USD,
    Language
} from '../Dropdown';

const Offcanvas = () => {
    return (
        <OffcanvasStyle className="canvas-open">
            <button data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                <GiHamburgerMenu />
            </button>

            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="welcome_text text-center mb-10">
                        <p><span>Customer Service: </span> (800) 123 456 789</p>
                    </div>

                    <div className="box-right text-center mb-20">
                        <ul className="d-flex align-items-center justify-content-center">
                            <USD />
                            <Language />
                            <li className="settings">
                                <a href="compare.html">Compare (2)</a>
                            </li>
                        </ul>
                    </div>

                    <div className="widget-body">
                        <div className="widget-address text-center mb-20">
                            <p><strong>ADDRESS</strong></p>
                            <p>123 Main Street, Anytown <br /> CA 12345 USA.</p>
                            <p>(800) 123 456 - (800) 123 456.</p>
                        </div>
                    </div>

                    <div className="offcanvas-search-container my-4">
                        <form action="#">
                            <div className="search_box">
                                <input placeholder="Search entire store here ..." type="text" />
                                <button type="submit">Search</button>
                            </div>
                        </form>
                    </div>

                    <div class="offcanvas_menu_cover text-left">
                        <ul class="offcanvas_main_menu">
                            <li class="menu-item-has-children active"><span class="menu-expand"><i class="fa fa-angle-down"></i></span>
                                <Link to="/">Home</Link>
                            </li>
                            <li class="menu-item-has-children"><span class="menu-expand"><i class="fa fa-angle-down"></i></span>
                                <Link to="/">Shop</Link>
                            </li>
                            <li class="menu-item-has-children"><span class="menu-expand"><i class="fa fa-angle-down"></i></span>
                                <Link to="/">blog</Link>
                            </li>
                            <li class="menu-item-has-children">
                                <Link to="/">about Us</Link>
                            </li>
                            <li class="menu-item-has-children">
                                <Link to="/"> Contact Us</Link>
                            </li>
                        </ul>
                    </div>

                    <div class="offcanvas_footer">
                        <span><a href="#"><BiEnvelope /> info@yourdomain.com</a></span>
                        <div class="footer_social">
                            <ul className="d-flex">
                                <li><FooterSocialFaceB to="/" style={{ height: '40px', width: '40px' }}><FaFacebookF color="#ffffff" size="1.5rem" /></FooterSocialFaceB></li>
                                <li><FooterSocialTwt to="/" style={{ height: '40px', width: '40px' }}><FaTwitter color="#ffffff" size="1.5rem" /></FooterSocialTwt></li>
                                <li><FooterSocialYt to="/" style={{ height: '40px', width: '40px' }}><ImYoutube2 color="#ffffff" size="1.5rem" /></FooterSocialYt></li>
                                <li><FooterSocialGPlus to="/" style={{ height: '40px', width: '40px' }}><FaGooglePlusG color="#ffffff" size="1.5rem" /></FooterSocialGPlus></li>
                                <li><FooterSocialLink to="/" style={{ height: '40px', width: '40px' }}><FaLinkedinIn color="#ffffff" size="1.5rem" /></FooterSocialLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </OffcanvasStyle>
    )
}

export default Offcanvas
