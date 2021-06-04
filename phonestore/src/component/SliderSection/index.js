import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CustomSlick from '../CustomSlick';
import { Link } from 'react-router-dom'
import { SliderSectionC } from './SliderSectionElement'

const SliderSection = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        // variableWidth: true
    };
    return (
        <SliderSectionC className="slider_section">
            <Container>
                <Row>
                    <Col md={12} lg={9}>
                        <CustomSlick settings={settings}>
                            <div className="single-slider">
                                <img src="./slider4-1.png" alt="" className="img-fluid" />
                                <div className="slider_content">
                                    <h5>The Xbox One S <br /> Trend</h5>
                                    <h2>Weeky <br /> Deals! Outlet</h2>
                                    <div className="pt-des">
                                        <p><span>25%</span>Starting at <span>$340.00</span></p>
                                    </div>
                                    <Link href="shop.html">Shop Now</Link>
                                </div>
                            </div>

                            <div className="single-slider">
                                <img src="./slider4-2.png" alt="" className="img-fluid" />
                                <div className="slider_content">
                                    <h5>Samsung Brands<br /> Trend</h5>
                                    <h2>Bestseller <br /> Washing Machines</h2>
                                    <div className="pt-des">
                                        <p><span>35%</span>Starting at <span>$120.00</span></p>
                                    </div>
                                    <Link href="shop.html">Shop Now</Link>
                                </div>

                            </div>
                        </CustomSlick>
                    </Col>
                    <Col md={12} lg={3}>
                    <div class="right-side-banner text-center row">
                        <div class="col-lg-12 col-md-4">
                            <div class="banner-area">
                                <div class="single-banner banner-top">
                                    <a href="#"><img src="img/banner/banner-right-1.png" alt="" class="img-fluid"/></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 col-md-4">
                            <div class="banner-area mt-20">
                                <div class="single-banner">
                                    <a href="#"><img src="img/banner/banner-right-2.png" alt="" class="img-fluid"/></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 col-md-4">
                            <div class="banner-area mt-20">
                                <div class="single-banner">
                                    <a href="#"><img src="img/banner/banner-right-3.png" alt="" class="img-fluid"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Col>
                </Row>
            </Container>
        </SliderSectionC>
    )
}

export default SliderSection