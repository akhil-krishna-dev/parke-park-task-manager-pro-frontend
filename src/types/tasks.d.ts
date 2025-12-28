type Header = {
	header: string;
	dropDown?: {
		label: string;
		options: string[];
	};
};

type Task = {
	title: string;
	status: string;
	priority: string;
	createdAt: string;
};

type TaskFilter = { pages: number } & Task;
