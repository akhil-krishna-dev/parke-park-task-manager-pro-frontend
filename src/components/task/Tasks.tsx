import { useContext, useEffect, useRef, useState } from "react";
import Table from "../common/Table";
import "./Tasks.css";
import { AppContext } from "../../App";
import { getFilteredTasks } from "../../api/taskApi";
function Tasks() {
	const context = useContext(AppContext);

	const [page, setPage] = useState(0);
	const [hasMore, setHasMore] = useState(true);
	const [loading, setLoading] = useState(false);

	const observer = useRef<IntersectionObserver | null>(null);
	const lastTaskRef = useRef<HTMLDivElement | null>(null);
	const headerss: Header[] = [
		{
			header: "Tasks",
		},
		{
			header: "Status",
			dropDown: {
				label: "All",
				options: ["Pending", "In progress", "Completed"],
			},
		},
		{
			header: "Priority",
			dropDown: {
				label: "Low",
				options: ["high", "medium", "low"],
			},
		},
		{
			header: "Created in",
		},
	];

	useEffect(() => {
		if (!context || page < 2) return;
		if (context.taskFilter.pages < page) return;
		console.log("fetching....", context.taskFilter);
		getFilteredTasks(context, page);
	}, [page]);

	useEffect(() => {
		if (observer.current) observer.current.disconnect();

		observer.current = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				setPage((prev) => prev + 1);
			}
		});

		if (lastTaskRef.current) {
			observer.current.observe(lastTaskRef.current);
		}
	}, [loading, hasMore]);

	if (context?.tasks) {
		return (
			<section className="tasks-container">
				<Table headers={headerss} tableData={context?.tasks} />
				<div ref={lastTaskRef}></div>
			</section>
		);
	}
}

export default Tasks;
