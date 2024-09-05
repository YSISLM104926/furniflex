import React, { createContext } from 'react'

export const Context = createContext({});

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
    const value = {};
    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider