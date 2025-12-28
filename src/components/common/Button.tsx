import type React from "react";

type ButtonProps = {
	label: string;
	bgColor?: string;
	color?: string;
} & React.ComponentProps<"button">;

function Button({ label, bgColor = "white", color, ...rest }: ButtonProps) {
	return (
		<button
			style={{
				backgroundColor: bgColor,
				color,
				padding: "13px 25px",
				borderRadius: "20px",
				border: "none",
				cursor: "pointer",
				fontSize: "16px",
				fontWeight: "bold",
			}}
			{...rest}
		>
			{label}
		</button>
	);
}

export default Button;
