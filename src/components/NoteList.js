import NoteItem from "./NoteItem";
function NoteList(props) {
	return (
		<div className="note-list">
			{props.notes.map((note, idx) => (
				// giving unique identifier to each element
				<div key={idx} className="note-item">
					<NoteItem
						// sending up the info as one item note
						note={note}
						// lifting state up
						onDelete={(dateCreated) => {
							props.onDelete(dateCreated);
						}}
						onUpdate={(EditedNote) => {
							props.onUpdate(EditedNote);
						}}
					/>
				</div>
			))}
		</div>
	);
}

export default NoteList;
