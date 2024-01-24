import { addNote } from './script';

describe('addNote function', () => {
    let notesContainer;

    beforeEach(() => {
        // Set up our document body
        document.body.innerHTML = '<div id="notesContainer"></div>';
        notesContainer = document.getElementById('notesContainer');
    });

    test('should add a note when noteText is not empty', () => {
        const noteText = 'Test note';
        const result = addNote(noteText, notesContainer);
        expect(result).toBe(true);
        expect(notesContainer.childNodes.length).toBe(1);
        expect(notesContainer.childNodes[0].textContent).toBe(noteText);
    });

    test('should not add a note when noteText is empty', () => {
        const noteText = '';
        const result = addNote(noteText, notesContainer);
        expect(result).toBe(false);
        expect(notesContainer.childNodes.length).toBe(0);
    });
});
