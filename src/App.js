import './App.css';
import { useRef, useReducer } from 'react'
import { nanoid } from 'nanoid';

const initialNotesState = {
  lastNoteCreated: null,
  totalNotes: 0,
  notes: []
}

//Reducer function
const notesReducer = (prevState, action) =>{
  switch(action.type){
      case 'ADD_NOTE': {
       const newState = {
         lastNoteCreated: new Date().toTimeString().slice(0,8) , 
         totalNotes:prevState.notes.length + 1 , 
         notes: [...prevState.notes, action.payload] 
        };

        console.log('After ADD_NOTE', newState);
        return newState;
      }
        
      default: 
        
  }
}


function App() {
  const inputRef = useRef()
  const [notesState, dispatch ] = useReducer(notesReducer, initialNotesState)

  const addNote = e => {
    e.preventDefault()

    const inputValue = inputRef.current.value
    
    if (inputValue.trim() === '') return
    
    const newNote = {
      id: nanoid(),
      text: inputValue,
      rotate: Math.floor(Math.random() * 20)
    }

    dispatch({type:'ADD_NOTE', payload: newNote})

    inputRef.current.value = ''
  }

  const dropNote = e => {
    e.target.style.left = `${e.pageX - 50}px`
    e.target.style.top = `${e.pageY - 50}px`
  }

  const dragOver = e => {
    e.stopPropagation()
    e.preventDefault()
  }

  return (
    <div className="app" onDragOver = {dragOver}>
      <h1>
        Sticky Notes
      </h1>
      <form onSubmit={addNote} className="note-form">
        <textarea ref={inputRef} placeholder="Create a new note..."></textarea>
        <button type="submit">Add</button>
      </form>
    {notesState
      .notes
      .map(notes => (
        <div className="note" 
             key={notes.id} 
             style={{transform: `rotate(${notes.rotate}deg)`}}
             draggable="true"
             onDragEnd={dropNote}
        >
          <div className="close">
              <button type="button" class="btn-x">X</button>
          </div>
          <pre className="text">{notes.text}</pre>
        </div>
      ))
    }
    </div>
  )
}

export default App;
