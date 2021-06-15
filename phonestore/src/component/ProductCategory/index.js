import React from 'react'
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap'
import Home1ProductSlider from '../Home1/Home1ProductSlider'
import { Home1ProductSliderCSS } from '../Home1/Home1ProductSlider/Home1ProductSliderElement'
import { ProductCategoryCSS } from './ProductCategoryElement'

var data = require('./data.json')

console.log(data.category)

const ProductCategory = () => {
    const NavItem = (props) => (
        <>
            <span><img src={props.img} alt="" className="img-fluid" /></span>
            <span>{props.name}</span>
        </>
    )

    var settings = {
        dots: false,
        slidesToShow: 5,
        infinite: true,
        arrows: false,
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
                slidesToShow: 4
            }
        }]
    };
    return (
        <ProductCategoryCSS className="mt-5">
            <Container>
                <Row>
                    <Col>
                        <Tabs defaultActiveKey="1" id="noanim-tab-example">
                            {
                                data.category.map((data, index) => (
                                    <Tab key={index} tabClassName="123" eventKey={index} title={<NavItem img={data.img} name={data.name} />}>
                                        <Home1ProductSliderCSS className="mx-4 my-5">
                                            <Home1ProductSlider data={data} settings={settings} />
                                        </Home1ProductSliderCSS>
                                    </Tab>
                                ))
                            }
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        </ProductCategoryCSS>
    )
}

export default ProductCategory
