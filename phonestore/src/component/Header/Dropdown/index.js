import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap';
import { HeaderTopRightLink } from '../HeaderElement'
import { ImageLanguage, HeaderAngleDown, HeaderBoxDropdown, HeaderBoxDropdownLink } from './DropdownElement';
import { useAuth } from '../../../contexts/AuthContext'
import { useHistory } from 'react-router-dom'

const CustomToggle = React.forwardRef(({ children, onClick, to }, ref) => (
    <HeaderTopRightLink
        to={to}
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
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

const CustomItem = React.forwardRef(({ children, onClick, to }, ref) => {
    return (
        <li>
            <HeaderBoxDropdownLink
                to={to}
                ref={ref}
                onClick={(e) => {
                    onClick(e);
                }}
            >
                {children}
            </HeaderBoxDropdownLink>
        </li>
    );
});

const CustomDropdown = React.forwardRef(({ children }, ref) => {
    return (
        <Dropdown
            style={{ zIndex: 11 }}
        >
            {children}
        </Dropdown>
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
            <Dropdown as={CustomDropdown}>
                <Dropdown.Toggle
                    to="/"
                    as={CustomToggle}
                    id="dropdown-custom-components"
                >
                    <ImageLanguage src="../../img/imgLanguage/1.jpg" alt="hinh1" />
                    <span>{this.state.dropDownValue}</span>
                </Dropdown.Toggle>

                <Dropdown.Menu as={CustomMenu}>
                    {this.Language.language.map((data, index) => (
                        <Dropdown.Item
                            to="/tien"
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
            </Dropdown>
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
            <Dropdown as={CustomDropdown}>
                <Dropdown.Toggle
                    to="/"
                    as={CustomToggle}
                    id="dropdown-custom-components"
                >
                    <span>{this.state.dropDownValue}</span>
                </Dropdown.Toggle>

                <Dropdown.Menu as={CustomMenu}>
                    {this.usd.myUsd.map((data, index) => (
                        <Dropdown.Item
                            to="/tien"
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

export const MyAccount = () => {

    const { currentUser, logout } = useAuth()
    const history = useHistory()

    const setting = {
        setting: [{
            link: "/",
            title: currentUser ? currentUser.email : "My Account"
        }, {
            link: "/checkout",
            title: "Checkout"
        }, {
            link: currentUser ? "" : "/login",
            title: currentUser ? "logout" : "login"
        }]
    }

    const handleLogout = async (e) => {
        if (!currentUser) {
            return;
        }

        e.preventDefault()


        try {
            logout()
            history.push('/login')
        } catch (error) {
        }
    }

    return (
        <Dropdown as={CustomDropdown}>
            <Dropdown.Toggle
                to="/"
                as={CustomToggle}
                id="dropdown-custom-components"
            >
                <span>{currentUser ? currentUser.email : "My Account"}</span>
            </Dropdown.Toggle>

            <Dropdown.Menu as={CustomMenu} >
                {
                    setting.setting.map((data, index) => (
                        <Dropdown.Item
                            onClick={handleLogout}
                            to={data.link}
                            key={index}
                            as={CustomItem}
                            title={data.title}
                            eventKey={index}
                        >
                            {data.title}
                        </Dropdown.Item>
                    ))
                }
            </Dropdown.Menu>
        </Dropdown>
    );
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
            image: ["../../img/imgLanguage/1.jpg", "../../img/imgLanguage/2.jpg"]
        }
    }

    changeValue(text) {
        this.setState({ dropDownValue: text })
    }

    render() {
        return (
            <Dropdown>
                <Dropdown.Toggle
                    to="/"
                    as={CustomToggle}
                    id="dropdown-custom-components"
                >
                    <ImageLanguage src="../../img/imgLanguage/1.jpg" alt="hinh1" />
                    <span>{this.state.dropDownValue}</span>
                </Dropdown.Toggle>

                <Dropdown.Menu
                    as={CustomMenu}
                >
                    {this.Language.language.map((data, index) => (
                        <Dropdown.Item
                            to="/tien"
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
            </Dropdown>
        );
    }
}