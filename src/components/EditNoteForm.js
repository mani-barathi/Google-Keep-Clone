import React, { useRef, useState } from 'react'
import { Button, Form, FormWrapper, Modal, Input, TextArea } from "./utils"
import { useStateValue } from "../StateContext"
import styled from 'styled-components'

function NoteForm({ }) {
    const modalRef = useRef()
    const [{ editingNote }, dispatch] = useStateValue()
    const [loading, setLoading] = useState(false)

    if (!editingNote)
        return null

    const handleEditNote = (e) => {
        e.preventDefault();
        console.log(`handleEditNote()`)
    }

    const handleDeleteNote = async () => {
        if (loading) return
        setLoading(true)
        console.log(`Deleting Note with Title ${editingNote.data.title}`)

        try {
            const response = await fetch('/api/deleteNote', {
                method: "POST",
                body: JSON.stringify({ id: editingNote.id })
            })
            const { report, id } = await response.json()
            if (report) {
                dispatch({ type: "SET_DELETED_NOTE_ID", payload: id })
                dispatch({ type: "SET_EDITING_NOTE", payload: null })
            } else
                alert('something went wrong. Try again later!')
        } catch (error) {
            alert('something went wrong')
        }
        setLoading(false)
    }

    const handleCloseForm = (e) => {
        if (e.target === modalRef.current)
            dispatch({ type: "SET_EDITING_NOTE", payload: null })
    }


    return (
        <FormWrapper>

            <Modal ref={modalRef} onClick={handleCloseForm}>
                <Form >
                    <Input name="title" type="text" defaultValue={editingNote.data.title} placeholder="Title" />
                    <TextArea name="text" rows="10" autoFocus placeholder="Take a Note"
                        defaultValue={editingNote.data.text}>
                    </TextArea>
                    <Row>
                        <DeleteButton onClick={handleDeleteNote} type="button" >Delete</DeleteButton>
                        <Button onClick={handleEditNote} type="submit">Save</Button>
                    </Row>
                </Form>
            </Modal>

        </FormWrapper>
    )
}

const Row = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
`
const DeleteButton = styled(Button)`
    {
        border:1px solid #E74C3C;
        background-color:transparent;
        color:#E74C3C;
    }
    &:hover{
        background-color:#E74C3C;
        color:rgb(255,255,255);
    }
`

export default NoteForm