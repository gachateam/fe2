import React from 'react'
import CustomSlick from '../../CustomSlick'
import { BlockTitle, ProductListSliderBar } from './Home1SliderBarElement'
import { FaAngleRight, FaAngleLeft, FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Home1SliderBar = () => {
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
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SlickArrowRight />,
        prevArrow: <SlickArrowLeft />
    };
    return (
        <ProductListSliderBar className="product-list-slidebar mt-5">
            <BlockTitle>
                <h6>New Arrivals</h6>
            </BlockTitle>
            <CustomSlick settings={settings}>
                <div className="product-list-content">
                    <div className="single-product-list mb-3">
                        <div className="product-list-image">
                            <Link to="/product-details" tabIndex="0">
                                <img src="./img/feature/feature-1.jpg" alt="hinh1" className="img-fluid block-one" />
                                <img src="./img/feature/feature-6.jpg" alt="hinh2" className="img-fluid block-two" />
                            </Link>
                        </div>
                        <div className="product-caption">
                            <div className="product-name">
                                <Link to="/product-details" tabIndex="0">Natus erro at congue massa commodo sit dignissim</Link>
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
                        </div>
                    </div>
                    <div className="single-product-list mb-3">
                        <div className="product-list-image">
                            <Link to="/product-details" tabIndex="-1">
                                <img src="./img/feature/feature-2.jpg" alt="" className="img-fluid block-one" />
                                <img src="./img/feature/feature-5.jpg" alt="" className="img-fluid block-two" />
                            </Link>
                        </div>
                        <div className="product-caption">
                            <div className="product-name">
                                <Link to="/product-details" tabIndex="-1">Mirum est notare tellus eu nibh iaculis pretium</Link>
                            </div>
                            <div className="rating">
                                <span className="yellow"><FaStar /></span>
                                <span className="yellow"><FaStar /></span>
                                <span className="yellow"><FaStar /></span>
                                <span className="yellow"><FaStar /></span>
                                <span className="yellow"><FaStar /></span>
                            </div>
                            <div className="price-box">
                                <span className="regular-price">$32.67</span>
                                <span className="old-price"><del>$35.50</del></span>
                            </div>
                        </div>
                    </div>
                    <div className="single-product-list">
                        <div className="product-list-image">
                            <Link to="/product-details" tabIndex="-1">
                                <img src="./img/feature/feature-3.jpg" alt="" className="img-fluid block-one" />
                                <img src="./img/feature/feature-4.jpg" alt="" className="img-fluid block-two" />
                            </Link>
                        </div>
                        <div className="product-caption">
                            <div className="product-name">
                                <Link to="/product-details" tabIndex="-1">Porro quisquam eget feugiat pretium sodales</Link>
                            </div>
                            <div className="rating">
                                <span className="yellow"><FaStar /></span>
                                <span className="yellow"><FaStar /></span>
                                <span className="yellow"><FaStar /></span>
                                <span className="default-star"><FaStar /></span>
                                <span className="default-star"><FaStar /></span>
                            </div>
                            <div className="price-box">
                                <span className="regular-price">$143.00</span>
                                <span className="old-price"><del>$156.00</del></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-list-content">
                    test
                </div>

            </CustomSlick>
        </ProductListSliderBar>
    )
}

export default Home1SliderBar
