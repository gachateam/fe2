import styled from 'styled-components'

export const CustomSlickStyle = styled.div`
    .slick-dots {
        position: absolute;
        bottom: 20px;
        text-align: center;
        left: 50%;
        transform: translatex(-50%);
        display: block;
    }

    .slick-dots li.slick-active{
        background: #FFFFFF;
        border-color: #408ed4 !important;
        transform: scale3d(0.8, 0.8, 0.8);
    }

    .slick-dots li{
        display: inline-block;
        margin: 0 3px;
        cursor: pointer;
        font-size: 0;
        width: 20px;
        height: 20px;
        background: #FFFFFF !important;
        border: 5px solid #333333 !important;
        transform: scale3d(0.7, 0.7, 0.7);
        border-radius: 100%;
        transition: all 300ms linear;
    }

    .slick-dots li button {
        background: none;
        border: none;
    }

    .slick-dots li button::before{
        display: none;
    }

    .slick-arrow{
        top: -28px;
        border: 0px;
        color: #a8a8a8;
        font-size: 24px;
        cursor: pointer;
        z-index: 99;
        transition: 0.3s;
    }

    .slick-arrow:hover{
        color: #408ed4;
    }

    .slick-prev{
        position: absolute;
        right: 14px;
        background: #FFFFFF;
        padding-right: 5px;
    }

    .slick-next{
        position: absolute;
        right: 0px;
        background: #FFFFFF;
        padding-left: 5px;
    }

    .product-caption{
        padding: 17px 14px 20px 14px;
        background: #FFFFFF;
        position: relative;
    }

    .product-caption .product-name a {
        line-height: 22px;
        display: block;
        overflow: hidden;
        color: #3c74b9;
        font-size: 14px;
        margin-bottom: 5px;
        -webkit-transition: 0.3s;
        -o-transition: 0.3s;
        transition: 0.3s;
        font-weight: 700;
    }
    .rating {
        margin-bottom: 4px;
    }

    .price-box .regular-price {
        font-size: 14px;
        font-weight: 900;
        color: #e12e2e;
        margin-right: 5px;
    }

    .price-box .old-price {
        font-size: 14px;
        font-weight: 600;
        color: #acacac;
    }
    .yellow{
        color: yellow;
    }
    .default-star{
        color:#a8a8a8;
    }

    .product-thumb {
        display: block;
        position: relative;
        padding-bottom: 10px;
        text-align: center;

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
        .label-product-new{
            position: absolute;
            top: 9px !important;
            left: 9px;
            display: inline-block;
            background: #408ed4;
            color: #FFFFFF;
            border-radius: 100% 100% 100% 0%;
            text-align: center;
            line-height: 32px;
            height: 32px;
            width: 32px;
            font-size: 11px;
            font-weight: 700;
        }
    }

`