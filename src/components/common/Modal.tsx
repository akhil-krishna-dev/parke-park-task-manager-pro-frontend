import React from "react";
import "./Modal.css";
function Modal({ children }: { children: React.ReactNode }) {
	return <div id="modal">{children}</div>;
}

export default Modal;
