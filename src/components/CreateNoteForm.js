import { useState, useRef } from "react"
import styled from "styled-components"
import { Button, Form, FormWrapper, Modal, Input, TextArea } from "./utils"
import { useStateValue } from "../StateContext"

function CreateNoteForm() {
    const [, dispatch] = useStateValue()
    const [showForm, setShowForm] = useState(false)
    const [loading, setLoading] = useState(false)
    const modalRef = useRef()
    const formRef = useRef()

    const handleAddNote = async (e) => {
        e.preventDefault()
        setLoading(true)

        const newNote = {
            title: formRef.current.title.value || '',
            text: formRef.current.text.value,
        }

        try {
            const response = await fetch('/.netlify/functions/addNote', {
                method: "POST",
                body: JSON.stringify(newNote)
            })
            const { data, report } = await response.json()

            if (report) {
                dispatch({ type: 'SET_NEW_NOTE', payload: data })
                formRef.current.reset()
                closeForm()
            }
            else
                alert('something went wrong! Try again later')
        } catch (error) {
            alert('something went wrong! Try again later')
        }
        setLoading(false)
    }

    const closeModal = (e) => {
        if (e.target === modalRef.current)
            closeForm(false)
    }

    const openForm = () => setShowForm(true)
    const closeForm = () => setShowForm(false)

    return (
        <div>
            <PlusIconButton onClick={openForm} title="Create Note" >+</PlusIconButton>
            {showForm &&
                <FormWrapper>

                    <Modal ref={modalRef} onClick={closeModal}>
                        <Form onSubmit={handleAddNote} ref={formRef} autoComplete="off">
                            <Input name="title" type="text" placeholder="Title" />
                            <TextArea name="text" rows="10" autoFocus required placeholder="Take a Note"></TextArea>
                            <Button disabled={loading} type="submit">Add</Button>
                        </Form>
                    </Modal>

                </FormWrapper>}
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
