function Login() {

    return(
        <>
        <form className="popup__form">
            <input
                id="email"
                type="email"
                placeholder="EMAIL"
                className="popup__input"
                required />
            <input
                id="password"
                type="password"
                placeholder="PASSWORD"
                className="popup__input"
                required />
            <button type="submit" className="popup__button">
                LOGIN
            </button>
        </form><p className="popup__redirect">
                IF YOU ARE NOT YET A MEMBER.. REGISTER HERE
            </p>
        </>
    );
}

export default Login;