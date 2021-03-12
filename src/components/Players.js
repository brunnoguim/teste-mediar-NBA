import '../styles/players-teams.css'
import { useSelector } from '../context/SelectorContext'
import { useData } from '../context/DataContext'
import React from 'react'

function Players() {

    //Navegação da searchbar (toggle do selector e players)
    const { setIsSelector, setIsPlayers } = useSelector()

    //Determinando os paths da api
    const api = {
        pId: "https://www.balldontlie.io/api/v1/players?search=",
        pStats: "https://www.balldontlie.io/api/v1/season_averages?season=2020&player_ids[]=",
    }

    //Setando o hook do DataContext
    const { inputData, setInputData, playerData, setPlayerData, playerStats, setPlayerStats, setPlayerChartData, } = useData()

    //Selecionando o value do input e fazendo o fetch do ID dos jogadores
    const search = (evt) => {
        fetch(`${api.pId}${inputData}`)
        .then(res => res.json())
        .then(result => {
            if (result.data[0] === undefined){
                alert('Jogador não encontrado. Utilize o "?" caso esteja tendo dificuldades com o nome de algum jogador')
            } else if (result.data.length > 1) {
                alert('Por favor especifique melhor o nome do jogador')
            } else {
                stats(result.data[0].id)
                setPlayerData(result.data[0])
            }
        }).catch(err => {
            window.alert(err)
        })
    }

    //Executando a função search também com "enter" no input
    const searchButton = (evt) => {
        if (evt.key === "Enter"){
            search()
        }
    }

    //Fetch dos stats dos jogadores usando o ID dos jogadores, já setando o array de dados para o gráfico
    const stats = (playerId) =>{
        fetch(`${api.pStats}${playerId}`)
        .then(res => res.json())
        .then(result => {
            if (result.data[0] === undefined){
                alert('Este jogador não atuou nesta temporada')
            } else {
                setPlayerStats(result.data[0])
                setPlayerChartData([
                    {
                        name: "Pontos",
                        Média: result.data[0].pts,
                        index: 1,
                        disabled: false,
                    },
                    {
                        name: "Rebotes",
                        Média: result.data[0].reb,
                        index: 2,
                        disabled: false,
                    },
                    {
                        name: "Assistências",
                        Média: result.data[0].ast,
                        index: 3,
                        disabled: false,
                    },
                    {
                        name: "Bloqueios",
                        Média: result.data[0].blk,
                        index: 4,
                        disabled: false,
                    },
                    {
                        name: "Roubadas",
                        Média: result.data[0].stl,
                        index: 5,
                        disabled: false,
                    },
                ])
            }
        }).catch(err => {
            window.alert(err)
        })
    }

    //Return do componente
    return (
        <div className="players-teams-container">
            <div>
                <div className="input-container">
                    <input type="text" placeholder="Digite o nome do jogador" onChange={e => setInputData(e.target.value)} value={inputData} onKeyUp={searchButton} ></input>
                    <a href="https://www.nba.com/players" target="_blank" rel="noopener noreferrer"><i class="fas fa-question"></i></a>
                </div>
                <button className="button-pesquisar" onClick={search}>Pesquisar</button>
            </div>
            <div className="stats-container">
                <p><span className="stats-titles">Nome:</span>{(playerData === null) ? (''):(` ${playerData.first_name} ${playerData.last_name}`)}</p>
                <p><span className="stats-titles">Time:</span>{(playerData === null) ? (''):(` ${playerData.team.full_name}`)}</p>
                <p><span className="stats-titles">Posição:</span>{(playerData === null) ? (''):(` ${playerData.position}`)}</p>
                
                <strong><span role="img" aria-label="chart">📈</span> Médias por partida:</strong>

                <p><span className="stats-titles">Pontos:</span>{(playerStats === null) ? (''):(` ${playerStats.pts}`)}</p>
                <p><span className="stats-titles">Rebotes:</span>{(playerStats === null) ? (''):(` ${playerStats.reb}`)}</p>
                <p><span className="stats-titles">Assistências:</span>{(playerStats === null) ? (''):(` ${playerStats.ast}`)}</p>
                <p><span className="stats-titles">Bloqueios:</span>{(playerStats === null) ? (''):(` ${playerStats.blk}`)}</p>
                <p><span className="stats-titles">Roubadas:</span>{(playerStats === null) ? (''):(` ${playerStats.stl}`)}</p>
            </div>
            <div>
                <button className="button-voltar" onClick={()=>{setIsSelector(true); setIsPlayers(false); setPlayerStats(null); setPlayerData(null); setInputData(null)}} >Voltar</button>
            </div>
        </div>
    )
}

export default Players