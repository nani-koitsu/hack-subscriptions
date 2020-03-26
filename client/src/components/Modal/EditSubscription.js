import Modal from "react-modal";
import React from "react";
import ReactDOM from "react-dom";

Modal.setAppElement("#yourAppElement");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};
ReactDOM.render(<ExampleApp {...props} />, document.getElementById("main"));
