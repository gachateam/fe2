import React from 'react'
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CustomSlick from '../../CustomSlick';
import { Cart } from './Home1ProductSliderElement'
import { MdAddShoppingCart } from 'react-icons/md'
import { AiFillEye } from 'react-icons/ai'
import { BiRefresh } from 'react-icons/bi'
import { MdFavoriteBorder } from 'react-icons/md'

const Home1ProductSlider = (props) => {
    const Rating = (props) => {
        var indents = [];
        for (let i = 0; i < 5; i++) {
            if (i < props.rating) {
                indents.push(<span key={i} className="yellow"><FaStar /></span>);
            } else {
                indents.push(<span key={i} className="default-star"><FaStar /></span>);
            }
        }
        return indents
    }

    return (
        <CustomSlick settings={props.settings}>
            {
                props.data.product.map((data, index) => (
                    <div className="product-row" key={index}>
                        <div className="item-product">
                            <div className="product-thumb">
                                <Link to="/product-details">
                                    <img src={data.img} alt="hinh1" className="img-fluid" />
                                </Link>
                                <div className="box-label">
                                    {
                                        data.new &&
                                        <div className="label-product-new">
                                            <span>New</span>
                                        </div>
                                    }
                                    {
                                        data.sale &&
                                        <div className="label-product-discount">
                                            <span>-{data.saleOf}%</span>
                                        </div>
                                    }
                                </div>
                                <div className="action-link">
                                    <Link className="quick-view same-link" to="/" title="Quick view" data-toggle="modal" data-target="#modal_box" data-original-title="quick view"><AiFillEye /></Link>
                                    <Link className="compare-add same-link" to="/compare" title="Add to compare"><BiRefresh /></Link>
                                    <Link className="wishlist-add same-link" to="/wishlist" title="Add to wishlist"><MdFavoriteBorder /></Link>
                                </div>
                            </div>
                            <div className="product-caption">
                                <div className="product-name">
                                    <Link to="/product-details">{data.name}</Link>
                                </div>
                                <div className="rating">
                                    <Rating rating={data.star} />
                                </div>
                                <div className="price-box">
                                    <span className="regular-price">${data.price}</span>
                                </div>
                                <Cart className="cart">
                                    <div className="add-to-cart">
                                        <Link className="cart-plus" to="/shopping-cart" title="Add to cart"><MdAddShoppingCart /></Link>
                                    </div>
                                </Cart>
                            </div>
                        </div>
                    </div>
                ))
            }
        </CustomSlick>
    )
}

export default Home1ProductSlider
