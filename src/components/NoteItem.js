import Moment from "react-moment";
import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

// passing in note item (see noteList) instead of props.note

const NoteItem = ({ note, ...props }) => {
	const [modalIsOpen, setModalIsOPen] = useState(false);

	function handleOpenModal() {
		setModalIsOPen(true);
	}
	function handleCloseModal() {
		setModalIsOPen(false);
	}
	return (
		<div>
			<div className="date-on-note">
				<Moment format="MMM Do h:mm a">{note.dateCreated}</Moment>
				<button
					className="delete-button"
					// getting idetifier
					onClick={() => props.onDelete(note.dateCreated)}
				>
					x
				</button>
			</div>
			<div onClick={handleOpenModal}>
				<h3 className="title-note">{note.noteTitle}</h3>
				<div className="title-note">{note.noteText}</div>
			</div>
			{modalIsOpen && (
				<Modal
					modalDate={note.dateCreated}
					modalTitle={note.noteTitle}
					modalText={note.noteText}
					id={note.id}
					// lifting state up
					onCancel={handleCloseModal}
					onUpdate={(EditedNote) => props.onUpdate(EditedNote)}
				/>
			)}
			{modalIsOpen && <Backdrop onCancel={handleCloseModal} />}
		</div>
	);
};

export default NoteItem;
