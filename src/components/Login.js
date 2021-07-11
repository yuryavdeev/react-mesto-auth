import React from 'react';

function Login(props) {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        props.handleLoginSubmit({ password, email });
        setEmail('');
        setPassword('');
    }

    const handleChangeEmail = (evt) => {
        setEmail(evt.target.value);
    }

    const handleChangePassword = (evt) => {
        setPassword(evt.target.value);
    }

    return (
        <div className="access">
            <h2 className="access__titile">Вход</h2>
            <form className="access__form" onSubmit={handleSubmit}>
                <input
                    name="email"
                    className="access__input"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleChangeEmail}
                    required
                />
                <input
                    name="password"
                    className="access__input"
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    minLength="5"
                    maxLength="25"
                    onChange={handleChangePassword}
                    required
                />
                <button type="submit" className="access__submit">Войти</button>
            </form>
        </div>
    );
}

export default Login;
