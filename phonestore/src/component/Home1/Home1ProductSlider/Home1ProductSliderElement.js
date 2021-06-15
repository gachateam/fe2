import styled from 'styled-components'

export const Home1ProductSliderCSS = styled.div`
    .action-link {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        text-align: center;
        opacity: 0;
        transition: .3s;
        a {
            display: inline-block;
            background: #555555;
            padding: 0;
            color: #FFFFFF;
            border: none;
            line-height: 20px;
            height: 20px;
            width: 20px;
            font-size: 0;
            text-align: center;
            text-transform: capitalize;
            border-radius: 100%;
            margin-right: 5px;

            &:hover {
                background: #408ed4;
                border-color: #408ed4;
                color: #FFFFFF;
                transition: all 300ms ease-in;
            }
        }
    }

    .item-product:hover .action-link a {
        font-size: 16px;
        height: 36px;
        width: 36px;
        line-height: 36px;
    }
    .item-product:hover .action-link {
        opacity: 1;
        transition: 0.3s;
    }
`

export const Cart = styled.div`
    position: absolute;
    right: 10px;
    bottom: 20px;
    transition: 0.3s;

    a {
        background: #c2c2c2;
        border-radius: 100%;
        height: 40px;
        width: 40px;
        text-align: center;
        -webkit-transition: 0.3s;
        -o-transition: 0.3s;
        transition: 0.3s;
        display: flex;
        align-items: center;
        justify-content: center;
        
    }

    svg{
        font-size: 24px;
        line-height: 40px;
    }
    &:hover a svg {
        color: #FFFFFF;
        transition: 0.3s;
    }
    &:hover a {
        background: #408ed4;
        transition: 0.3s;
    }
    

`