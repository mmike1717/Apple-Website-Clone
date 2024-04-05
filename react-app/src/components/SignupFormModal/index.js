import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { signUp } from "../../store/session";
import "./SignupForm.css";
import signUpPic from './signupPic.png'

function SignupFormModal() {
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errors, setErrors] = useState([]);
	const [err, setErr] = useState({})
	const { closeModal } = useModal();

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(email.includes('@'))

		// if(!firstName){
		// 	setErr({firstName: 'First Name is Required'})
		// }
		// if(!lastName){
		// 	setErr({lastName: 'Last Name is Required'})
		// }
		if(!email.includes('@') || !email.includes('.com')){
			setErr({email: 'Email needs @ or .com'})
		}

		if(password !== confirmPassword){
			setErrors([
				"Confirm Password field must be the same as the Password field",
			]);
		}

		if (password === confirmPassword && firstName && lastName && email.includes('@') && email.includes('.com')) {
			const data = await dispatch(signUp(firstName, lastName, email, password));
			if (data) {
				setErrors(data);
			} else {
				closeModal();
			}
		}
	};


	return (
		<>
			<div className="SignUpMainContainer">
				<img alt="signUp" className="ImgForSignUp" src={signUpPic} />
				<div className="SignUpTitle">Sign Up</div>
				<form className="FormForSignUp" onSubmit={handleSubmit}>
					<div>
						{errors.map((error, idx) => (
							<div className="EachErrorContainer" key={idx}>{error}</div>
						))}
					</div>
					{err.email && <div style={{color: 'red'}}>{err.email}</div>}
					<label>
						<input
							className="signUpInput"
							placeholder="Email"
							type="text"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</label>
					<label>
						<input
							className="signUpInput"
							placeholder="First Name"
							type="text"
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
							required
						/>
					</label>
					<label>
						<input
							className="signUpInput"
							placeholder="Last Name"
							type="text"
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
							required
						/>
					</label>
					<label>
						<input
							className="signUpInput"
							placeholder="Password"
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</label>
					<label>
						<input
							className="signUpInput"
							placeholder="Confirm Password"
							type="password"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
							required
						/>
					</label>
					<button className="ButtonForSignUp" type="submit">Sign Up</button>
				</form>
			</div>
		</>
	);
}

export default SignupFormModal;
