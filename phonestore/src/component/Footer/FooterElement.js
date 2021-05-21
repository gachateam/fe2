import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const FooterBottom = styled.div`
padding: 20px 0px;
border-top: 1px solid #ebebeb;
`

export const FooterTop = styled.div`
margin-top: 50px;
margin-bottom: 40px;
`

export const FooterClass = styled.div`
margin-top: 30px;
`

export const FooterLogo = styled.div`
margin-bottom: 40px;
`

export const Address = styled.div`
margin-top: 30px;
margin-bottom: 20px;
`

export const WidgetBox = styled.div`
margin-top: 30px;
`

export const WidgetSingleBox = styled.div`
display: flex;
`

export const WidgetSingleBoxUl = styled.ul`
display: inherit;
`

export const NewsLetter = styled.div`
background: #408ed4;
padding: 35px 0px;
align-items: center!important;
`

export const NewsLetterInner = styled.div`
display: flex;
align-items: center!important
`

export const NewsLetterForm = styled.form`
display: flex;
`

export const NewsLetterEmailBox = styled.input`
width: 76%;
height: 50px;
border: none;
border-radius: 30px 0px 0px 30px;
padding: 10px 10px 10px 20px;
margin-right: 0px;
`

export const NewsLetterBtn = styled.button`
padding: 10px 33px;
line-height: 30px;
text-transform: capitalize;
font-size: 16px;
font-weight: 700;
color: #3d3d3d;
background: #f1d411;
border: 0;
border-radius: 0 30px 30px 0;
`

export const FooterSocialFaceB = styled(Link)`
background: #448ccb;
margin-right: 20px;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;
&:hover{
    background: #3d3d3d;
    transition: 0.3s;
}
`
export const FooterSocialTwt = styled(Link)`
background: #00bff3;
margin-right: 20px;
text-align: center;
border-radius: 5px;
align-items: center;
display: flex;
align-items: center;
justify-content: center;
&:hover{
    background: #3d3d3d;
    transition: 0.3s;
}
`
export const FooterSocialYt = styled(Link)`
background: #d02d2d;
margin-right: 20px;
text-align: center;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;
&:hover{
    background: #3d3d3d;
    transition: 0.3s;
}
`
export const FooterSocialGPlus = styled(Link)`
background: #f85858;
margin-right: 20px;
text-align: center;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;
&:hover{
    background: #3d3d3d;
    transition: 0.3s;
}
`
export const FooterSocialLink = styled(Link)`
background: #555555;
margin-right: 20px;
text-align: center;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;
&:hover{
    background: #3d3d3d;
    transition: 0.3s;
}
`
export const WidgetsContainerh6 = styled.h6`
margin-bottom: 35px;
font-size: 18px;
font-weight: 700;
color: #3d3d3d;
`

export const WCLineHeight = styled.li`
line-height: 36px;
`

export const FooterMenuA = styled(Link)`
text-decoration: none;
color: #3d3d3d;
&:hover{
    padding-left: 5px;
    text-decoration: none;
    color: #408ed4;
    transition: 0.3s;
}
`

export const WidgetSingleBoxA = styled(Link)`
text-decoration: none;
color: #3d3d3d;
padding: 0px 10px;
border-right: 1px solid #cccccc;
line-height: 1;
&:hover{
    text-decoration: none;
    color: #408ed4;
    transition: 0.3s;
}
`

export const WidgetSingleBoxE = styled.li`
&:last-child > a{
    border-right: 0px;
}
`

export const NewsLetterTitle = styled.div`
margin-left: 30px
`

export const SignTitle = styled.h1`
font-size: 30px;
color: #FFFFFF;
margin-bottom: 10px;
`

export const HasThemes = styled(Link)`
text-decoration: none;
color: #3d3d3d;
&:hover{
    text-decoration: none;
    color: #408ed4;
}
`