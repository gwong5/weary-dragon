const randomNumber = Math.floor(Math.random() * (100) + 1)

let counter = 0

const guessNumber = (input) => {
  let inputValue = input.value
  console.log(randomNumber);
  if (isNaN(inputValue) || inputValue < 1 || inputValue > 100) {
    alert('Must be a number between 1 and 100')
  } else if (inputValue == randomNumber) {
    alert('You Win!')
  } else if (inputValue > randomNumber) {
    alert('Guess Lower')
    counter++
  } else if (inputValue < randomNumber && inputValue >= 0) {
    alert('Guess Higher')
    counter++
  }
  document.getElementById("guesses").innerHTML = "Guesses so far: " + counter
}
  //user can terminate by typing exit

//Scrab-Bag
//scrabble game: has "bag" of 100 tiles

const bag = [{Tile: A, Count: 9, Value: 1},
  {Tile: B, Count: 2, Value: 3},
  {Tile: C, Count: 2, Value: 3},
  {Tile: D, Count: 4, Value: 2},
  {Tile: E, Count: 12, Value: 1},
  {Tile: F, Count: 2, Value: 4},
  {Tile: G, Count: 3, Value: 2},
  {Tile: H, Count: 9, Value: 1},
  {Tile: I, Count: 9, Value: 1},
  {Tile: J, Count: 1, Value: 8},
  {Tile: K, Count: 1, Value: 5},
  {Tile: L, Count: 4, Value: 1},
  {Tile: M, Count: 2, Value: 3},
  {Tile: N, Count: 6, Value: 1},
  {Tile: O, Count: 8, Value: 1},
  {Tile: P, Count: 2, Value: 3},
  {Tile: Q, Count: 1, Value: 10},
  {Tile: R, Count: 6, Value: 1},
  {Tile: S, Count: 4, Value: 1},
  {Tile: T, Count: 6, Value: 1},
  {Tile: U, Count: 4, Value: 1},
  {Tile: V, Count: 2, Value: 4},
  {Tile: W, Count: 2, Value: 4},
  {Tile: X, Count: 1, Value: 8},
  {Tile: Y, Count: 2, Value: 4},
  {Tile: Z, Count: 1, Value: 10},
  {Tile: Blank, Count: 2, Value: 0}
  ]
//has set number of frequency of each letter
//inputs will all be uppercase
//
