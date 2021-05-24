import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaHeart, FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn, FaRegEnvelopeOpen } from 'react-icons/fa'
import { ImYoutube2 } from 'react-icons/im'
import { Link } from 'react-router-dom'
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
    WidgetsContainerh6,
    WCLineHeight,
    FooterMenuA,
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

const MyFooterList = (props) => {
    const FooterMenuItem = (props) => props.list.map((data, index) => <WCLineHeight key={index}><FooterMenuA to="/about.html">{data}</FooterMenuA></WCLineHeight>)

    const FooterMenuList = (props) => <div className="footer_menu"><ul><FooterMenuItem list={props.list} /></ul></div>

    const MyFooterItem = (props) => (
        <Col lg={3} md={3}>
            <div className="widgets_container">
                <WidgetsContainerh6>{props.footerList.menuName}</WidgetsContainerh6>
                <FooterMenuList list={props.footerList.list} />
            </div>
        </Col>
    )

    return <Row>{props.list.map((e, i) => <MyFooterItem key={i} footerList={e} />)}</Row>
}
const MyFooterBottom = () => (
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
)

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
                                <Link to="/index-4.html"><img src="./pos-circle-logo.jpg" alt="" /></Link>
                            </FooterLogo>
                            <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram.</p>
                            <Address>
                                <p><strong>Address:</strong> 123 Main Street, Anytown, CA 12345 USA.</p>
                                <p><strong>Number Phone:</strong> (800) 123 456 - (800) 123 456.</p>
                                <p><strong>Address Email:</strong> support@circleshop.com</p>
                            </Address>
                            <ul className="d-flex">
                                <li><FooterSocialFaceB to="/" style={{ height: '40px', width: '40px' }}><FaFacebookF color="#ffffff" size="1.5rem" /></FooterSocialFaceB></li>
                                <li><FooterSocialTwt to="/" style={{ height: '40px', width: '40px' }}><FaTwitter color="#ffffff" size="1.5rem" /></FooterSocialTwt></li>
                                <li><FooterSocialYt to="/" style={{ height: '40px', width: '40px' }}><ImYoutube2 color="#ffffff" size="1.5rem" /></FooterSocialYt></li>
                                <li><FooterSocialGPlus to="/" style={{ height: '40px', width: '40px' }}><FaGooglePlusG color="#ffffff" size="1.5rem" /></FooterSocialGPlus></li>
                                <li><FooterSocialLink to="/" style={{ height: '40px', width: '40px' }}><FaLinkedinIn color="#ffffff" size="1.5rem" /></FooterSocialLink></li>
                            </ul>
                        </Col>
                        <Col lg={8}>
                            <MyFooterList list={FooterMenuDB} />
                            <Row>
                                <Col lg={12}>
                                    <WidgetBosClass />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </FooterTop>
            
            <MyFooterBottom />
        </FooterClass>
    )
}

export default Footer