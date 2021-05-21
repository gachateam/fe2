// eslint-disable-next-line
import React, { useState } from 'react'
// eslint-disable-next-line
import { Container, Dropdown, Navbar } from 'react-bootstrap';
// import { FaBars } from 'react-icons/fa'
import {
    HeaderCategoryesLink,
    HeaderCategoryIcon,
    HeaderCategoryToggle,
    HeaderCustomOption,
    HeaderMenuStyle,
    HeaderSearch,
    HeaderSearchButton,
    SearchBox
} from './SearchElement'
// eslint-disable-next-line
import { Link } from 'react-router-dom'

//set onclick category toggle
const ShowList = () => {
    let toggle = document.querySelector('.select-option.nice-select')
    if (toggle.classList.toggle('open')) {
        document.addEventListener('click', clickDocument, true)
    } else {
        document.removeEventListener('click', clickDocument, true)
    }
}

const clickDocument = (e) => {
    let toggle = document.querySelector('.select-option.nice-select')
    let current = document.querySelector('.current')
    let topCat = document.querySelector('.top-cat')
    let currentSelect = document.querySelector('.current-select')

    if (toggle.classList.contains('open') && ![current, topCat, currentSelect].includes(e.target)) {
        toggle.classList.remove('open')
    }
}

export const DropdownCategory = () => {

    return (
        <HeaderMenu>
            <div className="col-md-3">
                <div className="categoryes-menu-bar">
                    <HeaderCategoryToggle className="categoryes-menu-btn category-toggle d-flex align-items-center">
                        <div>
                            <HeaderCategoryesLink to="/">All Categories</HeaderCategoryesLink>
                        </div>
                        <div>
                            <HeaderCategoryIcon />
                        </div>
                    </HeaderCategoryToggle>
                </div>
            </div>
            <div className="col-md-9">
                <div className="search-container">
                    <form action="#" className="form-search">
                        <div className="top-cat" onClick={ShowList}>
                            <select className="select-option" name="select" id="category2" style={{ display: "none" }}>
                                <option value="1">All categories</option>
                                <option value="12">All categories</option>
                                <option value="27">- - Women </option>
                                <option value="30">- - - - Dresses</option>
                                <option value="31">- - - - Shirts &amp; Blouses</option>
                                <option value="32">- - - - Blazers</option>
                                <option value="33">- - - - Lingerie</option>
                                <option value="34">- - - - Jeans</option>
                                <option value="28">- - Men</option>
                                <option value="35">- - - - Shorts</option>
                                <option value="36">- - - - Sportswear</option>
                                <option value="37">- - - - Swimwear</option>
                                <option value="38">- - - - Jackets &amp; Suits</option>
                                <option value="39">- - - - T-shirts &amp; Tank Tops</option>
                                <option value="29">- - Kids </option>
                                <option value="40">- - - - Trousers</option>
                                <option value="41">- - - - Shirts &amp; Tops</option>
                                <option value="42">- - - - Knitwear</option>
                                <option value="43">- - - - Jackets</option>
                                <option value="44">- - - - Sandals</option>
                                <option value="13">Electronics</option>
                                <option value="45">- - Cameras</option>
                                <option value="49">- - - - Cords and Cables</option>
                                <option value="50">- - - - gps accessories</option>
                                <option value="51">- - - - Microphones</option>
                                <option value="52">- - - - Wireless Transmitters</option>
                                <option value="46">- - Audio</option>
                                <option value="53">- - - - Other Accessories</option>
                                <option value="54">- - - - Portable Audio</option>
                                <option value="55">- - - - Satellite Radio</option>
                                <option value="56">- - - - Visual Accessories</option>
                                <option value="47">- - Cell Phones</option>
                                <option value="57">- - - - iPhone</option>
                                <option value="58">- - - - Samsung Galaxy</option>
                                <option value="59">- - - - SIM Cards</option>
                                <option value="60">- - - - Prepaid Cell Phones</option>
                                <option value="48">- - TV &amp; Video</option>
                                <option value="61">- - - - 4K Ultra HDTVs</option>
                                <option value="62">- - - - All TVs</option>
                                <option value="63">- - - - Refurbished TVs</option>
                                <option value="64">- - - - TV Accessories</option>
                                <option value="14">Toys &amp; Hobbies</option>
                                <option value="65">- - Books &amp; Board Games</option>
                                <option value="67">- - - - Arts &amp; Crafts</option>
                                <option value="68">- - - - Baby &amp; Toddler Toys</option>
                                <option value="69">- - - - Electronics for Kids</option>
                                <option value="70">- - - - Dolls &amp; Accessories</option>
                                <option value="66">- - Baby Dolls</option>
                                <option value="71">- - - - Baby Alive Dolls</option>
                                <option value="72">- - - - Barbie</option>
                                <option value="73">- - - - Baby Annabell</option>
                                <option value="74">- - - - Bratz </option>
                                <option value="15">Sports &amp; Outdoors</option>
                                <option value="16">Smartphone &amp; Tablets</option>
                                <option value="17">Health &amp; Beauty</option>
                                <option value="18">Computers &amp; Networking</option>
                                <option value="19">Accessories</option>
                                <option value="20">Jewelry &amp; Watches</option>
                                <option value="21">Flashlights &amp; Lamps</option>
                                <option value="22">Cameras &amp; Photo</option>
                                <option value="23">Holiday Supplies &amp; Gifts</option>
                                <option value="24">Automotive </option>
                                <option value="25">cosmetic</option>
                            </select>
                            <div className="nice-select select-option" tabIndex="0">
                                <div className="current-select">
                                    <span className="current" style={{ color: '#666', cursor: 'pointer' }}>All categories</span>
                                </div>
                                <ul className="list">
                                    <HeaderCustomOption data-value="1" className="option selected focus">All categories</HeaderCustomOption>
                                    <HeaderCustomOption data-value="12" className="option">All categoriestesstetse etsest</HeaderCustomOption>
                                    <HeaderCustomOption data-value="27" className="option">- - Women </HeaderCustomOption>
                                    <HeaderCustomOption data-value="30" className="option">- - - - Dresses</HeaderCustomOption>
                                    <HeaderCustomOption data-value="31" className="option">- - - - Shirts &amp; Blouses</HeaderCustomOption>
                                    <HeaderCustomOption data-value="32" className="option">- - - - Blazers</HeaderCustomOption>
                                    <HeaderCustomOption data-value="33" className="option">- - - - Lingerie</HeaderCustomOption>
                                    <HeaderCustomOption data-value="34" className="option">- - - - Jeans</HeaderCustomOption>
                                    <HeaderCustomOption data-value="28" className="option">- - Men</HeaderCustomOption>
                                    <HeaderCustomOption data-value="28" className="option">- - Men</HeaderCustomOption>
                                    <HeaderCustomOption data-value="28" className="option">- - Men</HeaderCustomOption>
                                    <HeaderCustomOption data-value="28" className="option">- - Men</HeaderCustomOption>
                                    <HeaderCustomOption data-value="28" className="option">- - Men</HeaderCustomOption>
                                    <HeaderCustomOption data-value="28" className="option">- - Men</HeaderCustomOption>
                                    <HeaderCustomOption data-value="28" className="option">- - Men</HeaderCustomOption>
                                    <HeaderCustomOption data-value="28" className="option">- - Men</HeaderCustomOption>
                                    <HeaderCustomOption data-value="28" className="option">- - Men</HeaderCustomOption>
                                    <HeaderCustomOption data-value="28" className="option">- - Men</HeaderCustomOption>
                                    <HeaderCustomOption data-value="28" className="option">- - Men</HeaderCustomOption>
                                    <HeaderCustomOption data-value="28" className="option">- - Men</HeaderCustomOption>
                                    <HeaderCustomOption data-value="28" className="option">- - Men</HeaderCustomOption>
                                    <HeaderCustomOption data-value="28" className="option">- - Men</HeaderCustomOption>
                                </ul>
                            </div>
                        </div>
                        <SearchBox className="search_box">
                            <HeaderSearch className="header-search" placeholder="Enter your search key ..." type="text" />
                            <HeaderSearchButton className="header-search-button" type="submit">Search</HeaderSearchButton>
                        </SearchBox>
                    </form>
                </div>
            </div>
        </HeaderMenu>
    )
}

const HeaderMenu = React.forwardRef((props, ref) => (
    <HeaderMenuStyle className="header-menu header-bottom-area theme-bg">
        <div className="container">
            <div className="row">
                {props.children}
            </div>
        </div>
    </HeaderMenuStyle>
));