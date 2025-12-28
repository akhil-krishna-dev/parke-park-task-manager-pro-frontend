import Input from "../common/Input";

function Login() {
	return (
		<>
			<div className="input">
				<label htmlFor="">Email</label>
				<Input placeholder="example@gmail.com" name="email" />
			</div>
			<div className="input">
				<label htmlFor="">Password</label>
				<Input
					type="password"
					name="password"
					placeholder="**********"
				/>
			</div>
		</>
	);
}

export default Login;
