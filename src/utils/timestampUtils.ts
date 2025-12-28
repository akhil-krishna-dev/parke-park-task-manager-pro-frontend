const timestampUtils = (timestamp: string) => {
	const formatted = new Date(timestamp).toLocaleString("en-IN", {
		timeZone: "Asia/Kolkata",
		hour12: true,
	});
	return formatted;
};

export default timestampUtils;
