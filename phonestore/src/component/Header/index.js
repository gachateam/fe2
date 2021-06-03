import React from 'react'
import {
    HeaderTopBorder,
    HeaderTopLeft,
    HeaderTopRight,
    HeaderTopRightBox,
    HeaderTopRightItem,
    HeaderTopRightLink
} from './HeaderElement'
import {
    Container,
    Row,
    Col
} from 'react-bootstrap'
import {
    USD,
    Language,
    MyAccount
} from './Dropdown';
import { NavbarCustom } from './Navbar'
import { DropdownCategory } from './Search'
import Offcanvas from './offcanvas'

const Header = () => {
    return (
        <>
            <div className="header">
                <HeaderTopBorder>
                    <Container>
                        <Row>
                            <Col lg={4}>
                                <HeaderTopLeft>
                                    <span>Customer Service: </span> (800) 123 456 789
                        </HeaderTopLeft>
                            </Col>
                            <Col lg={8}>
                                <HeaderTopRightBox>
                                    <HeaderTopRight>
                                        <HeaderTopRightItem className="settings">
                                            <HeaderTopRightLink to="/test">Compare (2)</HeaderTopRightLink>
                                        </HeaderTopRightItem>
                                        <HeaderTopRightItem className="settings">
                                            <USD />
                                        </HeaderTopRightItem>
                                        <HeaderTopRightItem className="settings">
                                            <Language />
                                        </HeaderTopRightItem>
                                        <HeaderTopRightItem className="settings">
                                            <MyAccount />
                                        </HeaderTopRightItem>
                                    </HeaderTopRight>
                                </HeaderTopRightBox>
                            </Col>
                        </Row>
                    </Container>
                </HeaderTopBorder>
                <NavbarCustom />
                <DropdownCategory />
                <Offcanvas />
            </div>
            <div>
            {/* Chi Tiết Sản Phẩm */}
            <div class="breadcrumbs_area">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="breadcrumb_content">
                                    <ul>
                                        <li>
                                            <h5><a href="index.html" tppabs="https://htmldemo.hasthemes.com/circleshop/circleshop/index.html">Home</a></h5>
                                        </li>
                                        <li>
                                            <h5><a href="shop.html" tppabs="https://htmldemo.hasthemes.com/circleshop/circleshop/shop.html">Shop</a></h5>
                                        </li>
                                        <li>Product Details</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="product-area product-details-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-5 col-12 mt-50">
                                <div class="product-slider-container arrow-center text-center">
                                    <div class="product-item">
                                        <a href="product-details-1.jpg" tppabs="https://htmldemo.hasthemes.com/circleshop/circleshop/assets/images/product/product-details/product-details-1.jpg"><img src="product-details-1.jpg" tppabs="https://htmldemo.hasthemes.com/circleshop/circleshop/assets/images/product/product-details/product-details-1.jpg" class="img-fluid" alt="" /></a>
                                    </div>
                                    <div class="product-item">
                                        <a href="product-details-2.jpg" tppabs="https://htmldemo.hasthemes.com/circleshop/circleshop/assets/images/product/product-details/product-details-2.jpg"><img src="product-details-2.jpg" tppabs="https://htmldemo.hasthemes.com/circleshop/circleshop/assets/images/product/product-details/product-details-2.jpg" class="img-fluid" alt="" /></a>
                                    </div>
                                    <div class="product-item">
                                        <a href="product-details-3.jpg" tppabs="https://htmldemo.hasthemes.com/circleshop/circleshop/assets/images/product/product-details/product-details-3.jpg"><img src="product-details-3.jpg" tppabs="https://htmldemo.hasthemes.com/circleshop/circleshop/assets/images/product/product-details/product-details-3.jpg" class="img-fluid" alt="" /></a>
                                    </div>
                                    <div class="product-item">
                                        <a href="product-details-4.jpg" tppabs="https://htmldemo.hasthemes.com/circleshop/circleshop/assets/images/product/product-details/product-details-4.jpg"><img src="product-details-4.jpg" tppabs="https://htmldemo.hasthemes.com/circleshop/circleshop/assets/images/product/product-details/product-details-4.jpg" class="img-fluid" alt="" /></a>
                                    </div>
                                    <div class="product-item">
                                        <a href="product-details-5.jpg" tppabs="https://htmldemo.hasthemes.com/circleshop/circleshop/assets/images/product/product-details/product-details-5.jpg"><img src="product-details-5.jpg" tppabs="https://htmldemo.hasthemes.com/circleshop/circleshop/assets/images/product/product-details/product-details-5.jpg" class="img-fluid" alt="" /></a>
                                    </div>
                                    <div class="product-item">
                                        <a href="product-details-3.jpg" tppabs="https://htmldemo.hasthemes.com/circleshop/circleshop/assets/images/product/product-details/product-details-3.jpg"><img src="product-details-3.jpg" tppabs="https://htmldemo.hasthemes.com/circleshop/circleshop/assets/images/product/product-details/product-details-3.jpg" class="img-fluid" alt="" /></a>
                                    </div>
                                    <div class="product-item">
                                        <a href="product-details-1.jpg" tppabs="https://htmldemo.hasthemes.com/circleshop/circleshop/assets/images/product/product-details/product-details-1.jpg"><img src="product-details-1.jpg" tppabs="https://htmldemo.hasthemes.com/circleshop/circleshop/assets/images/product/product-details/product-details-1.jpg" class="img-fluid" alt="" /></a>
                                    </div>
                                    <div class="product-item">
                                        <a href="product-details-4.jpg" tppabs="https://htmldemo.hasthemes.com/circleshop/circleshop/assets/images/product/product-details/product-details-4.jpg"><img src="product-details-4.jpg" tppabs="https://htmldemo.hasthemes.com/circleshop/circleshop/assets/images/product/product-details/product-details-4.jpg" class="img-fluid" alt="" /></a>
                                    </div>
                                </div>

                                <div class="product-details-thumbnail arrow-center text-center">
                                    <div class="product-item-thumb">
                                        <img src="product-thumb-1.jpg" tppabs="https://htmldemo.hasthemes.com/circleshop/circleshop/assets/images/product/product-details/product-thumb-1.jpg" class="img-fluid" alt="" />
                                    </div>
                                    <div class="product-item-thumb">
                                        <img src="product-thumb-2.jpg" tppabs="https://htmldemo.hasthemes.com/circleshop/circleshop/assets/images/product/product-details/product-thumb-2.jpg" class="img-fluid" alt="" />
                                    </div>
                                    <div class="product-item-thumb">
                                        <img src="product-thumb-3.jpg" tppabs="https://htmldemo.hasthemes.com/circleshop/circleshop/assets/images/product/product-details/product-thumb-3.jpg" class="img-fluid" alt="" />
                                    </div>
                                    <div class="product-item-thumb">
                                        <img src="product-thumb-4.jpg" tppabs="https://htmldemo.hasthemes.com/circleshop/circleshop/assets/images/product/product-details/product-thumb-4.jpg" class="img-fluid" alt="" />
                                    </div>
                                    <div class="product-item-thumb">
                                        <img src="product-thumb-5.jpg" tppabs="https://htmldemo.hasthemes.com/circleshop/circleshop/assets/images/product/product-details/product-thumb-5.jpg" class="img-fluid" alt="" />
                                    </div>
                                    <div class="product-item-thumb">
                                        <img src="product-thumb-3.jpg" tppabs="https://htmldemo.hasthemes.com/circleshop/circleshop/assets/images/product/product-details/product-thumb-3.jpg" class="img-fluid" alt="" />
                                    </div>
                                    <div class="product-item-thumb">
                                        <img src="product-thumb-1.jpg" tppabs="https://htmldemo.hasthemes.com/circleshop/circleshop/assets/images/product/product-details/product-thumb-1.jpg" class="img-fluid" alt="" />
                                    </div>
                                    <div class="product-item-thumb">
                                        <img src="product-thumb-4.jpg" tppabs="https://htmldemo.hasthemes.com/circleshop/circleshop/assets/images/product/product-details/product-thumb-4.jpg" class="img-fluid" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-7 col-12 mt-45">
                                <div class="product-summery position-relative">
                                    <div class="product-head">
                                        <h1 class="product-title">Porro quisquam eget feugiat pretium</h1>
                                        <div class="product-arrows text-right">
                                            <a href="#"><i class="fa fa-long-arrow-left"></i></a>
                                            <a href="#"><i class="fa fa-long-arrow-right"></i></a>
                                        </div>
                                    </div>
                                    <div class="rating-meta d-flex">
                                        <div class="rating">
                                            <span class="yellow"><i class="fa fa-star"></i></span>
                                            <span class="yellow"><i class="fa fa-star"></i></span>
                                            <span class="yellow"><i class="fa fa-star"></i></span>
                                            <span class="yellow"><i class="fa fa-star"></i></span>
                                            <span class="yellow"><i class="fa fa-star"></i></span>
                                        </div>
                                        <ul class="meta d-flex">
                                            <li>
                                                <a href="#"><i class="fa fa-commenting-o"></i>Read reviews(3)</a>
                                            </li>
                                            <li>
                                                <a href="#"><i class="fa fa-edit"></i>Write a review</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="price-box">
                                        <span class="regular-price">$30.00</span>
                                    </div>
                                    <div class="product-description">
                                        <p>Porro first 4K UHD Camcorder, the GX10 has a compact and portable design that delivers outstanding video quality with remarkable detail. With a combination of incredible features and functionality, the GX10 is the ideal camcorder for aspiring filmmakers.</p>
                                    </div>
                                    <div class="product-packeges">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td class="label"><span>Size: </span></td>
                                                    <td class="value">
                                                        <div class="product-sizes">
                                                            <a href="#">Large</a>

                                                            <a href="#">Medium</a>

                                                            <a href="#">Small</a>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="label"><span>Color:</span></td>
                                                </tr>
                                                <tr>
                                                    <td class="label"><span>Quantity:</span></td>
                                                    <td class="value">
                                                        <div class="product-quantity">
                                                            <span class="qty-btn minus"><i class="fa fa-angle-down"></i></span>
                                                            <input type="text" class="input-qty" value="1"></input>
                                                            <span class="qty-btn plus"><i class="fa fa-angle-up"></i></span>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="product-buttons grid_list">
                                        <div class="action-link">
                                            <a class="compare-add same-link" href="compare.html" tppabs="https://htmldemo.hasthemes.com/circleshop/circleshop/compare.html" title="Add to compare"><i class="zmdi zmdi-refresh-alt"></i></a>
                                            <button class="btn-secondary">Add To Cart</button>
                                            <a class="wishlist-add same-link" href="wishlist.html" tppabs="https://htmldemo.hasthemes.com/circleshop/circleshop/wishlist.html" title="Add to wishlist"><i class="zmdi zmdi-favorite-outline zmdi-hc-fw"></i></a>
                                        </div>
                                    </div>
                                    <div class="product-meta">
                                        <div class="desc-content">
                                            <div class="social_sharing d-flex">
                                                <h5>SHARE THIS POST:</h5>
                                                <ul>
                                                    <li><a href="#" title="facebook"><i class="fa fa-facebook"></i></a></li>
                                                    <li><a href="#" title="twitter"><i class="fa fa-twitter"></i></a></li>
                                                    <li><a href="#" title="pinterest"><i class="fa fa-pinterest"></i></a></li>
                                                    <li><a href="#" title="google+"><i class="fa fa-google-plus"></i></a></li>
                                                    <li><a href="#" title="linkedin"><i class="fa fa-linkedin"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="row mt-40">
                            <div class="col-lg-3 col-sm-3 col-md-2">
                                <div class="product-desc-tab">
                                    <ul class="nav flex-column" role="tablist">
                                        <li><a class="active" href="#description" role="tab" data-toggle="tab" aria-selected="false">Description</a></li>
                                        <li><a href="#sheet" role="tab" data-toggle="tab" aria-selected="false">Data sheet</a></li>
                                        <li><a href="#reviews" role="tab" data-toggle="tab" aria-selected="true">Reviews</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-9 col-sm-9 col-md-10">
                                <div class="product-desc-tab-content">
                                    <div role="tabpanel" id="description" class="product_tab_content fade active show">
                                        <div class="product_description_wrap mt-20">
                                            <div class="product_desc">
                                                <h2 class="last-title mb-20">Details</h2>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis noexercit ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id.</p>
                                            </div>
                                            <div class="pro__feature mt-20">
                                                <h2 class="last-title mb-20">Features</h2>
                                                <ul class="feature_list">
                                                    <li><a href="#"><i class="zmdi zmdi-play-circle"></i>Duis aute irure dolor in reprehenderit</a></li>
                                                    <li><a href="#"><i class="zmdi zmdi-play-circle"></i>Irure dolor in reprehenderit in voluptate</a></li>
                                                    <li><a href="#"><i class="zmdi zmdi-play-circle"></i>Sed do eiusmod tempor incididunt ut labore</a></li>
                                                    <li><a href="#"><i class="zmdi zmdi-play-circle"></i>Nisi ut aliquip ex ea commodo consequat.</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div role="tabpanel" id="sheet" class="product_tab_content fade">
                                        <div class="pro__feature mt-20">
                                            <h2 class="last-title mb-20">Features</h2>
                                            <ul class="feature_list">
                                                <li><a href="#"><i class="zmdi zmdi-play-circle"></i>Duis aute irure dolor in reprehenderit</a></li>
                                                <li><a href="#"><i class="zmdi zmdi-play-circle"></i>Irure dolor in reprehenderit in voluptate</a></li>
                                                <li><a href="#"><i class="zmdi zmdi-play-circle"></i>Sed do eiusmod tempor incididunt ut labore</a></li>
                                                <li><a href="#"><i class="zmdi zmdi-play-circle"></i>Nisi ut aliquip ex ea commodo consequat.</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="row">
                            <div class="col-lg-12">
                                < div class="product-details-home2 mt-45 mb-15">
                                    <div class="block-title">
                                        <h6><b>Related Products</b></h6>
                                    </div>

                                    <div class="product-carousel-home2 slick-custom slick-custom-default nav-top">
                                        <div class="product-row">
                                            <div class="item-product">
                                                <div class="product-thumb">
                                                    <a href="product-details.html" tppabs="https://htmldemo.hasthemes.com/circleshop/circleshop/product-details.html">
                                                        <img src="product-11.jpg" tppabs="https://htmldemo.hasthemes.com/circleshop/circleshop/assets/images/product/product-11.jpg" alt="" class="img-fluid"></img>
                                                    </a>
                                                    <div class="box-label">
                                                        <div class="label-product-new">
                                                            <span>New</span>
                                                        </div>
                                                    </div>
                                                    <div class="action-link">
                                                        <a class="quick-view same-link" href="#" title="Quick view" data-toggle="modal" data-target="#modal_box" data-original-title="quick view"><i class="zmdi zmdi-eye zmdi-hc-fw"></i></a>
                                                        <a class="compare-add same-link" href="compare.html" tppabs="https://htmldemo.hasthemes.com/circleshop/circleshop/compare.html" title="Add to compare"><i class="zmdi zmdi-refresh-alt"></i></a>
                                                        <a class="wishlist-add same-link" href="wishlist.html" tppabs="https://htmldemo.hasthemes.com/circleshop/circleshop/wishlist.html" title="Add to wishlist"><i class="zmdi zmdi-favorite-outline zmdi-hc-fw"></i></a>
                                                    </div>
                                                </div>
                                                <div class="product-caption">
                                                    <div class="product-name">
                                                        <a href="product-details.html" tppabs="https://htmldemo.hasthemes.com/circleshop/circleshop/product-details.html">Natus erro at congue massa commodo sit dignissim</a>
                                                    </div>
                                                    <div class="rating">
                                                        <span class="yellow"><i class="fa fa-star"></i></span>
                                                        <span class="yellow"><i class="fa fa-star"></i></span>
                                                        <span class="yellow"><i class="fa fa-star"></i></span>
                                                        <span class="yellow"><i class="fa fa-star"></i></span>
                                                        <span class="yellow"><i class="fa fa-star"></i></span>
                                                    </div>
                                                    <div class="price-box">
                                                        <span class="regular-price">$30.00</span>
                                                    </div>
                                                    <div class="cart">
                                                        <div class="add-to-cart">
                                                            <a class="cart-plus" href="shopping-cart.html" tppabs="https://htmldemo.hasthemes.com/circleshop/circleshop/shopping-cart.html" title="Add to cart"><i class="zmdi zmdi-shopping-cart-plus zmdi-hc-fw"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>

                        </div>

                    </div>
        </div>

        </>


    )
}

export default Header