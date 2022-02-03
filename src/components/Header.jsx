import {useContext} from 'react'
import NoteContext from '../context/noteContext'

export default function Header() {
    const noteContext = useContext(NoteContext)

    return (
        <h1>
            Sticky Notes ({noteContext.totalNotes})
            <span>{noteContext.totalNotes > 0 ? `Last created at ${noteContext.lastNoteCreated}` : null}</span>
        </h1>
    );
}
