import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./LoginForm.css";
// import OpenModalButton from "../OpenModalButton";
import SignupFormModal from "../SignupFormModal";
import SignUpModalButton from "../OpenModalButton/modalForSignUp";
import loginPic from './loginPic.png'

function LoginFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    } else {
        closeModal()
    }
  };

  const DemoUserSubmit = async () => {
    // e.preventDefault();
    const data = await dispatch(login('demo@aa.io', 'password'));
    if (data) {
      setErrors(data);
    } else {
        closeModal()
    }
  };

  return (
    <>
    <div className="MainContainerForLogIn">
      <img alt="" className="ImgForLogIn" src={loginPic} />
      <div className="LogInTitleText">Log In</div>
      <form className="FormContainer" onSubmit={handleSubmit}>
        <div className="ErrorsContainer">
          {errors.map((error, idx) => (
            <div key={idx}>{error}</div>
          ))}
        </div>
        <label>
          <input
            className="LoginInputField"
            placeholder="Email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          <input
            className="LoginInputField"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button className="SignInButton" type="submit">Log In</button>
      </form>
      <div>
        Don't have an account?
        <SignUpModalButton
          buttonText="Create One"
          modalComponent={<SignupFormModal />}
        />
      </div>
      <button className="DemoUserButton" onClick={() => DemoUserSubmit()}> <i class="fa-solid fa-user-secret"/> Demo User</button>
      </div>
    </>
  );
}

export default LoginFormModal;
