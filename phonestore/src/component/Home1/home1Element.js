import styled from 'styled-components'

export const Home1Styled = styled.div`
    .single-delivery {
        width: 33%;
        display: inline-block;
        border: 1px solid #e4e3e3;
        margin-bottom: 10px;
        margin-left: 1px;
        margin-right: 1px;
        padding: 10px;
        @media only screen and (max-width: 767px) {
            width: 100%;
            display: block;
        }
    }
    .single-shipping {
        text-align: center;
        position: relative;
    }
    .block-wrapper, .block-wrapper2, .block-wrapper3 {
        display: inline-block;
        vertical-align: top;
        background: url('./img/icon/icon1.png') left center no-repeat;
        padding-left: 56px;
        padding-top: 15px;
        padding-bottom: 16px;
    }
    .block-wrapper2 {
        background: url('img/icon/icon2.png') left center no-repeat;
    }
    .block-wrapper3 {
        background: url('img/icon/icon3.png') left center no-repeat;
    }
    .shipping-content .ship-title {
        color: #3d3d3d;
        font-weight: 600;
        text-transform: capitalize;
        margin: 0;
        font-size: 16px;
        line-height: 20px;
        display: block;
        text-align: left;
    }
    .shipping-content p {
        font-size: 14px;
        font-weight: 400;
        line-height: 25px;
        padding-top: 0;
        color: #959595;
    }
`

export const BannerArea = styled.div`
    .single-banner {
        overflow: hidden;
        position: relative;
        
        &:before {
            background: rgba(255, 255, 255, 0.41) none repeat scroll 0 0;
            content: "";
            height: 0;
            left: 0;
            margin: auto;
            opacity: 1;
            position: absolute;
            top: 0;
            width: 0;
            pointer-events: none;
        }
        &:after {
            background: rgba(255, 255, 255, 0.41) none repeat scroll 0 0;
            bottom: 0;
            content: "";
            height: 0;
            opacity: 1;
            position: absolute;
            right: 0;
            width: 0;
            pointer-events: none;
        }
        &:hover:before {
            height: 100%;
            opacity: 0;
            transition-duration: 1.3s;
            width: 100%;
        }
        &:hover:after {
            height: 100%;
            opacity: 0;
            transition-duration: 1.3s;
            width: 100%;
        }
    }
    
    @media only screen and (max-width: 991px) {
        float: left;
        width: 44%;
        text-align: right;
    }
    @media only screen and (max-width: 767px) {
        float: none;
        width: 100%;
        text-align: center;
    }
`