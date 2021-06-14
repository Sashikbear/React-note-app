import React from "react";
class CreateNotes extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			noteText: "",
			noteTitle: "",
		};
	}
	// reacting to the change of value in the text area where setState() schedules an update to a component’s state object
	handleNoteTextChange(event) {
		this.setState((state) => ({
			noteText: event.target.value,
		}));
	}
	// reacting to the change of value in the input area for title where setState() schedules an update to a component’s state object
	handleNoteTitleChange(event) {
		this.setState((state) => ({
			noteTitle: event.target.value,
		}));
	}
	// using the form functionality submitting a new note object with text taken from the change event above and adding key: dateCreated for identifying the unique element and parsing as a readable date for presenting as a string to the user and key of noteTitle
	handleSubmit(event) {
		// preventing page from reloading once the form is submitted
		event.preventDefault();
		const dateCreated = Date.now();
		const newNote = {
			noteText: this.state.noteText,
			dateCreated: dateCreated,
			noteTitle: this.state.noteTitle,
			id: dateCreated,
		};
		// console.log(newNote);
		// invoking our own function onaddnote with parameter of new element implemented in apps.js
		this.props.onAddNote(newNote);
	}
	render() {
		return (
			<form className="form" onSubmit={(event) => this.handleSubmit(event)}>
				<div className="input-area">
					<input
						className="text-area title"
						id="title"
						name="title"
						placeholder="Title"
						value={this.state.noteTitle}
						onChange={(event) => this.handleNoteTitleChange(event)}
					></input>
					<textarea
						required
						className="text-area"
						id="textArea"
						name="textAtea"
						rows="10"
						cols="35"
						placeholder="Your note"
						value={this.state.noteText}
						onChange={(event) => this.handleNoteTextChange(event)}
					></textarea>
				</div>
				<div>
					<button className="button" type="submit">
						Add
					</button>
				</div>
			</form>
		);
	}
}

export default CreateNotes;
