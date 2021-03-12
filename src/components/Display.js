import '../styles/display.css'
import { useData } from '../context/DataContext'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell } from 'recharts';

function Display() {

    //Setando o hook do DataContext
    const { playerStats, playerChartData, teamData, teamChartData, teamLogo } = useData()

    //Setando as cores da pie chart dos times
    const COLORS = ['var(--azul-claro)', 'var(--vermelho-escuro)'];

    //Setando a customizaçãodo label da pie chart dos times
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    //Return do componente
    return (
        <div className="display-container">
            <div className="card">
                {(teamLogo !== null) ? (
                    <div className="logo-container">
                        <img src={process.env.PUBLIC_URL + `/images/logos/${teamLogo}.png`} alt="Logo Time" className="logo"></img>
                    </div>
                ) : ('')}
                {(playerStats !== null) ? (
                    <BarChart width={900} height={550} data={playerChartData}>
                        <XAxis dataKey="name" fontSize="1.5rem" stroke="white" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <YAxis fontSize="1.5rem" stroke="white" type="number" domain={[0, 35]} ticks={[5, 10, 15, 20, 25, 30, 35]}   />
                        <Tooltip wrapperStyle={{ fontSize: '1.3rem' }}/>
                        <Bar dataKey="Média" fill="var(--azul-claro)" /> 
                    </BarChart>
                ) : [(teamData !== null && teamData!== undefined) ? (
                    <PieChart width={900} height={550}>
                        <Pie
                            data={teamChartData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={250}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {teamChartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip wrapperStyle={{ fontSize: '1.3rem' }}/>
                    </PieChart>
                ) : (
                    <p>Selecione um time ou jogador para visualizar suas estatísticas desta temporada</p>
                )]}
            </div>
        </div>
    )
}

export default Display
