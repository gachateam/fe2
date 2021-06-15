import styled from 'styled-components'

export const ProductOfferSliderCSS = styled.div`
    .flash-single-item {
        border: 2px solid #408ed4;
        padding: 24px;
        position: relative;
        .product-item {
            overflow: hidden;

            .offer-bar {
                position: absolute;
                top: -6px;
                left: -6px;
                z-index: 99;
            }
        }
        .product-thumb {
            width: 40%;
            float: left;
            display: block;
            overflow: hidden;
            position: relative;
            padding-bottom: 10px;
            text-align: center;
            z-index:10;

            .label-product-discount {
                position: absolute;
                top: 9px !important;
                right: 9px;
                display: inline-block;
                background: #e12e2e;
                color: #FFFFFF;
                border-radius: 100% 100% 100% 0%;
                text-align: center;
                line-height: 32px;
                height: 32px;
                width: 32px;
                font-size: 11px;
                font-weight: 700;
            }

            @media only screen and (max-width: 767px), 
            only screen and (max-width: 575px), 
            only screen and (max-width: 479px) {
                width: 100%;
                max-width: 300px;
                float: none;
                margin: 0 auto;
            }
        }

        .product-caption {
            float: left;
            width: 55%;
            padding: 24px;

            .product-name a h6{
                color: #3c74b9;
            }

            @media only screen and (max-width: 767px),
                    only screen and (max-width: 575px),
                    only screen and (max-width: 479px) {
                float: none;
                width: 100%;
            }
        }
    }
    .slick-slide {
        padding: 40px 5px 20px 5px;
    }
    
    .single-countdown {
        display: inline-block;
        margin-right: 10px;
        text-align: center;

        span.single-countdown_time {
            font-size: 18px;
            font-weight: 700;
            line-height: 45px;
            margin-bottom: 5px;
            background: #2d75b5;
            color: #FFFFFF;
            height: 45px;
            width: 60px;
            text-align: center;
            border-radius: 5px;
            display: block;
            overflow: hidden;
        }
    }

`