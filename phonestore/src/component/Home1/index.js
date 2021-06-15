import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Home1SliderBar from './Home1SliderBar'
// import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import { Link } from 'react-router-dom'
import { BannerArea, Home1Styled } from './home1Element'
import { ProductOfferSlider } from './ProductOfferSlider'
import Home1ProductSlider from './Home1ProductSlider'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { Home1ProductSliderCSS } from './Home1ProductSlider/Home1ProductSliderElement'
import { BlockTitle } from './Home1SliderBar/Home1SliderBarElement'

var data = require('./Home1ProductSlider/data.json')

const Home1 = () => {
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <FaAngleLeft
            {...props}
            className={
                "slick-prev slick-arrow" +
                (currentSlide === 0 ? " slick-disabled" : "")
            }
            aria-hidden="true"
            aria-disabled={currentSlide === 0 ? true : false}
        />
    );
    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <FaAngleRight
            {...props}
            className={
                "slick-next slick-arrow" +
                (currentSlide === slideCount - 1 ? " slick-disabled" : "")
            }
            aria-hidden="true"
            aria-disabled={currentSlide === slideCount - 1 ? true : false}
        />
    );

    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        nextArrow: <SlickArrowRight />,
        prevArrow: <SlickArrowLeft />,
        responsive: [{
            breakpoint: 0,
            settings: {
                slidesToShow: 1
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3
            }
        }]
    };
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

                        <ProductOfferSlider />

                        <Home1ProductSliderCSS className="mx-4">
                            <BlockTitle>
                                <h6>{data.title}</h6>
                            </BlockTitle>
                            <Home1ProductSlider data={data} settings={settings} />
                        </Home1ProductSliderCSS >
                        <BannerArea className="banner-area d-flex justify-content-center align-content-center">
                            <div className="single-banner mt-5">
                                <Link to="/"><img src="./img/banner/banner2-4.png" alt="banner" className="img-fluid" /></Link>
                            </div>
                        </BannerArea>
                    </Col>
                </Row>
            </Container>
        </Home1Styled >
    )
}

export default Home1