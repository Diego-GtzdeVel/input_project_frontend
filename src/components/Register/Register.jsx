import { useFormWithValidation } from "../../hooks/useFormWithValidation";

function Register({ onSwitch, onRegister }) {
  const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(isValid) {
      onRegister({
        name: values.name,
        email: values.email,
        password: values.password,
        resetForm,
      });
    }
  };

  return (
    <>
      <form className="popup__form" onSubmit={handleSubmit} noValidate>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="NAME"
          className="popup__input"
          required
          value={values.name || ""}
          onChange={handleChange}
        />
        <span className="popup__error">{errors.name}</span>

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
          type="password"
          name="password"
          placeholder="PASSWORD"
          className="popup__input"
          required
          value={values.password || ""}
          onChange={handleChange}
        />
        <span className="popup__error">{errors.password}</span>

        <button
          type="submit"
          className="popup__button"
          disabled={!isValid}
        >
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
