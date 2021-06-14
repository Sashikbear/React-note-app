import Moment from "react-moment";
import React from "react";
class Modal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// initial state mirrors the note values
			modalDate: props.modalDate,
			modalTitle: props.modalTitle,
			modalText: props.modalText,
			id: props.id,
		};

		this.handleModalFormSubmit = this.handleModalFormSubmit.bind(this);
	}

	handleInputTitleChange(event) {
		this.setState((state) => ({
			modalTitle: event.target.value,
		}));
	}
	handleInputTextChange(event) {
		this.setState((state) => ({
			modalText: event.target.value,
		}));
	}
	handleModalFormSubmit(event) {
		event.preventDefault();
		const EditedNote = {
			dateCreated: Date.now(),
			noteTitle: this.state.modalTitle,
			noteText: this.state.modalText,
			id: this.state.id,
			modalDate: this.state.modalDate,
		};
		// console.log(EditedNote);
		// start sending info up process
		this.props.onUpdate(EditedNote);
		this.props.onCancel();
	}

	render() {
		return (
			<div className="modal">
				{" "}
				<button className="delete-button" onClick={this.props.onCancel}>
					Cancel
				</button>
				<form className="modal-form" onSubmit={this.handleModalFormSubmit}>
					<div className="date-on-note">
						<Moment format="MMM Do h:mm a">{this.props.modalDate}</Moment>
					</div>
					<input
						type="text"
						className="title-note"
						value={this.state.modalTitle}
						onChange={(event) => this.handleInputTitleChange(event)}
					></input>
					<input
						type="text"
						className="modal-text-area"
						value={this.state.modalText}
						onChange={(event) => this.handleInputTextChange(event)}
					></input>
					<button className="update-button" type="submit">
						Update
					</button>
				</form>
			</div>
		);
	}
}

export default Modal;
