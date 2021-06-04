import React from 'react'
import { FaAngleLeft, FaAngleRight, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CustomSlick from '../../CustomSlick';
import { BlockTitle } from '../Home1SliderBar/Home1SliderBarElement'
import { Cart, Home1ProductSliderCSS } from './Home1ProductSliderElement'
import { MdAddShoppingCart } from 'react-icons/md'
import { AiFillEye } from 'react-icons/ai'
import { BiRefresh } from 'react-icons/bi'
import { MdFavoriteBorder } from 'react-icons/md'

const Home1ProductSlider = () => {
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <FaAngleLeft
            {...props}
            className={
                "slick-prev slick-arrow" +
                (currentSlide === 0 ? " slick-disabled" : "")
            }
            aria-hidden="true"
            aria-disabled={currentSlide === 0 ? true : false}
        />
    );
    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <FaAngleRight
            {...props}
            className={
                "slick-next slick-arrow" +
                (currentSlide === slideCount - 1 ? " slick-disabled" : "")
            }
            aria-hidden="true"
            aria-disabled={currentSlide === slideCount - 1 ? true : false}
        />
    );
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        nextArrow: <SlickArrowRight />,
        prevArrow: <SlickArrowLeft />,
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
                slidesToShow: 3
            }
        }]
    };
    return (
        <Home1ProductSliderCSS className="mx-4">
            <BlockTitle>
                <h6>Bestseller Products</h6>
            </BlockTitle>
            <CustomSlick settings={settings}>
                <div className="product-row">
                    <div className="item-product">
                        <div className="product-thumb">
                            <Link to="/product-details">
                                <img src="img/product/product-11.jpg" alt="hinh1" className="img-fluid" />
                            </Link>
                            <div className="box-label">
                                <div className="label-product-new">
                                    <span>New</span>
                                </div>
                            </div>
                            <div className="action-link">
                                <Link className="quick-view same-link" to="/" title="Quick view" data-toggle="modal" data-target="#modal_box" data-original-title="quick view"><AiFillEye/></Link>
                                <Link className="compare-add same-link" to="/compare" title="Add to compare"><BiRefresh /></Link>
                                <Link className="wishlist-add same-link" to="/wishlist" title="Add to wishlist"><MdFavoriteBorder /></Link>
                            </div>
                        </div>
                        <div className="product-caption">
                            <div className="product-name">
                                <Link to="/product-details">Natus erro at congue massa commodo sit dignissim</Link>
                            </div>
                            <div className="rating">
                                <span className="yellow"><FaStar /></span>
                                <span className="yellow"><FaStar /></span>
                                <span className="yellow"><FaStar /></span>
                                <span className="yellow"><FaStar /></span>
                                <span className="yellow"><FaStar /></span>
                            </div>
                            <div className="price-box">
                                <span className="regular-price">$30.00</span>
                            </div>
                            <Cart className="cart">
                                <div className="add-to-cart">
                                    <Link className="cart-plus" to="/shopping-cart" title="Add to cart"><MdAddShoppingCart /></Link>
                                </div>
                            </Cart>
                        </div>
                    </div>
                </div>
                <div className="product-row">
                    <div className="item-product">
                        <div className="product-thumb">
                            <Link to="/product-details">
                                <img src="img/product/product-11.jpg" alt="hinh1" className="img-fluid" />
                            </Link>
                            <div className="box-label">
                                <div className="label-product-new">
                                    <span>New</span>
                                </div>
                            </div>
                            <div className="action-link">
                                <Link className="quick-view same-link" to="/" title="Quick view" data-toggle="modal" data-target="#modal_box" data-original-title="quick view"><AiFillEye/></Link>
                                <Link className="compare-add same-link" to="/compare" title="Add to compare"><BiRefresh /></Link>
                                <Link className="wishlist-add same-link" to="/wishlist" title="Add to wishlist"><MdFavoriteBorder /></Link>
                            </div>
                        </div>
                        <div className="product-caption">
                            <div className="product-name">
                                <Link to="/product-details">Natus erro at congue massa commodo sit dignissim</Link>
                            </div>
                            <div className="rating">
                                <span className="yellow"><FaStar /></span>
                                <span className="yellow"><FaStar /></span>
                                <span className="yellow"><FaStar /></span>
                                <span className="yellow"><FaStar /></span>
                                <span className="yellow"><FaStar /></span>
                            </div>
                            <div className="price-box">
                                <span className="regular-price">$30.00</span>
                            </div>
                            <Cart className="cart">
                                <div className="add-to-cart">
                                    <Link className="cart-plus" to="/shopping-cart" title="Add to cart"><MdAddShoppingCart /></Link>
                                </div>
                            </Cart>
                        </div>
                    </div>
                </div>
                <div className="product-row">
                    <div className="item-product">
                        <div className="product-thumb">
                            <Link to="/product-details">
                                <img src="img/product/product-11.jpg" alt="hinh1" className="img-fluid" />
                            </Link>
                            <div className="box-label">
                                <div className="label-product-new">
                                    <span>New</span>
                                </div>
                            </div>
                            <div className="action-link">
                                <Link className="quick-view same-link" to="/" title="Quick view" data-toggle="modal" data-target="#modal_box" data-original-title="quick view"><AiFillEye/></Link>
                                <Link className="compare-add same-link" to="/compare" title="Add to compare"><BiRefresh /></Link>
                                <Link className="wishlist-add same-link" to="/wishlist" title="Add to wishlist"><MdFavoriteBorder /></Link>
                            </div>
                        </div>
                        <div className="product-caption">
                            <div className="product-name">
                                <Link to="/product-details">Natus erro at congue massa commodo sit dignissim</Link>
                            </div>
                            <div className="rating">
                                <span className="yellow"><FaStar /></span>
                                <span className="yellow"><FaStar /></span>
                                <span className="yellow"><FaStar /></span>
                                <span className="yellow"><FaStar /></span>
                                <span className="yellow"><FaStar /></span>
                            </div>
                            <div className="price-box">
                                <span className="regular-price">$30.00</span>
                            </div>
                            <Cart className="cart">
                                <div className="add-to-cart">
                                    <Link className="cart-plus" to="/shopping-cart" title="Add to cart"><MdAddShoppingCart /></Link>
                                </div>
                            </Cart>
                        </div>
                    </div>
                </div>
                <div className="product-row">
                    <div className="item-product">
                        <div className="product-thumb">
                            <Link to="/product-details">
                                <img src="img/product/product-11.jpg" alt="hinh1" className="img-fluid" />
                            </Link>
                            <div className="box-label">
                                <div className="label-product-new">
                                    <span>New</span>
                                </div>
                            </div>
                            <div className="action-link">
                                <Link className="quick-view same-link" to="/" title="Quick view" data-toggle="modal" data-target="#modal_box" data-original-title="quick view"><AiFillEye/></Link>
                                <Link className="compare-add same-link" to="/compare" title="Add to compare"><BiRefresh /></Link>
                                <Link className="wishlist-add same-link" to="/wishlist" title="Add to wishlist"><MdFavoriteBorder /></Link>
                            </div>
                        </div>
                        <div className="product-caption">
                            <div className="product-name">
                                <Link to="/product-details">Natus erro at congue massa commodo sit dignissim</Link>
                            </div>
                            <div className="rating">
                                <span className="yellow"><FaStar /></span>
                                <span className="yellow"><FaStar /></span>
                                <span className="yellow"><FaStar /></span>
                                <span className="yellow"><FaStar /></span>
                                <span className="yellow"><FaStar /></span>
                            </div>
                            <div className="price-box">
                                <span className="regular-price">$30.00</span>
                            </div>
                            <Cart className="cart">
                                <div className="add-to-cart">
                                    <Link className="cart-plus" to="/shopping-cart" title="Add to cart"><MdAddShoppingCart /></Link>
                                </div>
                            </Cart>
                        </div>
                    </div>
                </div>
                <div className="product-row">
                    <div className="item-product">
                        <div className="product-thumb">
                            <Link to="/product-details">
                                <img src="img/product/product-11.jpg" alt="hinh1" className="img-fluid" />
                            </Link>
                            <div className="box-label">
                                <div className="label-product-new">
                                    <span>New</span>
                                </div>
                                <div className="label-product-discount">
                                    <span>-20%</span>
                                </div>
                            </div>
                            <div className="action-link">
                                <Link className="quick-view same-link" to="/" title="Quick view" data-toggle="modal" data-target="#modal_box" data-original-title="quick view"><AiFillEye/></Link>
                                <Link className="compare-add same-link" to="/compare" title="Add to compare"><BiRefresh /></Link>
                                <Link className="wishlist-add same-link" to="/wishlist" title="Add to wishlist"><MdFavoriteBorder /></Link>
                            </div>
                        </div>
                        <div className="product-caption">
                            <div className="product-name">
                                <Link to="/product-details">Natus erro at congue massa commodo sit dignissim</Link>
                            </div>
                            <div className="rating">
                                <span className="yellow"><FaStar /></span>
                                <span className="yellow"><FaStar /></span>
                                <span className="yellow"><FaStar /></span>
                                <span className="yellow"><FaStar /></span>
                                <span className="yellow"><FaStar /></span>
                            </div>
                            <div className="price-box">
                                <span className="regular-price">$30.00</span>
                            </div>
                            <Cart className="cart">
                                <div className="add-to-cart">
                                    <Link className="cart-plus" to="/shopping-cart" title="Add to cart"><MdAddShoppingCart /></Link>
                                </div>
                            </Cart>
                        </div>
                    </div>
                </div>
                <div className="product-row">
                    <div className="item-product">
                        <div className="product-thumb">
                            <Link to="/product-details">
                                <img src="img/product/product-11.jpg" alt="hinh1" className="img-fluid" />
                            </Link>
                            <div className="box-label">
                                <div className="label-product-new">
                                    <span>New</span>
                                </div>
                            </div>
                            <div className="action-link">
                                <Link className="quick-view same-link" to="/" title="Quick view" data-toggle="modal" data-target="#modal_box" data-original-title="quick view"><AiFillEye/></Link>
                                <Link className="compare-add same-link" to="/compare" title="Add to compare"><BiRefresh /></Link>
                                <Link className="wishlist-add same-link" to="/wishlist" title="Add to wishlist"><MdFavoriteBorder /></Link>
                            </div>
                        </div>
                        <div className="product-caption">
                            <div className="product-name">
                                <Link to="/product-details">Natus erro at congue massa commodo sit dignissim</Link>
                            </div>
                            <div className="rating">
                                <span className="yellow"><FaStar /></span>
                                <span className="yellow"><FaStar /></span>
                                <span className="yellow"><FaStar /></span>
                                <span className="yellow"><FaStar /></span>
                                <span className="yellow"><FaStar /></span>
                            </div>
                            <div className="price-box">
                                <span className="regular-price">$30.00</span>
                            </div>
                            <Cart className="cart">
                                <div className="add-to-cart">
                                    <Link className="cart-plus" to="/shopping-cart" title="Add to cart"><MdAddShoppingCart /></Link>
                                </div>
                            </Cart>
                        </div>
                    </div>
                </div>

            </CustomSlick>
        </Home1ProductSliderCSS>
    )
}

export default Home1ProductSlider
