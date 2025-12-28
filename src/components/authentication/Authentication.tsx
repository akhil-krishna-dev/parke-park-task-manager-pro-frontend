import Login from "./Login";
import Register from "./Register";
import "./Authentication.css";
import { useState, type FormEvent } from "react";
import Button from "../common/Button";
import axios from "axios";

type AuthenticationProps = "login" | "register";

function Authentication() {
	const [action, setAction] = useState<AuthenticationProps>("login");
	const url = import.meta.env.VITE_API_BASE_URL;

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const data = Object.fromEntries(formData.entries());
		if (action === "login") {
			axios
				.post(`${url}user/login`, data)
				.then((res) => {
					localStorage.setItem("token", res.data.data.token);
					window.location.reload();
				})
				.catch((error) => {
					console.log(error);
				});
		} else {
			axios
				.post(`${url}user/register`, data)
				.then((res) => {
					console.log(res);
					localStorage.setItem("token", res.data.token);
				})
				.catch((error) => {
					console.log(error);
				});
		}
	};
	return (
		<div className="auth-container">
			<form onSubmit={onSubmit} className="main-container">
				<h2>{action === "login" ? "Login " : "Register "}Page</h2>
				{action === "login" ? <Login /> : <Register />}
				<div className="button">
					<Button
						type="submit"
						label="Submit"
						bgColor="green"
						color="white"
					/>
				</div>
				<p>
					{action === "login" ? (
						<>
							Don't have an account?
							<Button
								label="register"
								onClick={() => setAction("register")}
							/>
						</>
					) : (
						<>
							Already have an account?{" "}
							<Button
								label="login"
								onClick={() => setAction("login")}
							/>
						</>
					)}
				</p>
			</form>
		</div>
	);
}

export default Authentication;
