import React from 'react'
// eslint-disable-next-line
import { HeaderTopBorder, HeaderTopLeft, HeaderTopRight, HeaderTopRightBox, HeaderTopRightItem, HeaderTopRightLink } from './HeaderElement'
import { Container, Row, Col } from 'react-bootstrap'
import { USD, Language, MyAccount, DropdownAnimation } from './Dropdown';

const Header = () => {
    return (
        <HeaderTopBorder>
            <Container>
                <Row>
                    <Col xs={12} lg={4}>
                        <HeaderTopLeft>
                            <span>Customer Service: </span> (800) 123 456 789
                    </HeaderTopLeft>
                    </Col>
                    <Col xs={12} lg={8}>
                        <HeaderTopRightBox>
                            <HeaderTopRight>
                                <HeaderTopRightItem className="settings">
                                    <HeaderTopRightLink href="#">Compare (2)</HeaderTopRightLink>
                                </HeaderTopRightItem>
                                <HeaderTopRightItem className="settings">
                                    <USD />
                                </HeaderTopRightItem>
                                <HeaderTopRightItem className="settings">
                                    <Language />
                                </HeaderTopRightItem>
                                <HeaderTopRightItem className="settings">
                                    <DropdownAnimation />
                                </HeaderTopRightItem>
                            </HeaderTopRight>
                        </HeaderTopRightBox>
                    </Col>
                </Row>
            </Container>
        </HeaderTopBorder>
    )
}

export default Header