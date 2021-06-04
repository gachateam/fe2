import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Home1SliderBar from './Home1SliderBar'
// import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import { Link } from 'react-router-dom'
import { BannerArea, Home1Styled } from './home1Element'
// import 'slick-carousel/slick/slick-theme.css'
// import CustomSlick from '../CustomSlick';

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

                    </Col>
                </Row>
            </Container>
        </Home1Styled>
    )
}

export default Home1