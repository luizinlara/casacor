# 📚 Curso Senac - Casacor

*Repositório destinado a curso de desenvolvimento back-end realizado no Senac Quantum*




### Apresentações realizas em sala de aula:
* [Ferramentas da WEB](https://github.com/luizinlara/casacor/blob/main/APRESENTA%C3%87%C3%95ES/Versionamento-git.pdf)
* [Ferramentas de IDE](https://github.com/luizinlara/casacor/blob/main/APRESENTA%C3%87%C3%95ES/Ferramentas-IDE.pdf)
* [Versionamento GIT](https://github.com/luizinlara/casacor/blob/main/APRESENTA%C3%87%C3%95ES/Ferramentas-da-web.pdf)


### Projeto desenvolvido
* [Frontend](https://github.com/luizinlara/casacor/tree/main/app)
* [Backend](https://github.com/luizinlara/casacor/tree/main/app/backend)

### Requisitos

- Docker

### Implatação
1° - Acesse o diretório `app` em seguida abra o terminal e digite `docker compose up -d`

2° Importar o banco de dados contido no diretório `app/backend`

`docker exec -i database mysql -u casacor -p casacor -D casacor < banco_de_dados.sql`


### Sobre

A equipe tinha como meta desenvolver um aplicativo web alinhado com os temas de 2023: a casa como lugar de subjetividade, maternal, permanência e conhecimento, considerando também tendências de comportamento que afetam o estilo de vida contemporâneo.

O design do projeto foi pensado para ser um local de moradia, com espaços limpos e harmoniosos.

Os alunos foram desafiados a conceber e construir o projeto do zero, resultando na criação do 'Agro & Future Home Office'.

Este projeto inclui uma API que, através de um código QR, coleta informações para um banco de dados e as exibe num carrossel, servindo como uma vitrine para arquitetos mostrarem seus trabalhos. As tecnologias usadas incluem HTML, CSS, PHP, JavaScript, Node.js, e um banco de dados SQL.

O site beneficia os arquitetos ao dar visibilidade aos seus trabalhos e promover uma experiência envolvente no espaço.

Confira a matéria: [Link da matéria](https://plenariomt.com/alunos-do-senac-mt-apresentam-projetos-na-casacor-2023/?fbclid=PAAaabTmAIVyjo59_oqHhuCZ7W7PSQkAI08KX4gXPgoMyfHIZv2wMJyXmHMdM_aem_Afocu4TIppXsu0aIwF_POzoq6TYFaA5Bft5fcTX_-80zSmL4_mLPefct9wFx1_evFnk)