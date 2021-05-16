import styled from 'styled-components'
import { HeaderBoxDropdownLink } from '../Dropdown/DropdownElement'
export const Logo = styled.img`
`

export const Blockcard = styled.div`
    position: relative;
    top: 4px;
`

export const HeaderMiddleInner = styled.div`
    display:flex;
    justify-content: space-between;
    align-items:center;

    @media screen and (max-width: 991px){
        justify-content:flex-end;
    }

`

export const HearderMiddleItem = styled.li`
    display: inline-block;
    position: relative;
`

export const HeaderMiddleList = styled.ul`
    display: flex;
    align-items: center;
    height:40px;
    width: 80%;
    
    @media screen and (max-width: 991px){
        display: none;
    }
`

export const HeaderMiddleLink = styled(HeaderBoxDropdownLink)`
    font-size: 16px;
    font-weight: 700;
    color: #3d3d3d;
    line-height: 4;
    padding-right: 20px;
`

export const HeaderDropToggle = styled.a`
    line-height: inherit;
    display: inline-block;
    cursor: pointer;
    text-decoration: none;
    color: inherit;

    &:hover{
        text-decoration:none;
    }

    
`

export const BlockcardImage = styled.img`
    display: block;
    float: left;
    position: relative;
    right: 10px;
`

export const BlockcardSpan = styled.span`
    display: block;
    overflow: hidden;
    position: relative;
`

export const BlockcardSpanMyCard = styled(BlockcardSpan)`
    font-size: 16px;
    font-weight: 700;
`

export const BlockCardSpanTotalItem = styled(BlockcardSpan)`
    color: #000000;
`

export const BlockCardSpanCount = styled(BlockcardSpan)`
    position: absolute;
    top: -10px;
    left: 20px;
    background: #408ed4;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    border-radius: 100%;
    height: 25px;
    width: 25px;
    text-align: center;
    line-height: 22px;
`