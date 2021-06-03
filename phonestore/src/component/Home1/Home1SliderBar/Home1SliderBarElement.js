import styled from 'styled-components'

export const ProductListSliderBar = styled.div`
    

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