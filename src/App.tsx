import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Tasks from "./components/task/Tasks";
import Modal from "./components/common/Modal";
import CreateTask from "./components/task/CreateTask";
import Authentication from "./components/authentication/Authentication";
import { useAuth } from "./components/authentication/AuthProvider";

export type AppContextType = {
	isCreateNewTaskOpen: boolean;
	setIsCreateNewTaskOpen: React.Dispatch<React.SetStateAction<boolean>>;
	tasks: any[];
	setTasks: React.Dispatch<React.SetStateAction<any[]>>;
	taskFilter: TaskFilter;
	setTaskFilter: React.Dispatch<React.SetStateAction<Task>>;
};

export const AppContext = React.createContext<AppContextType | null>(null);
function App() {
	const [isCreateNewTaskOpen, setIsCreateNewTaskOpen] = useState(false);
	const [tasks, setTasks] = useState([]);
	const [taskFilter, setTaskFilter] = useState<TaskFilter>({
		title: "",
		status: "",
		priority: "",
		createdAt: "",
		pages: 0,
	});

	const authContext = useAuth();

	if (!authContext.isAuthenticated) return <Authentication />;

	return (
		<AppContext.Provider
			value={{
				isCreateNewTaskOpen,
				setIsCreateNewTaskOpen,
				tasks,
				setTasks,
				taskFilter,
				setTaskFilter,
			}}
		>
			{isCreateNewTaskOpen && (
				<Modal>
					<CreateTask />
				</Modal>
			)}
			<Header />
			<Tasks />
		</AppContext.Provider>
	);
}

export default App;
