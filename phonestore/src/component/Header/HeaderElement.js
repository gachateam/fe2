import styled from 'styled-components'
import { Link } from 'react-router-dom'
// import { FaBars } from 'react-icons/fa'

export const HeaderTopRightItem = styled.li`
    display: inline-block;
    position: relative;
    display:flex;
    align-items:center;
`

export const HeaderTopRightBox = styled.div`
    float: right;
    display:flex;
    height:100%;
`

export const HeaderTopRightLink = styled(Link)`
    padding: 10px 15px;
    color: inherit;
    transition: 0.3s;
    display:flex;
    align-items:center;
    text-decoration: none;

    &:hover{
        text-decoration: none;
        color: #408ed4;
    }
`
export const HeaderTopRight = styled.ul`
    display: flex;
`

export const HeaderTopLeft = styled.p`
    font-size: 13px;
    line-height: 44px;
`

export const HeaderTopBorder = styled.div`
    border-bottom: 1px solid #ebebeb;

    @media screen and (max-width: 991px){
        display:none;
    }
`