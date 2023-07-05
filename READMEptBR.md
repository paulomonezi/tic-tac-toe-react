# TIC-TAC-TOE



### 🔗 Links
#### 💡 _Projeto:_
👉 <a href="https://tic-tac-toe-react-ochre.vercel.app" target="_blank">https://tic-tac-toe-react-ochre.vercel.app</a>

<br>

#### 🌎 _Idiomas:_ 
-  Also avaliable in English 👉 <a href="PLACEHOLDER" target="_blank">Here</a>

<br>

### 💻 Sobre o projeto
Esse projeto é um coding challenge, o objetivo principal é criar uma aplicação de jogo da velha seguindo as tarefas abaixo
- criar um tabuleiro de 3x3
- quando uma casa for clicada, marcar com X ou O
- suporte à dois jogadores
- criar um alerta quando o jogo terminar, seja com algum dos jogadores vencendo ou com um empate
- traçar uma linha na sequência ganhadora
### 🧰 Tech Stack
- React
- Sass

### 🧠 O que eu aprendi
- Criar um estado de condições de vitória/empate:<br>
Como o jogo da velha é um jogo com poucas combinações de vitória (9 para ser mais exato), foi fácil colocar todas num array de objetos, contendo cada sequência de index vencedor e também a orientação desses indexes<br>
Eu fiz algumas validações, quando um jogador faz algum movimento, para checar se a condição de vitória acontece, e aí, parar a aplicação

- Fazer a linha na sequência ganhadora:<br>
Essa foi um pouco mais complicada no início.<br>
Eu adicionei classes dinamicamente no render do board, usando a prop `orientation` dos objetos contendo as combinações de vitórias, então, eu soube como traçar a linha naquela direção

#### 🙏 Agradecimentos Especiais
 - Agradecimento ao Fernandev, o vídeo do desafio está logo abaixo<br>
https://youtu.be/PVCrq8rBXE4<br><br><br>

**Tem duas coisas importantes para que você saiba**, se seguir o vídeo, você encontrará dois bugs, **aqui está a minha solução**:<br><br>
1 - O primeiro bug acontecia quando o jogo terminava, o alerta aparecia na tela sempre antes do movimento do jogador acontecer e a 'linha da vitória' ser traçada<br>
 - Eu usei o `setTimeout` para atrasar o `alert()` em alguns ms, e isso resolveu o problema<br><br><br>

2 - O segundo bug, era quando o jogo terminava com um vencedor na última rodada, o estado da variável `winner` continuava como 'null' e o jogo caía no empate<br>
 - Eu implementei outra validação na função `checkGameEnded()`, para determinar se o valor do `winner` não era mais 'null', para que houvesse um vencedor, e isso resolveu o problema também