# TIC-TAC-TOE



### 🔗 Links
#### 💡 _Project:_
👉 <a href="https://tic-tac-toe-react-ochre.vercel.app" target="_blank">https://tic-tac-toe-react-ochre.vercel.app</a>

<br>

#### 🌎 _Languages:_ 
-  Também disponível em pt-BR 👉 <a href="PLACEHOLDER" target="_blank">Aqui</a>

<br>

### 💻 What is this project about?
This is a coding challenge, the main goal is build an tic-tac-toe application following those tasks
- build a 3x3 board
- when a square gets clicked, mark down an X or O
- track the play os two players
- create an alert when the game end with a winner (or tie)
- make a line on the winning sequence
### 🧰 Tech Stack
- React
- Sass

### 🧠 What i've learned
- Building the state of winning/tie condition:<br>
As the game has few winning combinations, 9 exactly, i've put them on objects array wich contains the winning combination indexes and the direction/orientation of the line.<br>
I've made some validations to check if the winning condition is happening when a player makes a move and stop the application right there.

- Make the line on the winning sequence:<br>
This was a tricky one in the beginning.<br>
I've added dinamic classes to the board rendering, using the `orientation` prop from winning combination objects, then i knew how to draw a line on that direction

#### 🙏 Special Thanks
 - Special thanks to Fernandev, theres a video tutorial of this challenge down bellow.<br>
https://youtu.be/PVCrq8rBXE4<br><br><br>

**Theres two things that is important to mention**, if you follow the video, you'll find 2 bugs, **here's my solution**:<br><br>
1 - The first one is that when the game ends, you are getting an alert before the player move actually happens and the 'victory line' be draw<br>
 - I've use `setTimeout` to delay a little bit the `alarm()`, this solves the problem<br><br><br>


2 - The another one is that when the game ends with a winner on the LAST TURN/MOVE, the `winner` state still 'null' and the game ties.<br>
 - I've implemented another validation on `checkGameEnded()` function, to determine if the value of the `winner` isn't null, so we could have a winner, this solve the problem aswell