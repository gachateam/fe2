import React, { useRef, useState } from 'react'
import { Col, Container, Form, Row, Button, Alert } from 'react-bootstrap'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { LoginCSS } from './LoginElement'

const Login = () => {
    const [password, setPassword] = useState("password")

    const emailRef = useRef()
    const passRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const [checkedRememberMe, setCheckedRememberMe] = useState(false)

    const handleSubmit = async e => {
        e.preventDefault()

        try {
            setError("");
            setLoading(true)
            await login(emailRef.current.value, passRef.current.value, checkedRememberMe)
            history.push("/")
        } catch (err) {
            setLoading(false)
            return setError(err.message)
        }
        setLoading(false);
    }

    const showPassword = (e) => {
        e.preventDefault()
        setPassword(password === "text" ? "password" : "text")
    }

    return (
        <LoginCSS>
            <Container>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Login</Breadcrumb.Item>
                </Breadcrumb>
                <div className="login-area mt-5">
                    <Container>
                        <Row>
                            <Col lg={6} className="offset-lg-3">
                                <div className="checkout_info mb-4">

                                    {error && <Alert variant="danger">{error}</Alert>}

                                    <Form className="form-row" onSubmit={handleSubmit}>
                                        <h1 className="last-title mb-4 text-center">Login to Your Account</h1>
                                        <Form.Group className="col-12">
                                            <Form.Label>Username or email <span>*</span></Form.Label>
                                            <Form.Control className="input-form" type="text" ref={emailRef} />
                                        </Form.Group>
                                        <Form.Group className="col-12 position-relative">
                                            <Form.Label>Password <span>*</span></Form.Label>
                                            <Form.Control className="input-form input-login" type={password} ref={passRef} />
                                            <button className="show-btn" onClick={showPassword}>Show</button>
                                        </Form.Group>
                                        <Form.Group className="group_3 col-lg-3">
                                            <Button className="login-register" disabled={loading} type="submit">Login</Button>
                                        </Form.Group>
                                        <Form.Group className="group_3 col-lg-9">
                                            <Form.Check id="remember_box" type="checkbox" label="Remember me" onChange={() => setCheckedRememberMe(!checkedRememberMe)} />
                                        </Form.Group>
                                        <div className="col-lg-12 text-left">
                                            <Link className="lost-password" to="/">Lost your password?</Link>
                                        </div>
                                        <div className="col-lg-12 text-left">
                                            <p className="register-page"> No account? <Link to="/register">Create one here</Link>.</p>
                                        </div>
                                    </Form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Container>

        </LoginCSS>
    )
}

export default Login
