import styled from 'styled-components'

export const LoginCSS = styled.div`
.checkout_info {
    border: 1px solid #e4e3e3;
    margin-top: 25px;
    padding: 20px 30px;
    p {
        margin: 10px 0px;
        font-size: 15px;
    }
}
.form-row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -5px;
    margin-left: -5px;
}
.login-area .last-title {
    width: 100%;
}
.last-title {
    font-size: 24px;
    font-weight: 700;
    text-transform: capitalize;
}
.form-group {
    margin-bottom: 20px;

    .form-label {
        font-size: 16px;
        display: block;
        line-height: 1;
        font-weight: 600;
        span {
            font-size: 18px;
            color: #408ed4;
        }
    }
    .input-form {
        border: 1px solid #e4e3e3;
        background: none;
        height: 40px;
        width: 100%;
        padding: 0 20px;
    }
    .login-register {
        display: inline-block;
        width: 80px;
        background: #408ed4;
        border: 0;
        color: #FFFFFF;
        font-weight: 600;
        text-transform: uppercase;
        font-size: 13px;
        margin-right: 20px;
        cursor: pointer;
        height: 40px;
        border-radius: 3px;
    }
}
.show-btn {
    color: #FFFFFF;
    background: #3d3d3d;
    padding: 6px 20px;
    top: 26px;
    position: absolute;
    right: 0px;
    border: 1px solid #3d3d3d;
    &:hover {
        background: #408ed4;
        border: 1px solid #408ed4;
    }
}
.form-group.group_3 {
    display: flex;
    align-items: center;
}
.register-page a {
    font-weight: 700;
}
`