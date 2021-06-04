import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Home1SliderBar from './Home1SliderBar'
// import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import { Link } from 'react-router-dom'
import { BannerArea, Home1Styled } from './home1Element'
import { ProductOfferSlider } from './ProductOfferSlider'
import Home1ProductSlider from './Home1ProductSlider'

const Home1 = () => {
    return (
        <Home1Styled className="home3-product home4-product-area">
            <Container>
                <Row>
                    <Col lg="3" className="order-1 order-lg-2">
                        <div className="left-side-wrapper">
                            <Home1SliderBar />
                        </div>
                        <BannerArea className="banner-area">
                            <div className="single-banner mt-5">
                                <Link to="/"><img src="./img/banner/banner4-4.jpg" alt="banner" className="img-fluid" /></Link>
                            </div>
                        </BannerArea>
                    </Col>
                    <Col lg="9" className="order-2 order-lg-1">
                        <Row className="mt-5">
                            <Col xs="12">
                                <div className="single-shipping single-shipping-last single-delivery">
                                    <div className="block-wrapper">
                                        <div className="shipping-content">
                                            <h5 className="ship-title">Free Delivery</h5>
                                            <p>Free shipping on all order</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-shipping single-shipping-last single-delivery">
                                    <div className="block-wrapper2">
                                        <div className="shipping-content">
                                            <h5 className="ship-title">Online Support 24/7</h5>
                                            <p>Free shipping on all order</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-shipping single-shipping-last single-delivery">
                                    <div className="block-wrapper3">
                                        <div className="shipping-content">
                                            <h5 className="ship-title">Money Return</h5>
                                            <p>Free shipping on all order</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <ProductOfferSlider/>

                        <Home1ProductSlider/>

                        <BannerArea className="banner-area d-flex justify-content-center align-content-center">
                            <div className="single-banner mt-5">
                                <Link to="/"><img src="./img/banner/banner2-4.png" alt="banner" className="img-fluid" /></Link>
                            </div>
                        </BannerArea>
                    </Col>
                </Row>
            </Container>
        </Home1Styled>
    )
}

export default Home1