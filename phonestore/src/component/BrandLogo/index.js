import React from 'react'
import { Link } from 'react-router-dom'
import CustomSlick from '../CustomSlick';
import { Container, Row, Col } from 'react-bootstrap'
import { BrandLogoCSS } from './BrandLogoElement'

const BrandLogo = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false
    };
    return (
        <BrandLogoCSS classNameName="brand-area">
            <Container>
                <Row>
                    <Col>
                        <CustomSlick settings={settings}>
                            <div className="single-brand">
                                <Link to="#">
                                    <img src="./img/brand/3.jpg" alt="" className="img-fluid" />
                                </Link>
                            </div>
                            <div className="single-brand">
                                <Link to="#">
                                    <img src="./img/brand/2.jpg" alt="" className="img-fluid" />
                                </Link>
                            </div>
                            <div className="single-brand">
                                <Link to="#">
                                    <img src="./img/brand/1.jpg" alt="" className="img-fluid" />
                                </Link>
                            </div>
                            <div className="single-brand">
                                <Link to="#">
                                    <img src="./img/brand/4.jpg" alt="" className="img-fluid" />
                                </Link>
                            </div>
                            <div className="single-brand">
                                <Link to="#">
                                    <img src="./img/brand/5.jpg" alt="" className="img-fluid" />
                                </Link>
                            </div>
                            <div className="single-brand">
                                <Link to="#">
                                    <img src="./img/brand/6.jpg" alt="" className="img-fluid" />
                                </Link>
                            </div>
                            <div className="single-brand">
                                <Link to="#">
                                    <img src="./img/brand/1.jpg" alt="" className="img-fluid" />
                                </Link>
                            </div>
                            <div className="single-brand">
                                <Link to="#">
                                    <img src="./img/brand/3.jpg" alt="" className="img-fluid" />
                                </Link>
                            </div>
                            <div className="single-brand">
                                <Link to="#">
                                    <img src="./img/brand/4.jpg" alt="" className="img-fluid" />
                                </Link>
                            </div>
                        </CustomSlick>
                    </Col>
                </Row>
            </Container>
        </BrandLogoCSS>
    )
}

export default BrandLogo