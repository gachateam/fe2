import styled from "styled-components";

export const SliderSectionCSS = styled.div`
  .slick-slider {
    margin-top: 30px;
  }

  .slick-slider img {
    width: 100%;
  }

  .slick-slider .slick-dots {
    left: 5%;
    @media only screen and (max-width: 479px) {
      left: 50%;
      bottom: 5px;
    }
  }

  .single_slider {
    position: relative;
  }

  .slider_content {
    position: absolute;
    top: calc(50% - 170px);
    left: 12%;
    transition: 1s;

    @media only screen and (min-width: 992px) and (max-width: 1199px),
      only screen and (max-width: 991px) {
      top: calc(50% - 153px);
    }

    @media only screen and (max-width: 767px) {
      top: calc(50% - 111px);
    }

    @media only screen and (max-width: 575px) {
      top: calc(50% - 90px);
      left: 10%;
    }

    @media only screen and (max-width: 479px) {
      top: calc(50% - 70px);
    }
  }

  .slick-active h5 {
    animation: bounceInLeft 1s;
  }

  .slider_content h5 {
    color: #2d75b5;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 50px;

    @media only screen and (min-width: 992px) and (max-width: 1199px),
      only screen and (max-width: 991px) {
      margin-bottom: 30px;
    }

    @media only screen and (max-width: 767px) {
      margin-bottom: 20px;
      font-size: 14px;
    }

    @media only screen and (max-width: 575px) {
      margin-bottom: 12px;
      font-size: 16px;
    }

    @media only screen and (max-width: 479px) {
      margin-bottom: 5px;
      font-size: 12px;
    }
  }

  .slider_content h2 {
    font-size: 48px;
    line-height: 50px;
    font-weight: 600;

    @media only screen and (min-width: 992px) and (max-width: 1199px),
      only screen and (max-width: 991px) {
      font-size: 40px;
    }

    @media only screen and (max-width: 767px) {
      font-size: 30px;
      line-height: 30px;
    }

    @media only screen and (max-width: 575px) {
      font-size: 22px;
      line-height: 22px;
    }

    @media only screen and (max-width: 479px) {
      font-size: 16px;
      line-height: 16px;
    }
  }

  .slick-active .pt-des {
    animation: bounceInLeft 2s;
  }

  .pt-des p {
    margin-top: 15px;
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: 700;

    @media only screen and (max-width: 767px) {
      font-size: 16px;
    }

    @media only screen and (max-width: 575px) {
      font-size: 14px;
    }

    @media only screen and (max-width: 479px) {
      font-size: 12px;
      margin-top: 10px;
      margin-bottom: 0px;
    }
  }

  .pt-des p span {
    &:first-child {
      background: #2b75b5;
      color: #ffffff;
      font-size: 12px;
      margin-right: 20px;
      font-weight: 700;
      padding: 6px 5px;
      position: relative;
    }

    &:first-child:after {
      content: "";
      border-left: 10px solid #2b75b5;
      border-top: 13px solid transparent;
      border-bottom: 13px solid transparent;
      border-right: 10px solid transparent;
      position: absolute;
      top: 0;
      right: -20px;
    }

    &:last-child {
      color: #2b75b5;
    }
  }

  .slick-active a {
    animation: bounceInLeft 1.5s;
  }

  .slider_content a {
    background: #2d75b5;
    color: #ffffff;
    font-size: 12px;
    font-weight: 900;
    text-transform: uppercase;
    display: inline-block;
    line-height: 41px;
    padding: 0 26px;
    margin: 54px 0 0;
    border-radius: 3px;

    @media only screen and (min-width: 992px) and (max-width: 1199px),
      only screen and (max-width: 991px) {
      margin-top: 40px;
    }

    @media only screen and (max-width: 767px) {
      margin-top: 20px;
    }

    @media only screen and (max-width: 575px) {
      margin-top: 14px;
      padding: 0 10px;
      line-height: 26px;
      font-size: 10px;
    }

    &:hover {
      background: #3d3d3d;
    }
  }

  @keyframes bounceInLeft {
    0% {
      opacity: 0;
      transform: translateX(-2000px);
    }
    60% {
      opacity: 1;
      transform: translateX(30px);
    }
    80% {
      transform: translateX(-10px);
    }
    100% {
      transform: translateX(0);
    }
  }

  .banner-top {
    margin-top: 30px;

    @media only screen and (max-width: 991px) {
      margin-top: 20px;
    }
  }

  .right-side-banner .banner-area .single-banner a {
    display: block;
    width: 100%;
  }

  .right-side-banner .banner-area .single-banner a img {
    width: 100%;
  }
`;
