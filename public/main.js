const randomNumber = Math.floor(Math.random() * (100) + 1)

let counter = 0

const guessNumber = (input) => {
  let inputValue = input.value
  console.log(randomNumber);
  if (isNaN(inputValue) || inputValue < 1 || inputValue > 100) alert('Must be a number between 1 and 100')
  if (inputValue == randomNumber) alert('You Win!')
  if (inputValue > randomNumber && inputValue <= 100) {
    alert('Guess Lower')
    counter++
  }
  if (inputValue < randomNumber && inputValue >= 0) {
    alert('Guess Higher')
    counter++
  }
  document.getElementById("guesses").innerHTML = "Guesses so far: " + counter
}
  //user can terminate by typing exit

//Scrab-Bag
//scrabble game: has "bag" of 100 tiles
//has set number of frequency of each letter
//inputs will all be uppercase
//
