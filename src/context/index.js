import { createContext, useReducer } from "react";

const initialValue = {}

export const Context = createContext()

const reducer = (state = initialValue, action) => {
    const { type, payload } = action

    switch (type) {
        default : 
            return { state }
    }
}

const Provider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialValue)

    return (
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
}