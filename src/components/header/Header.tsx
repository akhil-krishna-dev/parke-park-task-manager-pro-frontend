import { BiSearch, BiUserCircle } from "react-icons/bi";
import Button from "../common/Button";
import "./Header.css";
import Input from "../common/Input";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import axios from "axios";
import PopUp from "../common/PopUp";
import Logout from "../authentication/Logout";
function Header() {
	const context = useContext(AppContext);
	const [text, setText] = useState("");
	const handleOnCreateNewTask = () => {
		context?.setIsCreateNewTaskOpen((prev) => !prev);
	};

	const [isLogutOpen, setIsLogutOpen] = useState(false);

	const baseUrl = import.meta.env.VITE_API_BASE_URL;

	useEffect(() => {
		const fetchTasks = async () => {
			try {
				const filterUrl =
					`${baseUrl}tasks/filter?` +
					new URLSearchParams({
						q: text,
					}).toString();

				console.log("fetching:", filterUrl);

				const res = await axios.get(filterUrl);
				context?.setTasks(res.data.data);
			} catch (err) {
				console.error(err);
			}
		};

		const debouce = setTimeout(() => {
			fetchTasks();
		}, 1000);
		return () => {
			clearTimeout(debouce);
		};
	}, [text]);

	return (
		<header>
			{isLogutOpen && (
				<PopUp onClick={() => setIsLogutOpen((prev) => !prev)}>
					<Logout />
				</PopUp>
			)}
			<div className="left-section">
				<Button
					onClick={handleOnCreateNewTask}
					label="Add New"
					bgColor="#0794fc"
					color="white"
				/>

				<div className="search-box-container">
					<BiSearch className="search-icon" size={35} />
					<Input
						onChange={(event) => setText(event.target.value)}
						placeholder="Search Task"
						style={{
							width: "500px",
							paddingLeft: "55px",
							backgroundColor: "#f5f8fa",
						}}
					/>
				</div>
			</div>
			<div className="right-section">
				<BiUserCircle
					onClick={() => setIsLogutOpen((prev) => !prev)}
					size={40}
				/>
			</div>
		</header>
	);
}

export default Header;
