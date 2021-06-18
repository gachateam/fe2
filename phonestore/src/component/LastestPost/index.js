import React from 'react'
import { Link } from 'react-router-dom'
import CustomSlick from '../CustomSlick';
import { FaAngleRight, FaAngleLeft, FaStar } from 'react-icons/fa'
import { Container, Row, Col } from 'react-bootstrap'
import { LastestPostCSS } from './LastestPostElement'
import { BlockTitle } from '../Home1/Home1SliderBar/Home1SliderBarElement';
import { BannerArea } from '../Home1/home1Element';

const LastestPost = () => {
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
        <LastestPostCSS className="latest-post-area">
            <Container>
                <Row>
                    <Col lg={6}>
                        <BlockTitle>
                            <h6>From Our blog</h6>
                        </BlockTitle>
                        <CustomSlick settings={settings}>
                            <div className="blog-post-container">
                                <div className="single_blog mb-35">
                                    <BannerArea>
                                        <div className="blog_thumb single-banner">
                                            <Link to="/blog-fullwidth"><img src="./img/blog/blog-post-1.jpg" alt="" className="img-fluid" /></Link>
                                        </div>
                                    </BannerArea>
                                    <div className="blog_content">
                                        <h6><Link to="/blog-fullwidth">This is Secound Post For XipBlog</Link></h6>
                                        <div className="date_post mt-15 mb-15">
                                            <span>01 Jan 2020</span>
                                        </div>
                                        <p className="post-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ...</p>
                                    </div>
                                </div>
                                <div className="single_blog">
                                    <BannerArea>
                                        <div className="blog_thumb single-banner">
                                            <Link to="/blog-fullwidth"><img src="./img/blog/blog-post-2.jpg" alt="" className="img-fluid" /></Link>
                                        </div>
                                    </BannerArea>
                                    <div className="blog_content">
                                        <h6><Link to="/blog-fullwidth">This is Secound Post For XipBlog</Link></h6>
                                        <div className="date_post mt-15 mb-15">
                                            <span>01 Jan 2020</span>
                                        </div>
                                        <p className="post-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ...</p>
                                    </div>
                                </div>
                            </div>
                            <div className="blog-post-container">
                                <div className="single_blog mb-35">
                                    <BannerArea>
                                        <div className="blog_thumb single-banner">
                                            <Link to="/blog-fullwidth"><img src="./img/blog/blog-post-3.jpg" alt="" className="img-fluid" /></Link>
                                        </div>
                                    </BannerArea>
                                    <div className="blog_content">
                                        <h6><Link to="/blog-fullwidth">This is Secound Post For XipBlog</Link></h6>
                                        <div className="date_post mt-15 mb-15">
                                            <span>01 Jan 2020</span>
                                        </div>
                                        <p className="post-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ...</p>
                                    </div>
                                </div>
                                <div className="single_blog">
                                    <BannerArea>
                                        <div className="blog_thumb single-banner">
                                            <Link to="/blog-fullwidth"><img src="./img/blog/blog-post-4.jpg" alt="" className="img-fluid" /></Link>
                                        </div>
                                    </BannerArea>
                                    <div className="blog_content">
                                        <h6><Link to="/blog-fullwidth">This is Secound Post For XipBlog</Link></h6>
                                        <div className="date_post mt-15 mb-15">
                                            <span>01 Jan 2020</span>
                                        </div>
                                        <p className="post-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ...</p>
                                    </div>
                                </div>
                            </div>
                        </CustomSlick>
                    </Col>
                    <Col lg={6}>
                        <BlockTitle>
                            <h6>What Client Say</h6>
                        </BlockTitle>
                        <CustomSlick settings={settings}>
                            <div className="single_testimonial text-center">
                                <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit
                                augue duis dolore te feuga</p>
                                <img src="./img/testimonial/testimonial-1.png" alt="" className="img-fluid" />
                                <span className="name">Kathy Young</span>
                                <span className="job_title">CEO of SunPark</span>
                                <div className="rating">
                                    <span className="yellow"><FaStar/></span>
                                    <span className="yellow"><FaStar/></span>
                                    <span className="yellow"><FaStar/></span>
                                    <span className="yellow"><FaStar/></span>
                                    <span className="yellow"><FaStar/></span>
                                </div>
                            </div>
                            <div className="single_testimonial text-center">
                                <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit
                                augue duis dolore te feuga</p>
                                <img src="./img/testimonial/testimonial-2.jpg" alt="" className="img-fluid" />
                                <span className="name">Alex Aya</span>
                                <span className="job_title">Art Director</span>
                                <div className="rating">
                                    <span className="yellow"><FaStar/></span>
                                    <span className="yellow"><FaStar/></span>
                                    <span className="yellow"><FaStar/></span>
                                    <span className="yellow"><FaStar/></span>
                                    <span className="yellow"><FaStar/></span>
                                </div>
                            </div>
                        </CustomSlick>
                    </Col>
                </Row>
            </Container>
        </LastestPostCSS>
    )
}

export default LastestPost