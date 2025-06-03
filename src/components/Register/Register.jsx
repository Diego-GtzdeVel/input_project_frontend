function Register({ onSwitch }) {
  return (
    <>
      <form className="popup__form">
        <input
          id="email"
          type="email"
          placeholder="EMAIL"
          className="popup__input"
          required
        />
        <input
          id="password"
          type="password"
          placeholder="PASSWORD"
          className="popup__input"
          required
        />
        <button type="submit" className="popup__button">
          REGISTER
        </button>
      </form>

      <p className="popup__redirect">
        ALREADY HAVE AN ACCOUNT?{" "}
        <button
          type="button"
          className="popup__link"
          onClick={onSwitch}
        >
          LOGIN HERE
        </button>
      </p>
    </>
  );
}

export default Register;
