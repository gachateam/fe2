// eslint-disable-next-line
import styled from 'styled-components'
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
    width: 306px;
    background: #FFFFFF;
    border-radius: 0 0 10px 10px;
    border: 2px solid #176ab4;
    border-top: none;
    padding: 0;
    position: absolute;
    z-index: 9;

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