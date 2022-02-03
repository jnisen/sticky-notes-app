import { useContext, Fragment } from 'react'
import NoteContext from '../context/noteContext'
import Note from './Note'

export default function Notes() {
  const noteContext = useContext(NoteContext)

  return (
    <Fragment>
      {noteContext.totalNotes > 0 &&
        noteContext
          .notes
          .map(note => (
            <Note
              key={note.id} note={note}

            />
          ))
      }
    </Fragment>
  )

}
