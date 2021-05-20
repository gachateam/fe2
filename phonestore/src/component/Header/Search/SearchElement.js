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
`

export const HeaderSearch = styled.input`
    flex-grow: 10;
`

export const HeaderSearchButton = styled.button`
    flex-grow: 1;
`

export const Test = styled.div`
`