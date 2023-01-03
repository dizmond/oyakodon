import React from 'react';
import styled from 'styled-components';
import { loginEndpoint } from '../../spotify';
const StyledLogin = styled.menu`
    background-color: green;
    display: flex;
    justify-content: center;
`
export default function Login() {
    return (
        <StyledLogin>
            <a href={loginEndpoint}>
                <div className="login-btn">LOG IN</div>
            </a>
        </StyledLogin>
    );
}

