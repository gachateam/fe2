import React from 'react'
// eslint-disable-next-line
import { Container, Row, Col } from 'react-bootstrap'
import { FooterTopBoder } from './FooterElement'


const Footer = () => {
    return (
        <FooterTopBoder>
            <Container>
                <Row>
                    <Col md={12} lg={5}>
                        <p>© 2021 Copyright <strong>CIRCLESHOP</strong> Made With <i class="fa fa-heart text-danger"></i> by <a href="https://hasthemes.com/"> <strong>HasThemes</strong></a></p>
                    </Col>
                    <Col md={12} lg={7}>
                        <img src="./footerend.png" alt="" class="img-fluid" />
                    </Col>
                </Row>
            </Container>
        </FooterTopBoder>
    )
}

export default Footer