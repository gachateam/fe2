import React, { useState } from 'react'
import { Container, Dropdown, Navbar } from 'react-bootstrap';
import {
    Blockcard,
    BlockcardCartDetail,
    BlockCardCheckOutCart,
    BlockCardCheckOutCartLink,
    BlockcardDropdown,
    BlockcardImage,
    BlockcardInnerCartContentLink,
    BlockcardInnerCartContentName,
    BlockcardInnerCartContentPrice,
    BlockcardInnerCartContentSize,
    BlockcardInnerCartImg,
    BlockcardInnerCartImgImage,
    BlockcardInnerCartImgSpan,
    BlockCardPrice,
    BlockCardSpanCount,
    BlockcardSpanMyCard,
    BlockCardSpanTotalItem,
    BlockCardSubtotalPrice,
    BlockCardSubtotalText,
    HeaderDropToggle,
    HeaderMiddleInner,
    HeaderMiddleLink,
    HeaderMiddleList,
    HearderMiddleItem
} from './NavbarElement'
import './index.css'

const CustomToggle = React.forwardRef(({ children, onClick, className }, ref) => {
    return (
        <HeaderDropToggle
            className={className}
            to="/"
            ref={ref}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
        >
            {children}
        </HeaderDropToggle>
    );
});

const CustomDropdown = React.forwardRef(({ children, style, onClick, className, 'aria-labelledby': labeledBy, show }, ref) => {
    return (
        <BlockcardDropdown
            ref={ref}
            style={style}
            className={className}
            aria-labelledby={labeledBy}
            show={show}
        >
            {children}
        </BlockcardDropdown>
    );
});

const CustomItem = React.forwardRef(({ children, onClick, className }, ref) => {
    return (
        <BlockcardCartDetail
            className={className}>
            {children}
        </BlockcardCartDetail>
    );
});

const CustomNavbar = React.forwardRef(({ children, className }, ref) => {
    const [scroll, setScroll] = useState(false);

    window.addEventListener('scroll', () => {
        setScroll(window.scrollY > 300)
    });

    return (
        <Navbar
            className={scroll ? className.split(' py-5').join('') + " anim-down" : className.split(' sticky-top').join('') + " position-unset"}
            ref={ref}
        >
            {children}
        </Navbar>
    );
});

export class NavbarCustom extends React.Component {
    constructor() {
        super();

        this.category = ["Home", "Shop", "Blog", "Pages", "About Us", "Contact Us"]

        this.state = {
            total: {
                count: 2,
                total: 200.00
            },
            product: [
                {
                    img: "../../img/product/ear-headphones.jpg",
                    count: "1",
                    name: "SonicFuel Wireless Over-Ear Headphones",
                    size: "Size:  S",
                    price: 32.30
                },
                {
                    img: "../../img/product/720-degree-cameras-dual.jpg",
                    count: "1",
                    name: "720 Degree Panoramic HD 360.. ",
                    size: "Dimension:  40cm X 60cm",
                    price: 29.00
                },
            ],
            show: false
        }
    }

    onClick = (e) => {
        this.setState({ show: !this.state.show })
    }

    List = () => (
        <HeaderMiddleList className="list-100">
            {
                this.category.map((e) => (
                    <HearderMiddleItem key={e}>
                        <HeaderMiddleLink to="/">
                            {e}
                        </HeaderMiddleLink>
                    </HearderMiddleItem>
                ))
            }
        </HeaderMiddleList>
    )

    Blockcard = () => {
        const Toggle = () => (
            <Dropdown.Toggle as={CustomToggle} className="hidden-toggle" id="dropdown-basic">
                <BlockcardImage src="../../img/header/cart.png" alt="cart" />
                <BlockcardSpanMyCard>My card</BlockcardSpanMyCard>
                <BlockCardSpanCount>{this.state.total.count}</BlockCardSpanCount>
                <BlockCardSpanTotalItem>${parseFloat(this.state.total.total).toFixed(2)}</BlockCardSpanTotalItem>
            </Dropdown.Toggle>
        )

        const DropdownMenu = () => {
            let totalPrice = this.state.product.reduce((tot, arr) => {
                return tot + arr.price
            }, 0);
            return (
                <Dropdown.Menu
                    as={CustomDropdown}
                    show={this.state.show}
                >
                    {
                        this.state.product.map((product, index) => (
                            <Dropdown.Item as={CustomItem} key={index}>
                                <BlockcardInnerCartImg>
                                    <BlockcardInnerCartImgImage src={product.img} className="img-fluid" />
                                    <BlockcardInnerCartImgSpan>{product.count}x</BlockcardInnerCartImgSpan>
                                </BlockcardInnerCartImg>
                                <div>
                                    <BlockcardInnerCartContentName>
                                        <BlockcardInnerCartContentLink to="/">
                                            {product.name}
                                        </BlockcardInnerCartContentLink>
                                        <BlockcardInnerCartContentPrice>
                                            ${product.price.toFixed(2)}
                                        </BlockcardInnerCartContentPrice>
                                        <BlockcardInnerCartContentSize>
                                            {product.size}
                                        </BlockcardInnerCartContentSize>
                                    </BlockcardInnerCartContentName>
                                </div>
                            </Dropdown.Item>
                        ))
                    }
                    <BlockCardPrice>
                        <BlockCardSubtotalText>Subtotal</BlockCardSubtotalText>
                        <BlockCardSubtotalPrice>{totalPrice.toFixed(2)}</BlockCardSubtotalPrice>
                    </BlockCardPrice>
                    <BlockCardPrice>
                        <BlockCardSubtotalText>Shipping</BlockCardSubtotalText>
                        <BlockCardSubtotalPrice>test1</BlockCardSubtotalPrice>
                    </BlockCardPrice>
                    <BlockCardPrice>
                        <BlockCardSubtotalText>Taxes</BlockCardSubtotalText>
                        <BlockCardSubtotalPrice>test1</BlockCardSubtotalPrice>
                    </BlockCardPrice>
                    <BlockCardPrice>
                        <BlockCardSubtotalText>Total</BlockCardSubtotalText>
                        <BlockCardSubtotalPrice>test1</BlockCardSubtotalPrice>
                    </BlockCardPrice>
                    <BlockCardCheckOutCart>
                        <BlockCardCheckOutCartLink to="/checkout">
                            Checkout
                        </BlockCardCheckOutCartLink>
                    </BlockCardCheckOutCart>
                </Dropdown.Menu>
            )
        }

        return (
            <Blockcard>
                <Dropdown style={{ position: 'relative', zIndex: 10 }}>
                    <Toggle />

                    <DropdownMenu />

                </Dropdown>
            </Blockcard>
        )

    }

    render() {
        return (
            <Navbar as={CustomNavbar} bg="light" expand="lg" sticky='top' className="shadow bg-white roundedb py-5">
                <Container>
                    <Navbar.Brand to="/">
                        <img src="../../img/logo/pos-circle-logo.jpg" className="img-fluid logo-small" alt="logo" />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="navbarScroll" />

                    <HeaderMiddleInner className="navbar-collapse collapse" id="navbarScroll">
                        <this.List />

                        <this.Blockcard />
                    </HeaderMiddleInner>
                </Container>
            </Navbar>
        );
    }
}