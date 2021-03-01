import React, { useRef } from 'react'
import { Button, Form, FormWrapper, Modal, Input, TextArea } from "./utils"

function NoteForm({ }) {
    const modalRef = useRef()

    const handleEditNote = (e) => {
        e.preventDefault();
        submitFunction()
    }

    const handleCloseForm = (e) => {
        if (e.target === modalRef.current)
            closeForm(false)
    }

    const openForm = () => setShowForm(true)
    const closeForm = () => setShowForm(false)

    return (
        <FormWrapper>

            <Modal ref={modalRef} onClick={handleCloseForm}>
                <Form >
                    <Input type="text" placeholder="Title" />
                    <TextArea rows="10" autoFocus placeholder="Take a Note"></TextArea>
                    <Button onClick={handleEditNote} type="submit">Add</Button>
                </Form>
            </Modal>

        </FormWrapper>
    )
}

export default NoteForm