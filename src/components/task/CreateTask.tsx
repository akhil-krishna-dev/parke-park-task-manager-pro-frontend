import Input from "../common/Input";
import Button from "../common/Button";
import "./CreateTask.css";
import { useContext, type ChangeEvent } from "react";
import { AppContext } from "../../App";
import { createTask } from "../../api/taskApi";

function CreateTask() {
	const context = useContext(AppContext);

	const onCreateTask = (event: ChangeEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const data = Object.fromEntries(formData.entries());

		if (context) {
			createTask(context, data);
		}
	};

	return (
		<div className="create-task-container">
			<form onSubmit={onCreateTask}>
				<div className="input">
					<label htmlFor="">New Task</label>
					<Input
						name="title"
						placeholder="Create a Task Manager Pro With Authentication"
					/>
				</div>

				<div className="input">
					<label htmlFor="">Priority</label>
					<select name="priority" id="">
						<option value="" selected>
							Low
						</option>
						<option value="">Medium</option>
						<option value="">High</option>
					</select>
				</div>
				<div className="submit">
					<Button
						onClick={() => context?.setIsCreateNewTaskOpen(false)}
						label="Cancel"
						color="white"
						bgColor="red"
					/>
					<Button
						type="submit"
						label="Save"
						color="white"
						bgColor="green"
					/>
				</div>
			</form>
		</div>
	);
}

export default CreateTask;
