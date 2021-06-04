import styled from 'styled-components'

export const Home1Styled = styled.div`
    

`

export const BannerArea = styled.div`
    .single-banner {
        overflow: hidden;
        position: relative;
    }
    .single-banner:before {
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
    .single-banner:after {
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
    .single-banner:hover:before {
        height: 100%;
        opacity: 0;
        transition-duration: 1.3s;
        width: 100%;
    }
    .single-banner:hover:after {
        height: 100%;
        opacity: 0;
        transition-duration: 1.3s;
        width: 100%;
    }
    @media only screen and (max-width: 991px) {
        float: left;
        width: 44%;
        text-align: right;
    }
`