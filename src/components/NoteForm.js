import React, { useRef } from 'react'
import styled from "styled-components"
import { Button } from "./utils"

function NoteForm({ closeForm, submitFunction }) {
    const modalRef = useRef()

    const handleSubmitForm = (e) => {
        e.preventDefault();
        submitFunction()
    }

    const handleCloseForm = (e) => {
        if (e.target === modalRef.current)
            closeForm(false)
    }

    return (
        <Wrapper>

            <Modal ref={modalRef} onClick={handleCloseForm}>
                <Form >
                    <Input type="text" placeholder="Title" />
                    <TextArea rows="10" autoFocus placeholder="Take a Note"></TextArea>
                    <Button onClick={handleSubmitForm} type="submit">Add</Button>
                </Form>
            </Modal>

        </Wrapper>
    )
}

const Wrapper = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
`
const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 5;
    display:flex;
    justify-content:center;
    background-color:rgba(0, 0, 0,0.1);
    padding:1rem;
`
const Form = styled.form`
    margin-top: 15vh;
    width: 100%;
    max-width: 600px;
    height:fit-content;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    box-shadow: 0px 5px 15px 0px rgba(50, 50, 50, 0.2);
    border-radius:5px;
    background-color: white;
    padding: 0.5rem;
`
const Input = styled.input`
    width:100%;
`
const TextArea = styled.textarea`
    &{
        width: 100%;
        font-weight: 500;
        resize: none;
        scrollbar-width: thin;
        scrollbar-color: #4d4c4c #f5f5f5;
        overflow: auto;
        white-space: pre-wrap;
        margin-top: 0.5rem;
    }
    &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: #f5f5f5;
      }
      
    &::-webkit-scrollbar {
        width: 5px;
        background-color: #f5f5f5;
    }
    
    &::-webkit-scrollbar-thumb {
        background-color: #4d4c4c;
    }
`

export default NoteForm