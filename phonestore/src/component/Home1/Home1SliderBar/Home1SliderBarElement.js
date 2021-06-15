import styled from 'styled-components'

export const ProductListSliderBar = styled.div`
    .product-list-content .product-caption{
        width: 59%;
        display: block;
        overflow: hidden;
        padding-bottom: 0px;
    }
    .product-list-content .product-list-image {
        display: block;
        overflow: hidden;
        float: left;
        margin-right: 6px;
        width: 100px;
        height: 100px;
        position: relative;
    }

    .product-list-content .product-list-image:hover .block-one{
        opacity: 0;
    }

    .product-list-content .product-list-image:hover .block-two{
        position: absolute;
        top: 0px;
        left: 0px;
        opacity: 1;
    }
    @media only screen and (max-width: 991px) {
        float: left;
        width: 56%;
        margin-left: 0px;
    }
    @media only screen and (max-width: 767px) {
        float: none;
        width: 100%;
        margin-right: 0px;
    }
`

export const BlockTitle = styled.div`
    position: relative;

    &::before{
        position: absolute;
        width: 50%;
        content: "";
        top: 45%;
        left: 0px;
        background: #ebebeb;
        width: 100%;
        height: 1px;
    }

    h6{
        font-size: 18px;
        font-weight: 900;
        display: inline-block;
        overflow: hidden;
        padding-right: 20px;
        background: #FFFFFF;
        position: relative;
        z-index: 2;
    }
`