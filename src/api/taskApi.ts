import axios from "axios";
import type { AppContextType } from "../App";

const baseUrl = import.meta.env.VITE_API_BASE_URL;
const getFilteredTasks = async (context: AppContextType, page = 1) => {
	try {
		const { status, priority } = context.taskFilter;

		const filterUrl =
			`${baseUrl}tasks/filter?` +
			new URLSearchParams({
				status: status !== "All" ? status : "",
				priority: priority !== "All" ? priority : "",
				page: `${page}`,
			}).toString();

		const res = await axios.get(filterUrl);
		console.log(res);

		if (page === 1) {
			context.setTasks(res.data.data);
			context.setTaskFilter((prev) => {
				return { ...prev, pages: res.data.pages };
			});
		} else {
			context.setTasks((prev) => [...prev, res.data.data]);
		}
	} catch (err) {
		console.error(err);
	}
};

const createTask = (context: AppContextType, data: any) => {
	axios.post(`${baseUrl}tasks`, data).then((res) => {
		context?.setTasks((prev) => [...prev, res.data]);
		context?.setIsCreateNewTaskOpen(false);
	});
};
export { getFilteredTasks, createTask };
