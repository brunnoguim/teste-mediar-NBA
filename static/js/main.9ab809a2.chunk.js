(this.webpackJsonpteste_tecnico_frontend=this.webpackJsonpteste_tecnico_frontend||[]).push([[0],{153:function(e,a,s){},183:function(e,a,s){},184:function(e,a,s){},321:function(e,a,s){},322:function(e,a,s){},323:function(e,a,s){"use strict";s.r(a);var t=s(0),n=s.n(t),o=s(78),c=s.n(o),l=(s(183),s(184),s(16)),i=s(2),r=Object(t.createContext)();function d(e){var a=e.children,s=Object(t.useState)(""),n=Object(l.a)(s,2),o=n[0],c=n[1],d=Object(t.useState)(null),m=Object(l.a)(d,2),j=m[0],u=m[1],O=Object(t.useState)(null),p=Object(l.a)(O,2),b=p[0],h=p[1],S=Object(t.useState)([null]),v=Object(l.a)(S,2),x=v[0],N=v[1],_=Object(t.useState)(null),f=Object(l.a)(_,2),A=f[0],T=f[1],E=Object(t.useState)(null),I=Object(l.a)(E,2),L=I[0],C=I[1],D=Object(t.useState)(null),R=Object(l.a)(D,2),w=R[0],P=R[1];return Object(i.jsx)(r.Provider,{value:{inputData:o,setInputData:c,playerData:j,setPlayerData:u,playerStats:b,setPlayerStats:h,playerChartData:x,setPlayerChartData:N,teamData:A,setTeamData:T,teamChartData:L,setTeamChartData:C,teamLogo:w,setTeamLogo:P},children:a})}function m(){var e=Object(t.useContext)(r);return{inputData:e.inputData,setInputData:e.setInputData,playerData:e.playerData,setPlayerData:e.setPlayerData,playerStats:e.playerStats,setPlayerStats:e.setPlayerStats,playerChartData:e.playerChartData,setPlayerChartData:e.setPlayerChartData,teamData:e.teamData,setTeamData:e.setTeamData,teamChartData:e.teamChartData,setTeamChartData:e.setTeamChartData,teamLogo:e.teamLogo,setTeamLogo:e.setTeamLogo}}var j=s(325),u=s(167),O=s(329),p=s(168),b=s(67),h=s(174),S=s(331),v=s(169),x=s(85);var N=function(){var e=m(),a=e.playerStats,s=e.playerChartData,t=e.teamData,n=e.teamChartData,o=e.teamLogo,c=["var(--azul-claro)","var(--vermelho-escuro)"],l=Math.PI/180;return Object(i.jsx)("div",{className:"display-container",children:Object(i.jsxs)("div",{className:"card",children:[null!==o?Object(i.jsx)("div",{className:"logo-container",children:Object(i.jsx)("img",{src:"./images/logos/".concat(o,".png"),alt:"Logo Time",className:"logo"})}):"",null!==a?Object(i.jsxs)(j.a,{width:900,height:550,data:s,children:[Object(i.jsx)(u.a,{dataKey:"name",fontSize:"1.5rem",stroke:"white"}),Object(i.jsx)(O.a,{stroke:"#ccc",strokeDasharray:"5 5"}),Object(i.jsx)(p.a,{fontSize:"1.5rem",stroke:"white",type:"number",domain:[0,35],ticks:[5,10,15,20,25,30,35]}),Object(i.jsx)(b.a,{wrapperStyle:{fontSize:"1.3rem"}}),Object(i.jsx)(h.a,{dataKey:"M\xe9dia",fill:"var(--azul-claro)"})]}):[null!==t&&void 0!==t?Object(i.jsxs)(S.a,{width:900,height:550,children:[Object(i.jsx)(v.a,{data:n,cx:"50%",cy:"50%",labelLine:!1,label:function(e){var a=e.cx,s=e.cy,t=e.midAngle,n=e.innerRadius,o=e.outerRadius,c=e.percent,r=n+.5*(o-n),d=a+r*Math.cos(-t*l),m=s+r*Math.sin(-t*l);return Object(i.jsx)("text",{x:d,y:m,fill:"white",textAnchor:d>a?"start":"end",dominantBaseline:"central",children:"".concat((100*c).toFixed(0),"%")})},outerRadius:250,fill:"#8884d8",dataKey:"value",children:n.map((function(e,a){return Object(i.jsx)(x.a,{fill:c[a%c.length]},"cell-".concat(a))}))}),Object(i.jsx)(b.a,{wrapperStyle:{fontSize:"1.3rem"}})]}):Object(i.jsx)("p",{children:"Selecione um time ou jogador para visualizar suas estat\xedsticas desta temporada"})]]})})},_=(s(321),s(322),s(153),Object(t.createContext)());function f(e){var a=e.children,s=Object(t.useState)(!0),n=Object(l.a)(s,2),o=n[0],c=n[1],r=Object(t.useState)(!1),d=Object(l.a)(r,2),m=d[0],j=d[1],u=Object(t.useState)(!1),O=Object(l.a)(u,2),p=O[0],b=O[1];return Object(i.jsx)(_.Provider,{value:{isSelector:o,setIsSelector:c,isPlayers:m,setIsPlayers:j,isTeams:p,setIsTeams:b},children:a})}function A(){var e=Object(t.useContext)(_);return{isSelector:e.isSelector,setIsSelector:e.setIsSelector,isPlayers:e.isPlayers,setIsPlayers:e.setIsPlayers,isTeams:e.isTeams,setIsTeams:e.setIsTeams}}var T=function(){var e=A(),a=e.setIsSelector,s=e.setIsPlayers,t="https://www.balldontlie.io/api/v1/players?search=",n="https://www.balldontlie.io/api/v1/season_averages?season=2020&player_ids[]=",o=m(),c=o.inputData,l=o.setInputData,r=o.playerData,d=o.setPlayerData,j=o.playerStats,u=o.setPlayerStats,O=o.setPlayerChartData,p=function(e){fetch("".concat(t).concat(c)).then((function(e){return e.json()})).then((function(e){void 0===e.data[0]?alert('Jogador n\xe3o encontrado. Utilize o "?" caso esteja tendo dificuldades com o nome de algum jogador'):e.data.length>1?alert("Por favor especifique melhor o nome do jogador"):(b(e.data[0].id),d(e.data[0]))})).catch((function(e){window.alert(e)}))},b=function(e){fetch("".concat(n).concat(e)).then((function(e){return e.json()})).then((function(e){void 0===e.data[0]?alert("Este jogador n\xe3o atuou nesta temporada"):(u(e.data[0]),O([{name:"Pontos","M\xe9dia":e.data[0].pts,index:1,disabled:!1},{name:"Rebotes","M\xe9dia":e.data[0].reb,index:2,disabled:!1},{name:"Assist\xeancias","M\xe9dia":e.data[0].ast,index:3,disabled:!1},{name:"Bloqueios","M\xe9dia":e.data[0].blk,index:4,disabled:!1},{name:"Roubadas","M\xe9dia":e.data[0].stl,index:5,disabled:!1}]))})).catch((function(e){window.alert(e)}))};return Object(i.jsxs)("div",{className:"players-teams-container",children:[Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{className:"input-container",children:[Object(i.jsx)("input",{type:"text",placeholder:"Digite o nome do jogador",onChange:function(e){return l(e.target.value)},value:c,onKeyUp:function(e){"Enter"===e.key&&p()}}),Object(i.jsx)("a",{href:"https://www.nba.com/players",target:"_blank",rel:"noopener noreferrer",children:Object(i.jsx)("i",{class:"fas fa-question"})})]}),Object(i.jsx)("button",{className:"button-pesquisar",onClick:p,children:"Pesquisar"})]}),Object(i.jsxs)("div",{className:"stats-container",children:[Object(i.jsxs)("p",{children:[Object(i.jsx)("span",{className:"stats-titles",children:"Nome:"}),null===r?"":" ".concat(r.first_name," ").concat(r.last_name)]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("span",{className:"stats-titles",children:"Time:"}),null===r?"":" ".concat(r.team.full_name)]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("span",{className:"stats-titles",children:"Posi\xe7\xe3o:"}),null===r?"":" ".concat(r.position)]}),Object(i.jsxs)("strong",{children:[Object(i.jsx)("span",{role:"img","aria-label":"chart",children:"\ud83d\udcc8"})," M\xe9dias por partida:"]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("span",{className:"stats-titles",children:"Pontos:"}),null===j?"":" ".concat(j.pts)]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("span",{className:"stats-titles",children:"Rebotes:"}),null===j?"":" ".concat(j.reb)]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("span",{className:"stats-titles",children:"Assist\xeancias:"}),null===j?"":" ".concat(j.ast)]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("span",{className:"stats-titles",children:"Bloqueios:"}),null===j?"":" ".concat(j.blk)]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("span",{className:"stats-titles",children:"Roubadas:"}),null===j?"":" ".concat(j.stl)]})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{className:"button-voltar",onClick:function(){a(!0),s(!1),u(null),d(null),l(null)},children:"Voltar"})})]})},E=s(88);var I=function(){var e=A(),a=e.setIsSelector,s=e.setIsTeams,t=m(),n=t.inputData,o=t.setInputData,c=t.teamData,l=t.setTeamData,r=t.setTeamChartData,d=t.setTeamLogo,j=function(){var e=E.find((function(e){return e.name1===n.toUpperCase()}));l(e),void 0===e&&(e=E.find((function(e){return e.name2===n.toUpperCase()})),l(e),void 0===e&&(e=E.find((function(e){return e.name3===n.toUpperCase()})),l(e),void 0===e&&alert('Time n\xe3o encontrado. Utilize o "?" caso esteja tendo dificuldades com o nome de algum time'))),null!==e&&void 0!==e&&(r([{name:"Vit\xf3rias",value:e.wins},{name:"Derrotas",value:e.losses}]),d(e.name2))};return Object(i.jsxs)("div",{className:"players-teams-container",children:[Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{className:"input-container",children:[Object(i.jsx)("input",{placeholder:"Digite o nome do time",onChange:function(e){return o(e.target.value)},value:n,onKeyUp:function(e){"Enter"===e.key&&j()}}),Object(i.jsx)("a",{href:"https://www.nba.com/teams",target:"_blank",rel:"noopener noreferrer",children:Object(i.jsx)("i",{class:"fas fa-question"})})]}),Object(i.jsx)("button",{className:"button-pesquisar",onClick:j,children:"Pesquisar"})]}),Object(i.jsxs)("div",{className:"stats-container",children:[Object(i.jsxs)("p",{children:[Object(i.jsx)("span",{className:"stats-titles",children:"Time:"}),null===c||void 0===c?"":" ".concat(c.full_name)]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("span",{className:"stats-titles",children:"Vit\xf3rias:"}),null===c||void 0===c?"":" ".concat(c.wins)]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("span",{className:"stats-titles",children:"Derrotas:"}),null===c||void 0===c?"":" ".concat(c.losses)]}),Object(i.jsxs)("strong",{children:[Object(i.jsx)("span",{role:"img","aria-label":"chart",children:"\ud83d\udcc8"})," M\xe9dias por partida:"]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("span",{className:"stats-titles",children:"Pontos Marcados:"}),null===c||void 0===c?"":" ".concat(c.points_scored)]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("span",{className:"stats-titles",children:"Pontos Concedidos:"}),null===c||void 0===c?"":" ".concat(c.points_conceded)]}),Object(i.jsxs)("p",{children:[Object(i.jsx)("span",{className:"stats-titles",children:"Margem de Vit\xf3ria:"}),null===c||void 0===c?"":" ".concat(c.mov)]})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{className:"button-voltar",onClick:function(){a(!0),s(!1),l(null),r(null),o(null),d(null)},children:"Voltar"})})]})};var L=function(){var e=A(),a=e.isSelector,s=e.setIsSelector,t=e.isPlayers,n=e.setIsPlayers,o=e.isTeams,c=e.setIsTeams;return Object(i.jsxs)(i.Fragment,{children:[a?Object(i.jsxs)("div",{className:"selector-container",children:[Object(i.jsxs)("p",{children:[Object(i.jsx)("span",{role:"img","aria-label":"basketball",children:"\ud83c\udfc0"})," Selecione do que voc\xea deseja consultar as estat\xedsticas:"]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("button",{onClick:function(){s(!1),n(!0)},children:"Jogadores"}),Object(i.jsx)("button",{onClick:function(){s(!1),c(!0)},children:"Times"})]})]}):null,t?Object(i.jsx)(T,{}):null,o?Object(i.jsx)(I,{}):null]})};var C=function(){return Object(i.jsxs)("div",{className:"searchbar-container",children:[Object(i.jsx)("img",{src:"./images/mediar-logo.png",alt:"Logo Mediar"}),Object(i.jsx)(L,{})]})};var D=function(){return Object(i.jsx)(f,{children:Object(i.jsx)(d,{children:Object(i.jsxs)("div",{className:"app-container",children:[Object(i.jsx)(C,{}),Object(i.jsx)(N,{})]})})})};c.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(D,{})}),document.getElementById("root"))},88:function(e){e.exports=JSON.parse('[{"name1":"UTAH","name2":"JAZZ","name3":"UTAH JAZZ","full_name":"Utah Jazz","wins":27,"losses":9,"points_scored":"116.6","points_conceded":"107.8","mov":"8.81"},{"name1":"LOS ANGELES","name2":"LAKERS","name3":"LOS ANGELES LAKERS","full_name":"Los Angeles Lakers","wins":24,"losses":13,"points_scored":"111.4","points_conceded":"106.3","mov":"5.05"},{"name1":"PHOENIX","name2":"SUNS","name3":"PHOENIX SUNS","full_name":"Phoenix Suns","wins":24,"losses":11,"points_scored":"113.6","points_conceded":"107.1","mov":"6.49"},{"name1":"MILWAUKEE","name2":"BUCKS","name3":"MILWAUKEE BUCKS","full_name":"Milwaukee Bucks","wins":22,"losses":14,"points_scored":"118.8","points_conceded":"112.5","mov":"6.28"},{"name1":"DENVER","name2":"NUGGETS","name3":"DENVER NUGGETS","full_name":"Denver Nuggets","wins":21,"losses":15,"points_scored":"115.9","points_conceded":"110.6","mov":"5.31"},{"name1":"LOS ANGELES","name2":"CLIPPERS","name3":"LOS ANGELES CLIPPERS","full_name":"Los Angeles Clippers","wins":24,"losses":14,"points_scored":"114.8","points_conceded":"109.4","mov":"5.39"},{"name1":"BROOKLYN","name2":"NETS","name3":"BROOKLYN NETS","full_name":"Brooklyn Nets","wins":24,"losses":13,"points_scored":"121.1","points_conceded":"116.1","mov":"5.00"},{"name1":"PHILADELPHIA","name2":"76ERS","name3":"PHILADELPHIA 76ERS","full_name":"Philadelphia 76ers","wins":24,"losses":12,"points_scored":"114.7","points_conceded":"111.2","mov":"3.50"},{"name1":"BOSTON","name2":"CELTICS","name3":"BOSTON CELTICS","full_name":"Boston Celtics","wins":19,"losses":17,"points_scored":"111.7","points_conceded":"110.8","mov":"0.89"},{"name1":"TORONTO","name2":"RAPTORS","name3":"TORONTO RAPTORS","full_name":"Toronto Raptors","wins":17,"losses":19,"points_scored":"113.0","points_conceded":"111.6","mov":"1.42"},{"name1":"MEMPHIS","name2":"GRIZZLIES","name3":"MEMPHIS GRIZZLIES","full_name":"Memphis Grizzlies","wins":16,"losses":16,"points_scored":"111.6","points_conceded":"110.8","mov":"0.81"},{"name1":"GOLDEN STATE","name2":"WARRIORS","name3":"GOLDEN STATE WARRIORS","full_name":"Golden State Warriors","wins":19,"losses":18,"points_scored":"113.4","points_conceded":"112.9","mov":"0.49"},{"name1":"ATLANTA","name2":"HAWKS","name3":"ATLANTA HAWKS","full_name":"Atlanta Hawks","wins":16,"losses":20,"points_scored":"112.6","points_conceded":"112.2","mov":"0.42"},{"name1":"DALLAS","name2":"MAVERICKS","name3":"DALLAS MAVERICKS","full_name":"Dallas Mavericks","wins":18,"losses":16,"points_scored":"111.8","points_conceded":"112.3","mov":"-0.53"},{"name1":"INDIANA","name2":"PACERS","name3":"INDIANA PACERS","full_name":"Indiana Pacers","wins":16,"losses":19,"points_scored":"112.8","points_conceded":"112.5","mov":"0.23"},{"name1":"NEW ORLEANS","name2":"PELICANS","name3":"NEW ORLEANS PELICANS","full_name":"New Orleans Pelicans","wins":15,"losses":21,"points_scored":"115.5","points_conceded":"115.9","mov":"-0.42"},{"name1":"NEW YORK","name2":"KNICKS","name3":"NEW YORK KNICKS","full_name":"New York Knicks","wins":19,"losses":18,"points_scored":"104.9","points_conceded":"104.4","mov":"0.46"},{"name1":"SAN ANTONIO","name2":"SPURS","name3":"SAN ANTONIO SPURS","full_name":"San Antonio Spurs","wins":18,"losses":14,"points_scored":"111.0","points_conceded":"110.9","mov":"0.03"},{"name1":"CHARLOTTE","name2":"HORNETS","name3":"CHARLOTTE HORNETS","full_name":"Charlotte Hornets","wins":17,"losses":18,"points_scored":"112.7","points_conceded":"113.2","mov":"-0.46"},{"name1":"CHICAGO","name2":"BULLS","name3":"CHICAGO BULLS","full_name":"Chicago Bulls","wins":16,"losses":18,"points_scored":"115.0","points_conceded":"115.2","mov":"-0.21"},{"name1":"PORTLAND","name2":"TRAIL BLAZERS","name3":"PORTLAND TRAIL BLAZERS","full_name":"Portland Trail Blazers","wins":21,"losses":14,"points_scored":"114.5","points_conceded":"114.9","mov":"-0.43"},{"name1":"MIAMI","name2":"HEAT","name3":"MIAMI HEAT","full_name":"Miami Heat","wins":18,"losses":18,"points_scored":"106.8","points_conceded":"108.4","mov":"-1.58"},{"name1":"DETROIT","name2":"PISTONS","name3":"DETROIT PISTONS","full_name":"Detroit Pistons","wins":10,"losses":26,"points_scored":"108.0","points_conceded":"111.9","mov":"-3.92"},{"name1":"WASHINGTON","name2":"WIZARDS","name3":"WASHINGTON WIZARDS","full_name":"Washington Wizards","wins":14,"losses":20,"points_scored":"114.8","points_conceded":"119.1","mov":"-4.38"},{"name1":"SACRAMENTO","name2":"KINGS","name3":"SACRAMENTO KINGS","full_name":"Sacramento Kings","wins":14,"losses":22,"points_scored":"114.7","points_conceded":"120.4","mov":"-5.64"},{"name1":"OKLAHOMA CITY","name2":"THUNDER","name3":"OKLAHOMA CITY THUNDER","full_name":"Oklahoma City Thunder","wins":15,"losses":21,"points_scored":"105.9","points_conceded":"111.4","mov":"-5.53"},{"name1":"HOUSTON","name2":"ROCKETS","name3":"HOUSTON ROCKETS","full_name":"Houston Rockets","wins":11,"losses":23,"points_scored":"107.6","points_conceded":"112.8","mov":"-5.26"},{"name1":"CLEVELAND","name2":"CAVALIERS","name3":"CLEVELAND CAVALIERS","full_name":"Cleveland Cavaliers","wins":14,"losses":22,"points_scored":"104.6","points_conceded":"112.1","mov":"-7.47"},{"name1":"ORLANDO","name2":"MAGIC","name3":"ORLANDO MAGIC","full_name":"Orlando Magic","wins":13,"losses":23,"points_scored":"105.6","points_conceded":"112.2","mov":"-6.58"},{"name1":"MINNESOTA","name2":"TIMBERWOLVES","name3":"MINNESOTA TIMBERWOLVES","full_name":"Minnesota Timberwolves","wins":7,"losses":29,"points_scored":"107.9","points_conceded":"117.0","mov":"-9.08"}]')}},[[323,1,2]]]);
//# sourceMappingURL=main.9ab809a2.chunk.js.map