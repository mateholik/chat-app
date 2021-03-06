import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
  emailError: "",
  passwordError: "",
};

export default function LoginForm({ validForm }) {
  const [formData, setFormData] = useState(initialState);

  const history = useHistory();

  const handleInputs = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const validateInputs = () => {
    let emailError, passwordError;
    //email
    if (!formData.email) {
      emailError = "Input is required";
    } else if (formData.email && !formData.email.includes("@")) {
      emailError = "Invalid email";
    } else if (formData.email && formData.email !== "test@test.test") {
      emailError = "User does not exist";
    }
    //password
    if (!formData.password) {
      passwordError = "Input is required";
    } else if (formData.password && formData.password.length < 3) {
      passwordError = "Password must contain at least 3 chars";
    } else if (formData.password && formData.password !== "test") {
      passwordError = "Wrong password";
    }

    if (passwordError || emailError) {
      setFormData((prev) => ({ ...formData, passwordError, emailError }));
      return false;
    }

    return true;
  };

  const submit = (e) => {
    e.preventDefault();
    const valid = validateInputs();
    if (valid) {
      setFormData(initialState);
      validForm();
      history.push("/chat");
    }
  };

  return (
    <div className="row">
      <div className="col-lg-4 mx-auto">
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) => handleInputs(e)}
            ></input>
            <p style={{ color: "red" }}>{formData.emailError}</p>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={(e) => handleInputs(e)}
            ></input>
            <p style={{ color: "red" }}>{formData.passwordError}</p>
          </div>
          <div className="d-flex align-items-center">
            <button onClick={submit} type="submit" className="btn btn-primary">
              Submit
            </button>
            <div className="tip-box">
              <span>?</span>
              <div className="tip">
                User: test@test.test <br /> password: test
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
