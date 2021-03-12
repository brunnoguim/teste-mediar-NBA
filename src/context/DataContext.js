import React, {createContext, useState, useContext} from 'react'

const DataContext = createContext()

export default function SelectorProvider ({children}){
    const [inputData, setInputData] = useState('')
    const [playerData, setPlayerData] = useState(null)
    const [playerStats, setPlayerStats] = useState(null)
    const [playerChartData, setPlayerChartData] = useState([null])
    const [teamData, setTeamData] = useState(null)
    const [teamChartData, setTeamChartData] = useState(null)
    const [teamLogo, setTeamLogo] = useState(null)

    return(
        <DataContext.Provider value={{
            inputData,
            setInputData,
            playerData,
            setPlayerData,
            playerStats,
            setPlayerStats,
            playerChartData,
            setPlayerChartData,
            teamData,
            setTeamData,
            teamChartData,
            setTeamChartData,
            teamLogo,
            setTeamLogo,
        }} >{children}</DataContext.Provider>
    )
}

export function useData(){
    const dataContext = useContext(DataContext)
    const { inputData, setInputData, playerData, setPlayerData, playerStats, setPlayerStats, playerChartData, setPlayerChartData, teamData, setTeamData, teamChartData, setTeamChartData, teamLogo, setTeamLogo } = dataContext
    return { inputData, setInputData, playerData, setPlayerData, playerStats, setPlayerStats, playerChartData, setPlayerChartData, teamData, setTeamData, teamChartData, setTeamChartData, teamLogo, setTeamLogo }
}