import React from 'react'
import Countdown from 'react-countdown'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import CustomSlick from '../../CustomSlick'
import { ProductOfferSliderCSS } from './ProductOfferSliderElement'

export const ProductOfferSlider = () => {
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <div>test</div>;
        } else {
            // Render a countdown
            return (
                <>
                    <div className="single-countdown">
                        <span className="single-countdown_time">{days}</span>
                        <span className="single-countdown_text">Days</span>
                    </div>
                    <div className="single-countdown">
                        <span className="single-countdown_time">{hours}</span>
                        <span className="single-countdown_text">Hours</span>
                    </div><div className="single-countdown">
                        <span className="single-countdown_time">{minutes}</span>
                        <span className="single-countdown_text">Min</span>
                    </div><div className="single-countdown">
                        <span className="single-countdown_time">{seconds}</span>
                        <span className="single-countdown_text">Sec</span>
                    </div>
                </>
            );
        }
    };
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };
    return (
        <ProductOfferSliderCSS>
            <CustomSlick settings={settings}>
                <div className="flash-single-item">
                    <div className="product-item">
                        <span className="offer-bar"><img src="img/product/sale-offer.png" alt="hinh1" /></span>
                        <div className="product-thumb">
                            <Link to="/product-details">
                                <img src="img/product/offer/product-9.jpg" alt="hinh1" className="img-fluid" />
                            </Link>
                            <div className="box-label">
                                <div className="label-product-discount">
                                    <span>-20%</span>
                                </div>
                            </div>
                        </div>
                        <div className="product-caption">
                            <div className="product-name mb-3">
                                <Link to="/product-details">
                                    <h6>Natus erro at congue massa commodo sit dignissim</h6>
                                </Link>
                            </div>
                            <div className="rating">
                                <span className="yellow"><FaStar /></span>
                                <span className="yellow"><FaStar /></span>
                                <span className="yellow"><FaStar /></span>
                                <span className="yellow"><FaStar /></span>
                                <span className="default-star"><FaStar /></span>
                            </div>
                            <div className="price-box my-3">
                                <span className="regular-price">$30.00</span>
                                <span className="old-price"><del>$35.50</del></span>
                            </div>
                            <div className="product-pre-content mb-4">
                                <p>The S-Series Full HD TCL Roku TV puts all your entertainment favorites in one place, allowing seamless access to...</p>
                            </div>
                            <div className="countdown">
                                <div className="box-countdown">
                                    <div className="title-countdown">
                                        <h6 className="mb-4">Hurry Up! Offer ends in:</h6>
                                    </div>

                                    <Countdown
                                        date={new Date(2021, 12, 24)}
                                        renderer={renderer}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flash-single-item">
                    <div className="product-item">
                        <span className="offer-bar"><img src="img/product/sale-offer.png" alt="hinh1" /></span>
                        <div className="product-thumb">
                            <Link to="/product-details">
                                <img src="img/product/offer/product-12.jpg" alt="hinh1" className="img-fluid" />
                            </Link>
                            <div className="box-label">
                                <div className="label-product-discount">
                                    <span>-20%</span>
                                </div>
                            </div>
                        </div>
                        <div className="product-caption">
                            <div className="product-name mb-3">
                                <Link to="/product-details">
                                    <h6>Mirum est notare tellus eu nibh iaculis pretium</h6>
                                </Link>
                            </div>
                            <div className="rating">
                                <span className="yellow"><FaStar /></span> 
                                <span className="yellow"><FaStar /></span>
                                <span className="yellow"><FaStar /></span>
                                <span className="yellow"><FaStar /></span>
                                <span className="default-star"><FaStar /></span>
                            </div>
                            <div className="price-box my-3">
                                <span className="regular-price">$130.00</span>
                                <span className="old-price"><del>$135.50</del></span>
                            </div>
                            <div className="product-pre-content mb-4">
                                <p>The S-Series Full HD TCL Roku TV puts all your entertainment favorites in one place, allowing seamless access to...</p>
                            </div>
                            <div className="countdown">
                                <div className="box-countdown">
                                    <div className="title-countdown">
                                        <h6 className="mb-4">Hurry Up! Offer ends in:</h6>
                                    </div>

                                    <Countdown
                                        date={new Date(2021, 12, 24)}
                                        renderer={renderer}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </CustomSlick>
        </ProductOfferSliderCSS>
    )
}
