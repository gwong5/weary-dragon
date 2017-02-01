const randomNumber = Math.floor(Math.random() * (100) + 1)

let counter = 0

const guessNumber = (input) => {
    let inputValue = input.value
    console.log(randomNumber);
    if (inputValue < 1 || inputValue > 100) {
        alert('Must be a number between 1 and 100')
    } else if (inputValue == randomNumber) {
        alert('You Win!')
    } else if (inputValue > randomNumber) {
        alert('Guess Lower')
        counter++
    } else if (inputValue < randomNumber) {
        alert('Guess Higher')
        counter++
    }
    document.getElementById("guesses").innerHTML = "Guesses so far: " + counter
}

let sentence = undefined

fn = (input) => {
  return sentence = input.value
}

const findIndex = () => {
  let splits = sentence.split(/\s*\b\s*/)
  let indexElement = document.getElementById("indexNumber").value - 1
  let theWord = splits[indexElement]
  document.getElementById("theWord").innerHTML = theWord + " is The Word"
}
