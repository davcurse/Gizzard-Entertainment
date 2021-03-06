function getid(str) {
    return document.getElementById(str);
}
let checkers_score = getid("checkers_score");
let minesweeper_score = getid("minesweeper_score");
let sudoku_score = getid("sudoku_score");
let ttt_score = getid("ttt_score");
let politeness_score = getid("politeness_score");
let snake_score = getid("snake_score")
const reset = document.getElementById('reset')

if (localStorage.getItem("checkers_score")==null) {
    checkers_score.innerHTML = 0;
} else checkers_score.innerHTML = localStorage.getItem("checkers_score");

if (localStorage.getItem("minesweeper_score")==null){
    minesweeper_score.innerHTML = 0;
} else minesweeper_score.innerHTML = localStorage.getItem("minesweeper_score");

if (localStorage.getItem("sudoku_score")==null){
    sudoku_score.innerHTML = 0;
} else sudoku_score.innerHTML = localStorage.getItem("sudoku_score");

if (localStorage.getItem("ttt_score")==null){
    ttt_score.innerHTML = 0;
} else ttt_score.innerHTML = localStorage.getItem("ttt_score");

if (localStorage.getItem("snake_score")==null){
    snake_score.innerHTML = 0;
} else snake_score.innerHTML = localStorage.getItem("snake_score");

reset.addEventListener('click', resetScores)

function resetScores(){
    if( ! confirm("Do you really want to do this?") ){
        e.preventDefault(); // ! => don't want to do this
    } else {
    localStorage.clear();
    checkers_score.innerHTML = 0;
    minesweeper_score.innerHTML = 0;
    sudoku_score.innerHTML = 0;
    ttt_score.innerHTML = 0;
    snake_score.innerHTML = 0;
    }
}