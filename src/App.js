import './App.css';

//State Reducer
import NoteState from './context/noteState'

//Components
import Header from './components/Header'
import Notes from './components/Notes'
import Form from './components/Form'


function App() {
  
  const dragOver = e => {
    e.stopPropagation()
    e.preventDefault()
  }

  return (
    <NoteState>
      <div className="app" onDragOver={dragOver}>
        <Header />
        <Form/>
        <Notes/>
      </div>
    </NoteState>
  )
}

export default App;