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
`