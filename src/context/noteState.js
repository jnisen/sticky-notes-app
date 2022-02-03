import { useReducer } from 'react';
import noteContext from './noteContext'
import notesReducer from './noteReducer'
import { nanoid } from 'nanoid';
import { ADD_NOTE, DELETE_NOTE } from '../types/index'

//Administracion
const NoteState = props => {

    const initialNotesState = {
        lastNoteCreated: null,
        totalNotes: 0,
        notes: []
    }

    const [notesState, dispatch] = useReducer(notesReducer, initialNotesState)

    const addNote = (e, inputRef) => {
        e.preventDefault()

        const inputValue = inputRef.current.value

        if (inputValue.trim() === '') return

        const newNote = {
            id: nanoid(),
            text: inputValue,
            rotate: Math.floor(Math.random() * 20)
        }

        console.log(newNote)

        dispatch({ type: ADD_NOTE, payload: newNote })

        inputRef.current.value = ''
    }

    const deleteNote = note => {
      dispatch({ type: DELETE_NOTE, payload: note })
    }


    const value = {
        lastNoteCreated: notesState.lastNoteCreated,
        totalNotes: notesState.totalNotes,
        notes: notesState.notes,
        addNote,
        deleteNote
    }

    return (
        <noteContext.Provider value={value}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState