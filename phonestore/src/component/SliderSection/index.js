import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CustomSlick from '../CustomSlick';
import { Link } from 'react-router-dom'
import { SliderSectionCSS } from './SliderSectionElement'
import { BannerArea } from '../Home1/home1Element'

const SliderSection = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };
    return (
        <SliderSectionCSS className="slider-section">
            <Container>
                <Row>
                    <Col md={12} lg={9}>
                        <CustomSlick settings={settings}>
                            <div>
                                <div className="single-slider slick-slide">
                                    <img src="./img/slider/slider4-1.png" alt="hinh1" className="img-fluid" />
                                    <div className="slider-content color_two">
                                        <h5>The Xbox One S <br /> Trend</h5>
                                        <h2>Weeky <br /> Deals! Outlet</h2>
                                        <div className="pt-des">
                                            <p><span>25%</span>Starting at <span>$340.00</span></p>
                                        </div>
                                        <Link to="shop.html">Shop Now</Link>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="single-slider slick-slide">
                                    <img src="./img/slider/slider4-2.png" alt="hinh1" className="img-fluid" />
                                    <div className="slider-content color_two">
                                        <h5>Samsung Brands<br /> Trend</h5>
                                        <h2>Bestseller <br /> Washing Machines</h2>
                                        <div className="pt-des">
                                            <p><span>35%</span>Starting at <span>$120.00</span></p>
                                        </div>
                                        <Link to="shop.html">Shop Now</Link>
                                    </div>
                                </div>
                            </div>
                        </CustomSlick>
                    </Col>
                    <Col md={12} lg={3}>
                    <Row className="right-side-banner text-center">
                        <Col md={4} lg={12}>
                            <BannerArea className="banner-area" style={{width: "100%"}}>
                                <div className="single-banner banner-top">
                                    <Link to="#"><img src="img/banner/banner-right-1.png" alt="" className="img-fluid"/></Link>
                                </div>
                            </BannerArea>
                        </Col>
                        <Col md={4} lg={12}>
                            <BannerArea className="banner-area mt-20" style={{width: "100%"}}>
                                <div className="single-banner" style={{marginTop: "20px"}}>
                                    <Link to="#"><img src="img/banner/banner-right-2.png" alt="" className="img-fluid"/></Link>
                                </div>
                            </BannerArea>
                        </Col>
                        <Col md={4} lg={12}>
                            <BannerArea className="banner-area mt-20" style={{width: "100%"}}>
                                <div className="single-banner" style={{marginTop: "20px"}}>
                                    <Link to="#"><img src="img/banner/banner-right-3.png" alt="" className="img-fluid"/></Link>
                                </div>
                            </BannerArea>
                        </Col>
                    </Row>
                    </Col>
                </Row>
            </Container>
        </SliderSectionCSS>
    )
}

export default SliderSection