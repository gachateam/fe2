import React, { useState } from 'react'
import { Container, Navbar } from 'react-bootstrap';
import {
    Blockcard,
    BlockcardImage,
    BlockCardSpanCount,
    BlockcardSpanMyCard,
    BlockCardSpanTotalItem,
    HeaderDropToggle,
    HeaderMiddleInner,
    HeaderMiddleLink,
    HeaderMiddleList,
    HearderMiddleItem,
    Logo
} from './NavbarElement'

const CustomNavbar = React.forwardRef(({ children, className }, ref) => {
    const [scroll, setScroll] = useState(false);

    window.onscroll = () => {
        setScroll(window.scrollY > 300)
        console.log(scroll)
    };
    return (
        <Navbar
            className={scroll ? className + " anim-down" : className.split(' sticky-top')[0] + " position-unset"}
            ref={ref}
        >
            {children}
        </Navbar>
    );
});

export class NavbarCustom extends React.Component {
    constructor() {
        super();

        this.scroll = false;

        this.category = ["Home", "Shop", "Blog", "Pages", "About Us", "Contact Us"]
    }

    render() {
        window.onscroll = () => {
            this.scroll = window.scrollY
        };

        return (
            <>
                <Navbar as={CustomNavbar} bg="light" expand="lg" sticky='top' className="shadow bg-white rounded">
                    <Container>
                        <Navbar.Brand href="/">
                            <Logo src="../../img/logo/pos-circle-logo.jpg" className="img-fluid logo-small" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <HeaderMiddleInner className="navbar-collapse collapse" id="navbarScroll">
                            <HeaderMiddleList>

                                {
                                    this.category.map((e) => (
                                        <HearderMiddleItem className="flex-fill">
                                            <HeaderMiddleLink>
                                                {e}
                                            </HeaderMiddleLink>
                                        </HearderMiddleItem>
                                    ))
                                }
                            </HeaderMiddleList>
                            <Blockcard>
                                <HeaderDropToggle>
                                    <BlockcardImage src="../../img/header/cart.png" />
                                    <BlockcardSpanMyCard>
                                        My card
                                    </BlockcardSpanMyCard>
                                    <BlockCardSpanCount>
                                        2
                                    </BlockCardSpanCount>
                                    <BlockCardSpanTotalItem>
                                        $200.00
                                    </BlockCardSpanTotalItem>
                                </HeaderDropToggle>
                            </Blockcard>
                        </HeaderMiddleInner>
                    </Container>
                </Navbar>
            </>
        );
    }
}