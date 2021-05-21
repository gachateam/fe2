import React from 'react'
// eslint-disable-next-line
import { Container, Row, Col } from 'react-bootstrap'
import { FaHeart, FaFacebookSquare, FaTwitterSquare, FaGooglePlusSquare, FaLinkedin, FaEnvelopeOpen } from 'react-icons/fa'
import { ImYoutube2 } from 'react-icons/im'
import { FooterClass, FooterBottom, FooterLogo, FooterTop, Address, WidgetBox, WidgetSingleBox, WidgetSingleBoxUl, NewsLetter, NewsLetterInner, NewsLetterEmailBox, NewsLetterBtn, NewsLetterForm, FooterSocial, WidgetsContainerh6, WCLineHeight, FooterMenuA, WidgetSingleBoxA, SignTitle, NewsLetterTitle, HasThemes } from './FooterElement'
import FooterWGSingleBoxDB from './FooterWGSingleBoxDB'
import FooterMenuDB from './FooterMenuDB'


const Footer = () => {
    return (
        <FooterClass>
            <NewsLetter>
                <Container>
                    <Row style={{ alignItems: "center" }}>
                        <Col lg={6}>
                            <NewsLetterInner>
                                <FaEnvelopeOpen color="white" size="3.8rem" />
                                <NewsLetterTitle>
                                    <SignTitle>Sign Up For Our Newsletter</SignTitle>
                                    <p style={{ color: "#ffffff" }}>Get e-mail updates about our latest shop and special offers.</p>
                                </NewsLetterTitle>
                            </NewsLetterInner>
                        </Col>
                        <Col lg={6}>
                            <NewsLetterForm>
                                <NewsLetterEmailBox placeholder="Enter your email"></NewsLetterEmailBox>
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
                            <ul className="d-flex">
                                <li><FooterSocial><FaFacebookSquare color="#448ccb" size="2.5rem" /></FooterSocial></li>
                                <li><FooterSocial><FaTwitterSquare color="#00bff3" size="2.5rem" /></FooterSocial></li>
                                <li><FooterSocial><ImYoutube2 color="#d02d2d" size="2.5rem" /></FooterSocial></li>
                                <li><FooterSocial><FaGooglePlusSquare color="#f85858" size="2.5rem" /></FooterSocial></li>
                                <li><FooterSocial><FaLinkedin color="#555555" size="2.5rem" /></FooterSocial></li>
                            </ul>
                        </Col>
                        <Col lg={8}>
                            <Row>
                                <Col lg={3} md={3}>
                                    <div className="widgets_container">
                                        <WidgetsContainerh6>Information</WidgetsContainerh6>
                                        <div className="footer_menu">
                                            <ul>
                                                <WCLineHeight><FooterMenuA href="about.html">About Us</FooterMenuA></WCLineHeight>
                                                <WCLineHeight><FooterMenuA href="contact.html">Contact us</FooterMenuA></WCLineHeight>
                                                <WCLineHeight><FooterMenuA href="#">Privecy Policy</FooterMenuA></WCLineHeight>
                                                <WCLineHeight><FooterMenuA href="#">Terms & Conditions</FooterMenuA></WCLineHeight>
                                            </ul>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={3} md={3}>
                                    <div className="widgets_container">
                                        <WidgetsContainerh6>My Account</WidgetsContainerh6>
                                        <div className="footer_menu">
                                            <ul>
                                                {FooterMenuDB.map(m => {
                                                    return (
                                                        <WCLineHeight><FooterMenuA href="#">{m.myaccount}</FooterMenuA></WCLineHeight>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={3} md={3}>
                                    <div className="widgets_container">
                                        <WidgetsContainerh6>Find It Fast</WidgetsContainerh6>
                                        <div className="footer_menu">
                                            <ul>
                                                {FooterMenuDB.map(m => {
                                                    return (
                                                        <WCLineHeight><FooterMenuA href="#">{m.finditfast}</FooterMenuA></WCLineHeight>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={3} md={3}>
                                    <div className="widgets_container">
                                        <WidgetsContainerh6>Customer Service</WidgetsContainerh6>
                                        <div className="footer_menu">
                                            <ul>
                                                {FooterMenuDB.map(m => {
                                                    return (
                                                        <WCLineHeight><FooterMenuA href="#">{m.customservice}</FooterMenuA></WCLineHeight>
                                                    )
                                                })}
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
                                                {FooterWGSingleBoxDB.map(d => {
                                                    return (
                                                        <li><WidgetSingleBoxA href="#">{d.address}</WidgetSingleBoxA></li>
                                                    )
                                                })}
                                            </WidgetSingleBoxUl>
                                        </WidgetSingleBox>
                                        <WidgetSingleBox>
                                            <p><strong>Headphones:</strong></p>
                                            <WidgetSingleBoxUl>
                                                {FooterWGSingleBoxDB.map(d => {
                                                    return (
                                                        <li><WidgetSingleBoxA href="#">{d.headphone}</WidgetSingleBoxA></li>
                                                    )
                                                })}
                                            </WidgetSingleBoxUl>
                                        </WidgetSingleBox>
                                        <WidgetSingleBox>
                                            <p><strong>Computers:</strong></p>
                                            <WidgetSingleBoxUl>
                                                {FooterWGSingleBoxDB.map(d => {
                                                    return (
                                                        <li><WidgetSingleBoxA href="#">{d.computers}</WidgetSingleBoxA></li>
                                                    )
                                                })}
                                            </WidgetSingleBoxUl>
                                        </WidgetSingleBox>
                                        <WidgetSingleBox>
                                            <p><strong>Camera:</strong></p>
                                            <WidgetSingleBoxUl>
                                                {FooterWGSingleBoxDB.map(d => {
                                                    return (
                                                        <li><WidgetSingleBoxA href="#">{d.camera}</WidgetSingleBoxA></li>
                                                    )
                                                })}
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
                            <p>© 2021 Copyright <strong>CIRCLESHOP</strong> Made With <FaHeart color='red' /> by <HasThemes href="https://hasthemes.com/"><strong>HasThemes</strong></HasThemes></p>
                        </Col>
                        <Col md={12} lg={7}>
                            <img src="./footerend.png" alt="" className="img-fluid" />
                        </Col>
                    </Row>
                </Container>
            </FooterBottom>
        </FooterClass>
    )
}

export default Footer