import { useState } from "react"
import NoteForm from "./NoteForm"
import styled from "styled-components"
import { Button } from "./utils"

function CreateNoteForm() {
    const [showForm, setShowForm] = useState(false)

    const openForm = () => setShowForm(true)
    const closeForm = () => setShowForm(false)

    const createNote = () => {
        console.log("createNote()")
    }

    return (
        <div>
            <PlusIconButton onClick={openForm} title="Create Note" >+</PlusIconButton>
            {showForm &&
                <NoteForm closeForm={closeForm} submitFunction={createNote} />}
        </div>
    )
}

const PlusIconButton = styled(Button)`
    font-size: 2.5rem;
    font-weight:500;
    padding: 0.1rem 0.7rem;
    box-shadow: 0px 5px 15px 0px rgba(50, 50, 50, 0.2);
    border-radius:50%;
`
export default CreateNoteForm
