import { useRef, useContext } from 'react'
import NoteContext from '../context/noteContext'

export default function Form() {
    const noteContext = useContext(NoteContext)
    const inputRef = useRef()
    return (
        <form onSubmit={(e) => noteContext.addNote(e, inputRef)} className="note-form">
            <textarea ref={inputRef} placeholder="Create a new note..."></textarea>
            <button type="submit">Add</button>
        </form>
    );
}
