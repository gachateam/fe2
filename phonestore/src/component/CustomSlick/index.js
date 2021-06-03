import React from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { CustomSlickStyle } from './CustomSlickElement';

const CustomSlick = (props) => {
    return (
        <CustomSlickStyle>
            <Slider {...props.settings}>
                {props.children}
            </Slider>
        </CustomSlickStyle>
    )
}

export default CustomSlick
