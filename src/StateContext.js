import { useReducer, createContext, useContext } from "react"

const StateContext = createContext()

function StateProvider({ children, reducer, initialState }) {
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}  >
            {children}
        </StateContext.Provider>
    )
}

export const useStateValue = () => useContext(StateContext)

export default StateProvider