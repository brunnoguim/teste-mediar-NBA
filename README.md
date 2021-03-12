
![](https://mediarsolutions.com/wp-content/uploads/2021/02/teste_tecnico_front.png)

## Teste Mediar - NBA 🏀
Este projeto, feito para o teste técnico da Mediar Solutions, consiste em uma aplicação para consultar estatísticas da temporada 2020/2021 da NBA, englobando tanto as estatísticas individuais dos jogadores quanto os dados de todas as equipes do campeonato.

A aplicação apresenta as informações não apenas em números, como também em gráficos próprios para cada categoria (jogadores/equipes), os quais são apresentados de acordo com a busca realizada pelo usuário quanto ao nome dos jogadores/equipes.

## Utilizando a Aplicação 🚀
Quer dar uma conferida na aplicação sem ter que fazer o pull para rodar ela localmente? 

O deploy está disponível em uma github page: ([Deploy Mediar-NBA](https://brunnoguim.github.io/teste-mediar-NBA/))

A interface do projeto foi preparada visando a simplificação do acesso aos dados, sendo que caso você (##infelizmente) não acompanhe a NBA e não conheça seus times e jogadores, não pense duas vezes para apertar o botão de "help" que deixei para te dar idéias do que pesquisar! 

## Pontos de Atenção ❗
- A requisição das estatísticas dos jogadores é feita via a API [Ball Dont Lie](https://www.balldontlie.io/#introduction)
- Apesar de disponibilizar informações básicas das equipes, como nome, abreviação, cidade e mais alguns dados globais, infelizmente a API que utilizei não fornece as estatísticas das equipes. Sendo assim, todos os dados referentes às equipes são estáticos e datados de 10/03/2021, já que os extraí de uma base de dados convertida de XLSX para JSON 😔
