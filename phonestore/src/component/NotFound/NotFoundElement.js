import styled from 'styled-components'

export const NotFoundCSS = styled.div`
    padding: 150px 0px 100px 0px;
    text-align: center;

    h2{
        color: #3d3d3d;
        font-size: 35px;
        margin-top: 0;
        text-transform: uppercase;
    }

    p{
        color: #3d3d3d;
        font-size: 22px;
        font-weight: 300;
        line-height: 37px;
        margin: 20px auto 40px;
        text-align: center;
        width: 60%;
    }

    .hom_btn .btn-secondary {
        background: #408ed4;
        border-radius: 35px;
        -webkit-box-shadow: none;
        box-shadow: none;
        color: #FFFFFF;
        display: inline-block;
        font-size: 12px;
        font-weight: bold;
        height: 40px;
        line-height: 40px;
        margin-top: 40px;
        padding: 0 30px;
        text-shadow: none;
        text-transform: uppercase;
        -webkit-transition: all 0.3s ease 0s;
        -o-transition: all 0.3s ease 0s;
        transition: all 0.3s ease 0s;
        white-space: nowrap;
        &:hover {
            background: #3d3d3d;
        }
    }
`