function addNote(noteText, notesContainer) {
    if (noteText.trim()) {
        const noteDiv = document.createElement('div');
        noteDiv.classList.add('note');
        noteDiv.textContent = noteText;
        notesContainer.appendChild(noteDiv);
        return true;
    } else {
        return false;
    }
}
export { addNote };

document.addEventListener('DOMContentLoaded', () => {
    const addNoteBtn = document.getElementById('addNoteBtn');
    const noteInput = document.getElementById('noteInput');
    const notesContainer = document.getElementById('notesContainer');

    addNoteBtn.addEventListener('click', () => {
        const noteText = noteInput.value;
        if (addNote(noteText, notesContainer)) {
            noteInput.value = '';
        } else {
            alert('Please enter a note!');
        }
    });
});
