import Button from "../common/Button";

function Logout() {
	const handleOnLogout = () => {
		localStorage.clear();
		window.location.reload();
	};
	return (
		<div className="log-out-container">
			<Button
				onClick={handleOnLogout}
				bgColor="red"
				color="white"
				label="Logout"
			/>
		</div>
	);
}

export default Logout;
