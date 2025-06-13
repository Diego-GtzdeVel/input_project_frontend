import { useFormWithValidation } from "../../hooks/useFormWithValidation";

function Login({ onSwitch, onLogin }) {
  const { values, handleChange, errors, isValid } = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      onLogin({
        email: values.email,
        password: values.password,
      });
    }
  };

  return (
    <>
      <form className="popup__form" onSubmit={handleSubmit}>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="EMAIL"
          className="popup__input"
          required
          value={values.email || ""}
          onChange={handleChange}
        />
        <span className="popup__error">{errors.email}</span>

        <input
          id="password"
          name="password"
          type="password"
          placeholder="PASSWORD"
          className="popup__input"
          required
          value={values.password || ""}
          onChange={handleChange}
        />
        <span className="popup__error">{errors.password}</span>

        <button type="submit" className="popup__button" disabled={!isValid}>
          LOGIN
        </button>
      </form>

      <p className="popup__redirect">
        IF YOU ARE NOT YET A MEMBER...{" "}
        <button
          type="button"
          className="popup__link"
          onClick={onSwitch}
        >
          REGISTER HERE
        </button>
      </p>
    </>
  );
}

export default Login;
