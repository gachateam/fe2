import React from 'react'
// eslint-disable-next-line
import { Container, Row, Col } from 'react-bootstrap'
import { FaHeart, FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn, FaRegEnvelopeOpen} from 'react-icons/fa'
import { ImYoutube2 } from 'react-icons/im'
import { 
    FooterClass, 
    FooterBottom, 
    FooterLogo, 
    FooterTop, 
    Address, 
    NewsLetter, 
    NewsLetterInner, 
    NewsLetterEmailBox, 
    NewsLetterBtn, 
    NewsLetterForm, 
    FooterSocial, 
    WidgetsContainerh6, 
    WCLineHeight, 
    FooterMenuA, 
    WidgetSingleBoxA, 
    SignTitle, 
    NewsLetterTitle, 
    HasThemes,
    FooterSocialFaceB,
    FooterSocialTwt,
    FooterSocialYt,
    FooterSocialGPlus,
    FooterSocialLink
} from './FooterElement'
import FooterMenuDB from './FooterMenuDB'
import WidgetBosClass from './Database'


const Footer = () => {


    return (
        <FooterClass>
            <NewsLetter>
                <Container>
                    <Row style={{ alignItems: "center" }}>
                        <Col lg={6}>
                            <NewsLetterInner>
                                <FaRegEnvelopeOpen color="white" size="3.8rem" />
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
                                <li><FooterSocialFaceB style={{height: '40px', width: '40px'}}><FaFacebookF color="#ffffff" size="1.5rem"/></FooterSocialFaceB></li>
                                <li><FooterSocialTwt style={{height: '40px', width: '40px'}}><FaTwitter color="#ffffff" size="1.5rem"/></FooterSocialTwt></li>
                                <li><FooterSocialYt style={{height: '40px', width: '40px'}}><ImYoutube2 color="#ffffff" size="1.5rem"/></FooterSocialYt></li>
                                <li><FooterSocialGPlus style={{height: '40px', width: '40px'}}><FaGooglePlusG color="#ffffff" size="1.5rem"/></FooterSocialGPlus></li>
                                <li><FooterSocialLink style={{height: '40px', width: '40px'}}><FaLinkedinIn color="#ffffff" size="1.5rem"/></FooterSocialLink></li>
                            </ul>
                        </Col>
                        <Col lg={8}>
                            <Row>
                                <Col lg={3} md={3}>
                                    <div className="widgets_container">
                                        <WidgetsContainerh6>Information</WidgetsContainerh6>
                                        <div className="footer_menu">
                                            <ul>
                                                <WCLineHeight><FooterMenuA to="about.html">About Us</FooterMenuA></WCLineHeight>
                                                <WCLineHeight><FooterMenuA to="contact.html">Contact us</FooterMenuA></WCLineHeight>
                                                <WCLineHeight><FooterMenuA to="#">Privecy Policy</FooterMenuA></WCLineHeight>
                                                <WCLineHeight><FooterMenuA to="#">Terms & Conditions</FooterMenuA></WCLineHeight>
                                            </ul>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={3} md={3}>
                                    <div className="widgets_container">
                                        <WidgetsContainerh6>My Account</WidgetsContainerh6>
                                        <div className="footer_menu">
                                            <ul>
                                                {FooterMenuDB.map((m,i) => {
                                                    return (
                                                        <WCLineHeight key={i}><FooterMenuA to="#">{m.myaccount}</FooterMenuA></WCLineHeight>
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
                                                {FooterMenuDB.map((m,i) => {
                                                    return (
                                                        <WCLineHeight key={i}><FooterMenuA to="#">{m.finditfast}</FooterMenuA></WCLineHeight>
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
                                                {FooterMenuDB.map((m,i) => {
                                                    return (
                                                        <WCLineHeight key={i}><FooterMenuA to="#">{m.customservice}</FooterMenuA></WCLineHeight>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12}>
                                    <WidgetBosClass />
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
                            <p>© 2021 Copyright <strong>CIRCLESHOP</strong> Made With <FaHeart color='red' /> by <HasThemes to="https://hasthemes.com/"><strong>HasThemes</strong></HasThemes></p>
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