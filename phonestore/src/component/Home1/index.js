import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Home1SliderBar from './Home1SliderBar'
// import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'
// import CustomSlick from '../CustomSlick';

const Home1 = () => {
    
    return (
        <div className="home3-product home4-product-area">
            <Container>
                <Row>
                    <Col lg="3" className="order-1 order-lg-2">
                        <div className="left-side-wrapper">
                            <Home1SliderBar />
                        </div>
                    </Col>
                    <Col lg="9" className="order-2 order-lg-1">
                        
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home1