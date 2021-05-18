import React from 'react'
// eslint-disable-next-line
import { Container, Row, Col } from 'react-bootstrap'
import { FooterClass, FooterBottom, FooterLogo, FooterTop, Address, WidgetBox, WidgetSingleBox, WidgetSingleBoxUl, NewsLetter, NewsLetterInner, NewsLetterEmailBox, NewsLetterBtn, NewsLetterForm } from './FooterElement'


const Footer = () => {
    return (
        <FooterClass>
            <NewsLetter>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <NewsLetterInner>
                                <i class="fa fa-envelope-open-o"></i>
                                <div class="newsletter-title">
                                    <h1 class="sign-title">Sign Up For Our Newsletter</h1>
                                    <p>Get e-mail updates about our latest shop and special offers.</p>
                                </div>
                            </NewsLetterInner>
                        </Col>
                        <Col lg={6}>
                            <NewsLetterForm>
                                <NewsLetterEmailBox></NewsLetterEmailBox>
                                <NewsLetterBtn>Subscribe</NewsLetterBtn>
                            </NewsLetterForm>
                        </Col>
                    </Row>
                </Container>
            </NewsLetter>
            <FooterTop>
                <Container>
                    <Row>
                        <Col lg={4}>
                            <FooterLogo>
                                <a href="index-4.html"><img src="./pos-circle-logo.jpg" alt="" /></a>
                            </FooterLogo>
                            <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.</p>
                            <Address>
                                <p><strong>Address:</strong> 123 Main Street, Anytown, CA 12345 USA.</p>
                                <p><strong>Number Phone:</strong> (800) 123 456 - (800) 123 456.</p>
                                <p><strong>Address Email:</strong> support@circleshop.com</p>
                            </Address>
                            {/* <ul class="d-flex">
                                    <li><a class="facebook" href="#"><i class="zmdi zmdi-facebook"></i></a></li>
                                    <li><a class="twitter" href="#"><i class="zmdi zmdi-twitter"></i></a></li>
                                    <li><a class="youtube" href="#"><i class="zmdi zmdi-youtube"></i></a></li>
                                    <li><a class="google" href="#"><i class="zmdi zmdi-google-plus"></i></a></li>
                                    <li><a class="linkedin" href="#"><i class="zmdi zmdi-linkedin"></i></a></li>
                                </ul> */}
                        </Col>
                        <Col lg={8}>
                            <Row>
                                <Col lg={3} md={3}>
                                    <div class="widgets_container">
                                        <h6>Information</h6>
                                        <div class="footer_menu">
                                            <ul>
                                                <li><a href="about.html">About Us</a></li>
                                                <li><a href="contact.html"> Contact us</a></li>
                                                <li><a href="#"> Privecy Policy</a></li>
                                                <li><a href="#">Terms & Conditions</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={3} md={3}>
                                    <div class="widgets_container">
                                        <h6>My Account</h6>
                                        <div class="footer_menu">
                                            <ul>
                                                <li><a href="#">My Account</a></li>
                                                <li><a href="#">Older History</a></li>
                                                <li><a href="#">Wishlist</a></li>
                                                <li><a href="#">Newslatter</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={3} md={3}>
                                    <div class="widgets_container">
                                        <h6>Find It Fast</h6>
                                        <div class="footer_menu">
                                            <ul>
                                                <li><a href="#">Desktop</a></li>
                                                <li><a href="#">Laptop & Mobile</a></li>
                                                <li><a href="#">Components</a></li>
                                                <li><a href="#">Terms & Conditions</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={3} md={3}>
                                    <div class="widgets_container">
                                        <h6>Customer Service</h6>
                                        <div class="footer_menu">
                                            <ul>
                                                <li><a href="#">Sitemap</a></li>
                                                <li><a href="#">My Account</a></li>
                                                <li><a href="#">Contact Us</a></li>
                                                <li><a href="#">Delivery Information</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12}>
                                    <WidgetBox>
                                        <WidgetSingleBox>
                                            <p><strong>Address:</strong></p>
                                            <WidgetSingleBoxUl>
                                                <li><a href="#">Order</a></li>
                                                <li><a href="#">Affiliate</a></li>
                                                <li><a href="#">Marketing</a></li>
                                                <li><a href="#">Sourcing</a></li>
                                                <li><a href="#">Gadgets</a></li>
                                                <li><a href="#">Accessories</a></li>
                                            </WidgetSingleBoxUl>
                                        </WidgetSingleBox>
                                        <WidgetSingleBox>
                                            <p><strong>Headphones:</strong></p>
                                            <WidgetSingleBoxUl>
                                                <li><a href="#">Beats</a></li>
                                                <li><a href="#">Headphone Bose</a></li>
                                                <li><a href="#">Headphone Nocx</a></li>
                                                <li><a href="#">Wireless</a></li>
                                                <li><a href="#">Headphone</a></li>
                                                <li><a href="#">Headphone Mini</a></li>
                                            </WidgetSingleBoxUl>
                                        </WidgetSingleBox>
                                        <WidgetSingleBox>
                                            <p><strong>Computers:</strong></p>
                                            <WidgetSingleBoxUl>
                                                <li><a href="#">Mini Laptops</a></li>
                                                <li><a href="#">Computers</a></li>
                                                <li><a href="#">Laptop Mouse</a></li>
                                                <li><a href="#">Laptop Pad</a></li>
                                                <li><a href="#">GB Laptop</a></li>
                                                <li><a href="#">XL Laptop</a></li>
                                            </WidgetSingleBoxUl>
                                        </WidgetSingleBox>
                                        <WidgetSingleBox>
                                            <p><strong>Camera:</strong></p>
                                            <WidgetSingleBoxUl>
                                                <li><a href="#">Lense Camera</a></li>
                                                <li><a href="#">Frame Camera</a></li>
                                                <li><a href="#">Box Camera</a></li>
                                                <li><a href="#">Mini Camera</a></li>
                                                <li><a href="#">XL Camera</a></li>
                                                <li><a href="#">Point shoot camera</a></li>
                                            </WidgetSingleBoxUl>
                                        </WidgetSingleBox>
                                    </WidgetBox>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </FooterTop>
            <FooterBottom>
                <Container>
                    <Row>
                        <Col md={12} lg={5}>
                            <p>© 2021 Copyright <strong>CIRCLESHOP</strong> Made With <i class="fa fa-heart text-danger"></i> by <a href="https://hasthemes.com/"> <strong>HasThemes</strong></a></p>
                        </Col>
                        <Col md={12} lg={7}>
                            <img src="./footerend.png" alt="" class="img-fluid" />
                        </Col>
                    </Row>
                </Container>
            </FooterBottom>
        </FooterClass>
    )
}

export default Footer