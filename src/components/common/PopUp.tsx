import React from "react";
import "./PopUp.css";
type PopUpProps = {
	children: React.ReactNode;
	onClick: () => void;
};

function PopUp({ children, onClick }: PopUpProps) {
	return (
		<div onClick={onClick} className="pop-up-container">
			<div className="pop-up">{children}</div>
		</div>
	);
}

export default PopUp;
