import React from "react";
import "./App.css";
import CreateNotes from "./components/CreateNotes";
import NoteList from "./components/NoteList";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: [],
			showModal: false,
		};
		this.handleOpenModal = this.handleOpenModal.bind(this);
		this.handleCloseModal = this.handleCloseModal.bind(this);
	}
	handleOpenModal() {
		this.setState({ showModal: true });
	}

	handleCloseModal() {
		this.setState({ showModal: false });
	}

	// retrieving the previously stored notes array from local storage
	componentDidMount() {
		const retreived_notes = JSON.parse(window.localStorage.getItem("noteApp"));
		if (retreived_notes) {
			this.setState((state) => ({ notes: retreived_notes }));
		}
	}
	// storing the existing notes array into local storage
	componentDidUpdate() {
		window.localStorage.setItem("noteApp", JSON.stringify(this.state.notes));
	}
	// adding a new note element into notes array using spread
	handleAddNote(newNote) {
		this.setState((state) => {
			return { notes: [newNote, ...state.notes] };
		});
	}
	// function that uses global confirm function and if that confirm function is true, deletes the selected element by using filter (leaves only those elements which unique identifier key = date created isn't equal to the one that is clicked)
	handleDeleteNote(dateCreated) {
		if (window.confirm("Are you sure you want to delete your note?")) {
			this.setState((state) => {
				const notesPostRemoving = state.notes.filter(
					(note) => note.dateCreated !== dateCreated
				);
				return { notes: notesPostRemoving };
			});
		}
	}
	handleUpdate(EditedNote) {
		// console.log(EditedNote);
		const foundElement = this.state.notes.findIndex(
			(note) => note.id === EditedNote.id
		);

		let notes = [...this.state.notes];
		// console.log(notes[foundElement]);
		notes[foundElement] = EditedNote;
		this.setState((state) => {
			return { notes };
		});
	}
	render() {
		return (
			<div className="App">
				{/* created function onAddNote takes the new note and invokes the adding note function handleAddNote */}
				<CreateNotes onAddNote={(newNote) => this.handleAddNote(newNote)} />
				<NoteList
					notes={this.state.notes}
					onDelete={(dateCreated) => {
						this.handleDeleteNote(dateCreated);
					}}
					onUpdate={(EditedNote) => {
						this.handleUpdate(EditedNote);
					}}
				/>
			</div>
		);
	}
}
export default App;
