import './App.css'
import CreateNoteForm from "./components/CreateNoteForm"
import Logos from "./components/Logos"

import styled from "styled-components"

function App() {

  return (
    <Wrapper>

      <Logos />

      <CreateNoteForm />

    </Wrapper>
  )
}

const Wrapper = styled.div`
  width:100%;
  min-height:100vh;
  background-color:whitesmoke;
  display:flex;
  flex-direction:column;
  align-items:center;
  padding: 1rem;
`

export default App;
