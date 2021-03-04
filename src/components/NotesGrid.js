import React, { useEffect, useState } from 'react'
import Note from "./Note"
import styled from "styled-components"
import { useStateValue } from '../StateContext'

function NotesGrid() {
    const [notes, setNotes] = useState([])
    const [{ newNote, deletedNoteId, updatedNote }, dispatch] = useStateValue()

    // adding newly created Note to the top the notes
    useEffect(() => {
        if (newNote)
            setNotes(prev => [newNote, ...prev])
    }, [newNote])

    // removing the deleted note based on the id
    useEffect(() => {
        if (deletedNoteId)
            setNotes(prev => prev.filter(note => note.id !== deletedNoteId))
    }, [deletedNoteId])

    // Update the Note
    useEffect(() => {
        if (updatedNote) {
            setNotes(prev => prev.map(note => (note.id === updatedNote.id) ? updatedNote : note))
            dispatch({ type: "SET_UPDATED_NOTE", payload: null })
        }
    }, [updatedNote, dispatch])

    useEffect(() => {
        const getNotes = async () => {
            try {
                const response = await fetch('/api/getNotes')
                const { data, report } = await response.json()

                if (report) {
                    console.log(data)
                    setNotes(data)
                }
            } catch (error) {
                alert('something went wrong! Try again later')
            }
        }
        getNotes()
    }, [])

    return (
        <Grid>
            { notes.map(note => <Note key={note.id} id={note.id} data={note.data} />)}
        </Grid>
    )
}

const Grid = styled.div`
    margin:2rem 0;
    width:100%;
    max-width:1300px;
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(auto-fill,minmax(260px,1fr));
    grid-gap:1rem;
`

export default NotesGrid