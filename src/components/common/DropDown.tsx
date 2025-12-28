import { useContext, useEffect, useState } from "react";
import "./DropDown.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AppContext } from "../../App";
import { getFilteredTasks } from "../../api/taskApi";

type DropDownProps = {
	label: string;
	options: string[];
	header: string;
};

function DropDown({ label, options, header }: DropDownProps) {
	const [isOpen, setIsOpen] = useState(false);
	const context = useContext(AppContext);

	// toggle dropdown
	const toggleDropdown = () => {
		setIsOpen((prev) => !prev);
	};

	// when user selects an option
	const handleSelect = (value: string) => {
		setIsOpen(false);

		if (!context) return;

		context.setTaskFilter((prev) => ({
			...prev,
			[header.toLowerCase()]: value,
		}));
	};

	// fetch filtered tasks whenever filter changes
	useEffect(() => {
		if (!context) return;
		const taskTimer = setTimeout(() => {
			getFilteredTasks(context);
		}, 1000);
		return () => {
			clearInterval(taskTimer);
		};
	}, [context?.taskFilter.status, context?.taskFilter.priority]);

	const renderCurrentFilter = () => {
		if (header === "Status") {
			return context?.taskFilter.status || "All";
		} else if (header === "Priority") {
			return context?.taskFilter.priority || "All";
		}
		return label;
	};

	return (
		<div className="dropdown-container">
			<div className="dropdown">
				<div className="dropdown-button" onClick={toggleDropdown}>
					<MdKeyboardArrowDown
						className={isOpen ? "is-open" : ""}
						size={25}
					/>

					{renderCurrentFilter()}
				</div>

				{isOpen && (
					<div className="options-container">
						<div
							onClick={() => handleSelect("All")}
							className="option"
						>
							All
						</div>

						{options.map((option) => (
							<div
								key={option}
								onClick={() => handleSelect(option)}
								className="option"
							>
								{option}
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
}

export default DropDown;
