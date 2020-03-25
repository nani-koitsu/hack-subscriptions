import React from "react";
import ReactModal from "react-modal";
import { connect } from "react-redux";
import SelectedSearch from "./SelectedSearch";

const MODAL_TYPES = {
  "Selected Search": SelectedSearch
};
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

class ModalContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: props.open
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.open !== this.props.open) {
      this.setState({
        modalIsOpen: this.props.open
      });
    }
  }

  closeModal = () => {
    this.props.hideModal();
  };
  render() {
    if (!this.props.selectedModal) {
      return null;
    }
    const SpecifiedModal = MODAL_TYPES[this.props.selectedModal];

    return (
      <div>
        {/* <button onClick={openModal}>Open Modal</button> */}
        <ReactModal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          ariaHideApp={false}
          style={customStyles}
        >
          <SpecifiedModal
            closeModal={this.closeModal}
            {...this.props.modalProps}
          />
        </ReactModal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.modal
});
export default connect(mapStateToProps, null)(ModalContainer);
