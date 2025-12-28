import Input from "../common/Input";

function Register() {
	return (
		<>
			<div className="input">
				<label htmlFor="">Your Name</label>
				<Input placeholder="John Does" name="username" />
			</div>
			<div className="input">
				<label htmlFor="">Email</label>
				<Input placeholder="example@gmail.com" name="email" />
			</div>
			<div className="input">
				<label htmlFor="">Password</label>
				<Input
					type="password"
					placeholder="**********"
					name="password"
				/>
			</div>
			<div className="input">
				<label htmlFor="">Confirm Password</label>
				<Input
					type="password"
					placeholder="**********"
					name="password2"
				/>
			</div>
		</>
	);
}

export default Register;
