import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./LoginForm.css";

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
      <img className="ImgForLogIn" src="https://images.squarespace-cdn.com/content/v1/5e949a92e17d55230cd1d44f/1636123980974-KO4VU46DMZG2AM56YOLZ/White2AppleIDiPad.png" />
      <div className="LogInTitleText">Log In</div>
      <form className="FormContainer" onSubmit={handleSubmit}>
        <div className="ErrorsContainer">
          {errors.map((error, idx) => (
            <div key={idx}>{error}</div>
          ))}
        </div>
        <label>
          <input
            placeholder="Email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button className="SignInButton" type="submit">Log In</button>
      </form>
      <button className="DemoUserButton" onClick={() => DemoUserSubmit()}> <i class="fa-solid fa-user-secret"/> Demo User</button>
      </div>
    </>
  );
}

export default LoginFormModal;
