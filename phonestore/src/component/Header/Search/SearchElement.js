// eslint-disable-next-line
import styled, { css, keyframes } from 'styled-components'
// eslint-disable-next-line
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

export const HeaderMenuStyle = styled.div`
    background: #408ed4;
`

export const HeaderCategoryToggle = styled.div`
    position: relative;
    z-index: 9;
    background: #176ab4;
    padding: 10px 20px;
    overflow: hidden;
    justify-content: space-between;

    @media screen and (max-width: 991px){
        width: 270px;
    }

    @media screen and (max-width: 479px){
        width: 174px;
    }
`

export const HeaderCategoryesLink = styled(Link)`
    color: #FFFFFF;
    font-size: 18px;
    font-weight: 700;
    text-transform: capitalize;
    line-height: 44px;
    cursor: pointer;
    text-decoration: none;

    &:hover{
        cursor: pointer;
        color: #FFFFFF;
    }

    @media screen and (max-width: 479px){
        font-size: 14px;
    }
`

export const HeaderCategoryIcon = styled(FaBars)`
    font-size: 14px;
    font-weight: 500;
    color: #FFFFFF;
    font-size: 18px;
    font-weight: 700;
    text-transform: capitalize;
    line-height: 44px;
    cursor: pointer;
`

export const HeaderCustomOption = styled.li`
    cursor: pointer;
    font-weight: 400;
    line-height: 40px;
    list-style: none;
    min-height: 40px;
    outline: none;
    padding-left: 18px;
    padding-right: 29px;
    text-align: left;
    -webkit-transition: all 0.2s;
    -o-transition: all 0.2s;
    transition: all 0.2s;
`

export const SearchBox = styled.div`
    display: flex;
    width: 100%;
    align-items: stretch;
    height:44px;
    position: relative;
`

export const HeaderSearch = styled.input`
    flex-grow: 5;
    width: 70%;
    height: 44px;
    padding-right: 10px;
    padding-left: 18px;
    border: 0px;
    outline: 0px;
`

export const HeaderSearchButton = styled.button`
    flex-grow: 1;
    height: 44px;
    line-height: 30px;
    border: 2px solid #FFFFFF;
    text-align: center;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 700;
    padding: 0 27px;
    border-radius: 0px 25px 25px 0px;
    transition: all 300ms ease-in;
    background: #408ed4;

    &:hover{
        background: #333333;
        color: #FFFFFF;
    }
`

export const CategoryMenus = styled.nav`
    background: #FFFFFF;
    border-radius: 0 0 10px 10px;
    border: 2px solid #176ab4;
    border-top: none;
    display: none;
    padding: 0;
    position: absolute;
    z-index: 9;

    & > ul > li > a {
        display: flex;
        align-items: center;
        justify-content: space-between;
        overflow: hidden;
        line-height: 52px;
        word-wrap: break-word;
        background: #FFFFFF;
        color: #3d3d3d;
        font-size: 14px;
        font-weight: 400;
        margin: 0 26px;
        border-bottom: 1px solid #ebebeb;
        transition: color 300ms linear;
    }
    & > ul > li > a:hover{
        color: #408ed4;
        padding-left: 3px;
        transition: .3s;
    }

    @media screen and (max-width: 991px){
        width: 270px;
    }
    @media screen and (max-width: 479px){
        width: 174px;
    }
    @media screen and (min-width: 991px){
        width: 216px;
    }
    @media screen and (min-width: 1200px){
        width: 261px;
    }
    @media screen and (min-width: 1400px){
        width: 306px;
    }
`

export const CategoryHoverRight = styled.li`
    position: relative;

    a {
        display: block;
        overflow: hidden;
        line-height: 52px;
        word-wrap: break-word;
        background: #FFFFFF;
        color: #3d3d3d;
        font-size: 14px;
        font-weight: 400;
        margin: 0 26px;
        border-bottom: 1px solid #ebebeb;
        transition: color 300ms linear;
    }
`

export const CategoryHoverRightCatSubmenu = styled.li`
    position: relative;

    & > a:hover{
        color: #408ed4;
        padding-left: 3px;
        transition: .3s;
    }

    &:hover > ul{
        top: 0;
        opacity: 1;
        visibility: visible;
        transition: .3s;
    }

    @media screen and (max-width: 991px){
        display: none;
    }
`

export const CatSubmenu = styled.ul`
    width: 900px;
    background: #FFFFFF;
    box-shadow: 0 0 8px 1px rgb(0 0 0 / 10%);
    left: 101%;
    opacity: 0;
    position: absolute;
    top: 30px;
    visibility: hidden;
    padding: 30px;
    transition: .3s;
`

export const CatMegaTitle = styled.li`
    width: 33.33%;
    float: left;

    > a{
        font-size: 16px;
        font-weight: 900;
        text-transform: uppercase;
        color: #000000;
        margin-bottom: 25px;
    }

    ul li{
        margin-bottom: 10px;
    }

    ul li:hover{
        margin-left: 10px;
        transition: .3s;
        display: block;
    }
`

export const CatHasChildren = styled.li`
    display: none;
    position: relative;

    > span.menu-expand {
        position: absolute;
        right: 25px;
        top: 15px;
    }

    > span.menu-expand.rotate {
        transform: rotate(180deg);
    }

    ul.sub-menu {
        padding-left: 20px;
    }
    
    a {
        display: block;
        overflow: hidden;
        line-height: 53px;
        word-wrap: break-word;
        background: #FFFFFF;
        color: #3d3d3d;
        font-size: 14px;
        font-weight: 400;
        margin: 0 26px;
        border-bottom: 1px solid #e4e3e3;
    }

    @media screen and (max-width: 991px){
        display: block;
    }
`