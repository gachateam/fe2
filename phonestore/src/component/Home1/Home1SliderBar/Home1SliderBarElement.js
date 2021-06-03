import styled from 'styled-components'

export const ProductListSliderBar = styled.div`
    .slick-arrow {
        top: -36px;
    }
    .yellow{
        color: yellow;
    }
    .default-star{
        color:#a8a8a8;
    }
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