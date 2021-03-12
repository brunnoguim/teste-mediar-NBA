import React, {createContext, useState, useContext} from 'react'

const SelectorContext = createContext()

export default function SelectorProvider ({children}){
    const [isSelector, setIsSelector] = useState(true)
    const [isPlayers, setIsPlayers] = useState(false)
    const [isTeams, setIsTeams] = useState(false)

    return (
        <SelectorContext.Provider value={{
            isSelector,
            setIsSelector,
            isPlayers,
            setIsPlayers,
            isTeams,
            setIsTeams,
        }} >{children}</SelectorContext.Provider>
    )
}

export function useSelector(){
    const selecContext = useContext(SelectorContext)
    const { isSelector, setIsSelector, isPlayers, setIsPlayers, isTeams, setIsTeams } = selecContext
    return { isSelector, setIsSelector, isPlayers, setIsPlayers, isTeams, setIsTeams }
}