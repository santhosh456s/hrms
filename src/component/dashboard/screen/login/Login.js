import React from 'react';

const Login = (props) => {
    const clickHandel = () => {
        const jwTokan = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
        localStorage.setItem('access-tokon', jwTokan);
        props.history.push('/');
    }
    return (
        <div className="login-container">
            <div className="login-div">
                <h1 className="login-header">Login</h1>
                <div className="login-body">
                    <input type="text" name="id" />
                    <input type="text" name="id" />
                </div>
                <button onClick={clickHandel}>Login</button>
            </div>
        </div>
    )
}

export default Login;
