import { useContext } from 'react'
import NoteContext from '../context/noteContext'

export default function Note({note}) {
    const noteContext = useContext(NoteContext)

    const dropNote = e => {
        e.target.style.left = `${e.pageX - 50}px`
        e.target.style.top = `${e.pageY - 50}px`
    }


    return (
        <div className="note"
            style={{ transform: `rotate(${note.rotate}deg)` }}
            draggable="true"
            onDragEnd={dropNote}
        >
            <div className="close" >
                <button className="btn-x" onClick={() => noteContext.deleteNote(note)}>X</button>
            </div>
            <pre className="text">{note.text}</pre>
        </div>
    );
}
