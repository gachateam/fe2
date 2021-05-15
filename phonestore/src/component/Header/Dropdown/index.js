import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap';
import { HeaderTopRightLink } from '../HeaderElement'
import { ImageLanguage, HeaderAngleDown, HeaderBoxDropdown, HeaderBoxDropdownLink } from './DropdownElement';

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <HeaderTopRightLink
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
        style={{ zIndex: 10 }}
    >
        {children}
        <HeaderAngleDown />
    </HeaderTopRightLink>
));

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
const CustomMenu = React.forwardRef(({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
    // eslint-disable-next-line
    const [value, setValue] = useState('');

    //custom animation
    // const show = className.split(' ')[1] == 'show';

    // const styleCustom = {
    //     ...style,
    //     top: '10%',
    //     transformStyle: 'preserve-3d',
    //     transform: (show?'rotateX(0deg)':'rotateX(-90deg)')+"translateY(50%)"
    // }
    
    return (
        <HeaderBoxDropdown
            ref={ref}
            style={style}
            className={className}
            aria-labelledby={labeledBy}
        >
            {React.Children.toArray(children).filter(
                (child) => !value || child.props.children.toLowerCase().startsWith(value),
            )}

        </HeaderBoxDropdown>
    );
});

const CustomItem = React.forwardRef(({ children, onClick }, ref) => {
    // eslint-disable-next-line
    const [value, setValue] = useState('');

    return (
        <li>
            <HeaderBoxDropdownLink
                href="#"
                ref={ref}
                onClick={(e) => {
                    e.preventDefault();
                    onClick(e);
                }}
            >
                {children}
            </HeaderBoxDropdownLink>
        </li>
    );
});

export class Language extends React.Component {
    constructor() {
        super();

        this.state = {
            dropDownValue: "English"
        }
        this.Language = {
            language: ["English", "Francis"],
            image: ["../../img/imgLanguage/1.jpg", "../../img/imgLanguage/2.jpg"]
        }
    }

    changeValue(text) {
        this.setState({ dropDownValue: text })
    }

    render() {
        return (
            <Dropdown>
                <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components" >
                    <ImageLanguage src="../../img/imgLanguage/1.jpg" />
                    <span>{this.state.dropDownValue}</span>
                </Dropdown.Toggle>

                <Dropdown.Menu as={CustomMenu}>
                    {this.Language.language.map((data, index) => (
                        <Dropdown.Item
                            key={index}
                            as={CustomItem}
                            eventKey="1"
                            onClick={(e) => this.changeValue(e.target.textContent)}
                        >
                            <ImageLanguage src={this.Language.image[index]} />
                            {data}
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown >
        );
    }
}

export class USD extends React.Component {
    constructor() {
        super();

        this.state = {
            dropDownValue: "USD $"
        }
        this.usd = {
            myUsd: ["USD $", "EUR €"]
        }
    }

    changeValue(text) {
        this.setState({ dropDownValue: text })
    }
    render() {
        return (
            <Dropdown>
                <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                    <span>{this.state.dropDownValue}</span>
                </Dropdown.Toggle>

                <Dropdown.Menu as={CustomMenu}>
                    {this.usd.myUsd.map((data, index) => (
                        <Dropdown.Item
                            as={CustomItem}
                            key={index}
                            eventKey={index.toString()}
                            onClick={(e) => this.changeValue(e.target.textContent)}
                        >
                            {data}
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        );
    }
}

export class MyAccount extends React.Component {
    setting = {
        setting: ["My Account", "Checkout", "Sign In"]
    }
    render() {
        return (
            <Dropdown>
                <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                    <span>My Account</span>
                </Dropdown.Toggle>

                <Dropdown.Menu as={CustomMenu} >
                    {
                        this.setting.setting.map((data, index) => (
                            <Dropdown.Item
                                key={index}
                                as={CustomItem}
                                title={data}
                                eventKey={index}
                            >
                                {data}
                            </Dropdown.Item>
                        ))
                    }
                </Dropdown.Menu>
            </Dropdown>
        );
    }
}

//custom animation
export class DropdownAnimation extends React.Component {
    constructor() {
        super();

        this.state = {
            dropDownValue: "English"
        }
        this.Language = {
            language: ["English", "Francis"],
            image: ["../../img/imgLanguage/1.jpg","../../img/imgLanguage/2.jpg"]
        }
    }

    changeValue(text) {
        this.setState({ dropDownValue: text })
    }

    render() {
        return (
            <Dropdown>
                <Dropdown.Toggle
                    as={CustomToggle}
                    id="dropdown-custom-components"
                >
                    <ImageLanguage src="../../img/imgLanguage/1.jpg" />
                    <span>{this.state.dropDownValue}</span>
                </Dropdown.Toggle>

                <Dropdown.Menu
                    as={CustomMenu}
                >
                    {this.Language.language.map((data, index) => (
                        <Dropdown.Item
                            key={index}
                            as={CustomItem}
                            eventKey="1"
                            onClick={(e) => this.changeValue(e.target.textContent)}
                        >
                            <ImageLanguage src={this.Language.image[index]} />
                            {data}
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown >
        );
    }
}