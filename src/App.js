import './App.css'
import Logos from "./components/Logos"
import CreateNoteForm from "./components/CreateNoteForm"
import EditNoteForm from "./components/EditNoteForm"
import NotesGrid from "./components/NotesGrid"

import styled from "styled-components"

function App() {

  return (
    <Wrapper>

      <Logos />

      <CreateNoteForm />

      <EditNoteForm />

      <NotesGrid />

    </Wrapper>
  )
}

const Wrapper = styled.div`
  width:100%;
  min-height:100vh;
  background-color:#F5F5F5;
  display:flex;
  flex-direction:column;
  align-items:center;
  padding: 1rem;
`

export default App;
