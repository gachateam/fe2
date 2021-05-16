import styled from 'styled-components'
import { FaAngleDown } from 'react-icons/fa'

export const ImageLanguage = styled.img`
    margin-right: 5px;
`
export const HeaderAngleDown = styled(FaAngleDown)`
    padding-left: 3px;
    font-size: 15px;
`

export const HeaderBoxDropdown = styled.ul`
    background: #FFFFFF;
    -webkit-box-shadow: 0 6px 12px rgb(0 0 0 / 18%);
    box-shadow: 0 6px 12px rgb(0 0 0 / 18%);
    right: 0;
    position: absolute;
    top: 100%;
    width: 110px;
    z-index: 1200;
    margin: 10px 0;
    display: block;
    transition: all .5s;
    overflow:hidden;
`

export const HeaderBoxDropdownLink = styled.a`
    display: block;
    padding: 3px 10px;
    font-size: 12px;

    color: inherit;
    transition: 0.3s;
    display:flex;
    align-items:center;

    &:hover{
        text-decoration: none;
        color: #408ed4;
    }
`