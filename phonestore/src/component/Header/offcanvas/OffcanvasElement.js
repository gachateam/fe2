import styled from 'styled-components'

export const OffCanvasStyle = styled.div`
    position: absolute;
    right: 60px;
    top: 173px;
    z-index: 9;
    /* display:none; */
    > button {
        background-color: transparent;
        padding: 5px 7px;
        font-size: 30px;
        width: 43px;
        display: flex;
        align-self: center;
        justify-content: center;
        line-height: 39px;
        text-align: center;
        border: 1px solid #FFFFFF;
        color: #FFFFFF;
    }

    input {
        font-size: 12px;
        padding: 0 92px 0 10px;
        width: 100%;
        height: 34px;
        border: 0;
        background: inherit;
        color: #222222;
        font-weight: 400;
        opacity: 0.7;
    }

    .offcanvas-body button{
        min-width: 78px;
        padding: 0 14px;
        top: -1px;
        bottom: -1px;
        right: -1px;
        font-size: 12px;
        text-transform: uppercase;
        border: 0;
        position: absolute;
        background: #408ed4;
        color: #FFFFFF;
        font-weight: 500;
        border-radius: 0 5px 5px 0;
    }

    .search_box{
        position: relative;
        width: 100%;
        border: 1px solid #e4e3e3;
        border-radius: 5px;
    }

    .offcanvas_main_menu li a{
        font-size: 14px;
        font-weight: 400;
        text-transform: capitalize;
        display: block;
        padding-bottom: 10px;
        margin-bottom: 10px;
        border-bottom: 1px solid #e4e3e3;
    }

    .offcanvas_main_menu li:last-child a{
        border-bottom: 0px;
    }

    .offcanvas_footer{
        margin-top: 50px;
        padding-bottom: 50px;
        text-align: center;
    }

    .footer_social ul li a i {
        font-size: 18px;
        color: #FFFFFF;
    }

    @media screen and (min-width: 991px){
        display: none;
    }
`