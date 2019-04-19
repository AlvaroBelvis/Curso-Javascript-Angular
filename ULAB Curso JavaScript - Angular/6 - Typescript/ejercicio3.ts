// 1 - declaracion del tipo
type Ranking = [number, string, boolean];

// 2 - definición de variables
let position: number;
let playerName: string;
let finishedGame: boolean;
let ranking: Ranking;
let hallOfFame: Array<Ranking> = [];

// 3 - crea un ranking
position = 1;
playerName = "Bruno Krebs";
finishedGame = true;
ranking = [position, playerName, finishedGame];
hallOfFame.push(ranking);

// 4 - crea otro ranking
position = 2;
playerName = "Maria Helena";
finishedGame = true;
ranking = [position, playerName, finishedGame];
hallOfFame.push(ranking);

// 5 - define una funcion que recorre todos los rankings
function printRankings(rankings: Array<Ranking>): void {
  for (let ranking of rankings) {
    console.log(ranking);
  }
}

// 6 - llama a la función
printRankings(hallOfFame);