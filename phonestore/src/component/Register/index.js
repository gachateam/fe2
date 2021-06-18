import React, { useRef, useState } from 'react'
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { Link , useHistory} from 'react-router-dom'
import { LoginCSS } from '../Login/LoginElement'
import { useAuth } from '../../contexts/AuthContext'

const styleButtonRegister = {
    background: "#408ed4",
    border: "none",
    outline: "none",
    color: "#FFFFFF",
    padding: "10px 15px",
    fontSize: "16px",
    textTransform: "uppercase",
    fontWeight: "700"
}

const Register = () => {
    const [newPassword, setNewPassword] = useState("password")
    const [confirmPassword, setConfirmPassword] = useState("password")
    const emailRef = useRef()
    const passRef = useRef()
    const confirmPassRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    const handleSubmit = async e => {
        e.preventDefault()

        if (passRef.current.value !== confirmPassRef.current.value) {
            return setError("Password do not match")
        }
        try {
            setError("");
            setLoading(true)
            await signup(emailRef.current.value, passRef.current.value)
            history.push("/")
        } catch(err) {
            setLoading(false)
            return setError(err.message)
        }
        setLoading(false);
    }

    const showNewPassword = (e) => {
        e.preventDefault()
        setNewPassword(newPassword === "text" ? "password" : "text")
    }
    const showConfirmPassword = (e) => {
        e.preventDefault()
        setConfirmPassword(confirmPassword === "text" ? "password" : "text")
    }

    return (
        <LoginCSS>
            <Container>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Register</Breadcrumb.Item>
                </Breadcrumb>
                <Row>
                    <div className="register-area login-area mt-4">
                        <Container className="container">
                            <Row>
                                <Col lg={6} className="offset-lg-3">
                                    <div className="checkout_info mb-4">

                                        {error && <Alert variant="danger">{error}</Alert>}

                                        <Form className="form-row" onSubmit={handleSubmit}>
                                            <h5 className="last-title mb-10 text-center">Creat New Account</h5>
                                            <div className="text-left mb-20 col-lg-12">
                                                <p className="register-page"> Already have an account? <Link to="/login">Log in instead!</Link></p>
                                            </div>

                                            <Form.Group className="col-lg-12">
                                                <Form.Label htmlFor="first-name">First Name <span>*</span></Form.Label>
                                                <Form.Control className="input-form" id="first-name" type="text" />
                                            </Form.Group>

                                            <Form.Group className="col-12">
                                                <Form.Label htmlFor="first-name">Last Name <span>*</span></Form.Label>
                                                <Form.Control className="input-form" id="last-name" type="text" />
                                            </Form.Group>

                                            <Form.Group className="col-12">
                                                <Form.Label htmlFor="email-address">Email Address <span>*</span></Form.Label>
                                                <Form.Control className="input-form" id="email-address" type="text" ref={emailRef} />
                                            </Form.Group>

                                            <Form.Group className="col-12 position-relative">
                                                <Form.Label htmlFor="new-password">New Password <span>*</span></Form.Label>
                                                <Form.Control className="input-form input-login" id="new-password" type={newPassword} ref={passRef} />
                                                <button className="show-btn" onClick={showNewPassword}>Show</button>
                                            </Form.Group>

                                            <Form.Group className="col-12 position-relative">
                                                <Form.Label htmlFor="confirm-password">Confirm Password <span>*</span></Form.Label>
                                                <Form.Control className="input-form input-login" id="confirm-password" type={confirmPassword} ref={confirmPassRef} />
                                                <button className="show-btn" onClick={showConfirmPassword}>Show</button>
                                            </Form.Group>

                                            <Form.Group className="col-12 position-relative">
                                                <Form.Label htmlFor="birth-date">Birth date (Optional)</Form.Label>
                                                <Form.Control className="input-form" id="birth-date" type="text" />
                                            </Form.Group>
                                            <Form.Row>
                                                <Form.Group className="col-12" controlId="formCheckboxSignup1">
                                                    <Form.Check type="checkbox" label="Receive Offers From Our Partners" />
                                                </Form.Group>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Group className="col-12" controlId="formCheckboxSignup">
                                                    <Form.Check type="checkbox" label={<>Sign Up For Our Newsletter <br /> Subscribe To Our Newsletters Now And Stay Up-To-Date With New Collections, The Latest Lookbooks And Exclusive Offers..</>} />
                                                </Form.Group>
                                            </Form.Row>
                                            <Form.Row className="mt-4">
                                                <Button type="submit" disabled={loading} variant="secondary" style={styleButtonRegister} >
                                                    Register
                                                </Button>
                                            </Form.Row>
                                        </Form>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Row>
            </Container>

        </LoginCSS>
    )
}

export default Register
