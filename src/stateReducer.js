export const initialState = {
    newNote: null,
    upatedNote: null,
    deletedNoteId: null,
    editingNote: null
}

export const reducer = (state, action) => {
    console.log('Reducer action', action)
    switch (action.type) {
        case 'SET_NEW_NOTE':
            return {
                ...state,
                newNote: action.payload
            }

        case 'SET_UPDATED_NOTE':
            return {
                ...state,
                upatedNote: action.payload
            }

        case 'SET_DELETED_NOTE_ID':
            return {
                ...state,
                deletedNoteId: action.payload
            }

        case 'SET_EDITING_NOTE':
            return {
                ...state,
                editingNote: action.payload
            }

        default:
            return state
    }
}