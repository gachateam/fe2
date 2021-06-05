import styled from 'styled-components'

export const ProductCategoryCSS = styled.div`
    
    .nav-tabs{
        border: none;
        .nav-item{
            border:none;
            margin-bottom: -1px;
        }
        .nav-link.active {
            color: #495057;
            background-color: #fff;
            border-color: #dee2e6 #dee2e6 #fff;
        }
        a {
            color: #3d3d3d;
            background: url('./img/bg/line.png') no-repeat center right;
            width: 16.6666%;
            font-size: 16px;
            font-weight: 700;
            text-align: center;
            position: relative;
            padding: 25px 0px;

            &:hover {
                background: #408ed4;
                border-radius: 10px;
                transition: 0.3s;
                span {
                    color: #FFFFFF;
                    img {
                        filter: brightness(0) invert(1);
                    }
                }
                &:before {
                    border-top: 15px solid #408ed4;
                }
            }
            span {
                display: inline-block;
                overflow: hidden;
                position: relative;
                width: 100%;
            }
            &:before {
                content: "";
                border-left: 14px solid transparent;
                border-right: 14px solid transparent;
                border-bottom: 7px solid transparent;
                border-top: 9px solid transparent;
                position: absolute;
                bottom: -20px;
                left: 42%;
            }
            @media only screen and (min-width: 768px) and (max-width: 991px), only screen and (max-width: 767px){
                width: 33.3%;
            }
            @media only screen and (max-width: 479px){
                width: 50%;
            }
        }
        .active {
            background-color: #408ed4 !important;
            border-radius: 10px;
            transition: 0.3s;
            &:before {
                content: "";
                border-left: 14px solid transparent;
                border-right: 14px solid transparent;
                border-bottom: 7px solid transparent;
                border-top: 15px solid #408ed4;
                position: absolute;
                bottom: -20px;
                left: 42%;
            }
        }
    }
`