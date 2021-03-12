import React from "react"
import '../styles/selector.css'
import Players from './Players'
import Teams from './Teams'
import {useSelector} from '../context/SelectorContext'

function Selector() {

    //Setando o hook para transicionar o selector entre players e teams
    const { isSelector, setIsSelector, isPlayers, setIsPlayers, isTeams, setIsTeams } = useSelector()

    //Return do componente
    return (
        <>
            {isSelector ? (
                <div className="selector-container">
                    <p><span role="img" aria-label="basketball">🏀</span> Selecione do que você deseja consultar as estatísticas:</p>
                    <div>
                        <button onClick={()=>{setIsSelector(false); setIsPlayers(true)}}>Jogadores</button>
                        <button onClick={()=>{setIsSelector(false); setIsTeams(true)}}>Times</button>
                    </div>
                </div>
            ) : null}
            {isPlayers ? (
                <Players />
            ) : null}
            {isTeams ? (
                <Teams />
            ) : null}
        </>
    )
}

export default Selector
