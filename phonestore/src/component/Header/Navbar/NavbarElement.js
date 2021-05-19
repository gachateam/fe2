import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { HeaderBoxDropdownLink } from '../Dropdown/DropdownElement'


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
    justify-content: center;
    font-size: 16px;
    font-weight: 700;
    color: #3d3d3d;
    line-height: 4;
    padding-right: 20px;
    text-decoration: none;
`

export const HeaderDropToggle = styled(Link)`
    line-height: inherit;
    display: inline-block;
    cursor: pointer;
    text-decoration: none;
    color: inherit;

    &:hover{
        text-decoration:none;
    }

    &::after{
        display: none;
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

export const BlockcardDropdown = styled.div`
    position: absolute;
    display: block;
    -webkit-box-shadow: 0px 0px 50px 0px rgb(0 0 0 / 10%);
    box-shadow: 0px 0px 50px 0px rgb(0 0 0 / 10%);
    border-radius: 5px;
    right: 0px;
    width: 355px;
    background: #FFFFFF;
    transition: all 1s;
    z-index: 999;    
    transform: ${props => props.show ? 'translateX(-50%)' : 'translateX(300%)'};
`

export const BlockcardList = styled.ul`
    padding: 20px;
`

export const BlockcardCartDetail = styled.li`
    margin-bottom: 20px;
    border-bottom: 1px solid #e4e3e3;
    display: block;
    overflow: hidden;
    padding-bottom: 20px;

    &:active{
        background-color: transparent;
    }
`

//card img
export const BlockcardInnerCartImg = styled.div`
    position: relative;
    display: block;
`

export const BlockcardInnerCartImgImage = styled(BlockcardImage)`
    position: static;
    margin-right: 10px;
`

export const BlockcardInnerCartImgSpan = styled(BlockcardSpan)`
    position: absolute;
    top: 5px;
    left: 5px;
    position: absolute;
    background: #408ed4;
    border: 1px solid #FFFFFF;
    color: #FFFFFF;
    border-radius: 100%;
    height: 25px;
    width: 25px;
    text-align: center;
    line-height: 22px;
`

//cart content
export const BlockcardInnerCartContentName = styled(BlockcardSpan)`
    overflow: inherit;
    position: static;
`

export const BlockcardInnerCartContentLink = styled(HeaderDropToggle)`
    font-weight: 700;
    word-wrap: break-word;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
    color: #408ed4;
    overflow: hidden;
    display: block;
    padding: 0px 25px 0px 0px;

    &:hover{
        color: #3d3d3d;
    }
`

export const BlockcardInnerCartContentPrice = styled(BlockcardSpan)`
    font-size: 14px;
    font-weight: 900;
    color: #e12e2e;
`

export const BlockcardInnerCartContentSize = styled(BlockcardSpan)`
`
