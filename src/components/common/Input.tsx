import React from "react";

function Input({ style, ...rest }: React.ComponentProps<"input">) {
	return (
		<input
			{...rest}
			style={{
				border: "none",
				padding: "15px 35px",
				borderRadius: "40px",
				fontSize: "18px",
				...style,
			}}
		/>
	);
}

export default Input;
