import '../styles/players-teams.css'
import { useSelector } from '../context/SelectorContext'
import { useData } from '../context/DataContext'
import teamsdata from '../teamsdata.json'

function Teams() {

    //Navegação da searchbar (toggle do selector e players)
    const { setIsSelector, setIsTeams } = useSelector()

    //Setando o hook do DataContext
    const { inputData, setInputData, teamData, setTeamData, setTeamChartData, setTeamLogo } = useData()

    //Buscando o nome dos times no array com os dados e jogando eles para os states utilizados para os dados e gráfico
    const searchTeams = () => {
        var time = teamsdata.find(time => time.name1 === inputData.toUpperCase())
        setTeamData(time)
        if (time === undefined){
            time = teamsdata.find(time => time.name2 === inputData.toUpperCase())
            setTeamData(time)
            if (time === undefined){
                time = teamsdata.find(time => time.name3 === inputData.toUpperCase())
                setTeamData(time)
                if (time === undefined){
                    alert('Time não encontrado. Utilize o "?" caso esteja tendo dificuldades com o nome de algum time')
                }
            }
        }
        if (time !== null && time !== undefined){
            setTeamChartData([
                {
                    name: "Vitórias",
                    value: time.wins,
                },
                {
                    name: "Derrotas",
                    value: time.losses,
                },
            ])
            setTeamLogo(time.name2)
        }
    }

    //Executando a função search também com "enter" no input
    const searchInput = (evt) => {
        if (evt.key === "Enter"){
            searchTeams()
        }
    }

    //Return do componente
    return (
        <div className="players-teams-container">
            <div>
                <div className="input-container">
                    <input placeholder="Digite o nome do time" onChange={e => setInputData(e.target.value)} value={inputData} onKeyUp={searchInput}></input>
                    <a href="https://www.nba.com/teams" target="_blank" rel="noopener noreferrer"><i class="fas fa-question"></i></a>
                </div>
                <button className="button-pesquisar" onClick={searchTeams}>Pesquisar</button>
            </div>
            <div className="stats-container">
                <p><span className="stats-titles">Time:</span>{(teamData === null || teamData === undefined) ? (''):(` ${teamData.full_name}`)}</p>
                <p><span className="stats-titles">Vitórias:</span>{(teamData === null || teamData === undefined) ? (''):(` ${teamData.wins}`)}</p>
                <p><span className="stats-titles">Derrotas:</span>{(teamData === null || teamData === undefined) ? (''):(` ${teamData.losses}`)}</p>
                <strong><span role="img" aria-label="chart">📈</span> Médias por partida:</strong>
                <p><span className="stats-titles">Pontos Marcados:</span>{(teamData === null || teamData === undefined) ? (''):(` ${teamData.points_scored}`)}</p>
                <p><span className="stats-titles">Pontos Concedidos:</span>{(teamData === null || teamData === undefined) ? (''):(` ${teamData.points_conceded}`)}</p>
                <p><span className="stats-titles">Margem de Vitória:</span>{(teamData === null || teamData === undefined) ? (''):(` ${teamData.mov}`)}</p>
            </div>
            <div>
                <button className="button-voltar" onClick={()=>{setIsSelector(true); setIsTeams(false); setTeamData(null); setTeamChartData(null); setInputData(null); setTeamLogo(null)}} >Voltar</button>
            </div>
        </div>
    )
}

export default Teams