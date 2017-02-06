const randomNumber = Math.floor(Math.random() * (100) + 1)
let counter = 0

const guessNumber = () => {
  const inputValue = document.getElementById("guessInput").value
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

const findIndex = () => {
  const sentenceAsArray = document.getElementById("sentence").value.split(/\s*\b\s*/)
  const indexElement = document.getElementById("indexNumber").value - 1
  let wordAtIndex
  if (indexElement < 0 || indexElement > sentenceAsArray.length) {
    wordAtIndex = '_'
  } else {
    wordAtIndex = sentenceAsArray[indexElement]
  }
  document.getElementById("theWord").innerHTML = wordAtIndex + " is The Word"
}

const fibonacciDecrypt = () => {
  const userInput = document.getElementById("fibonacciDecrypt").value
  let fibSequence = []

  fibSequence[0] = 0
  fibSequence[1] = 1
  for (index = 2; index <= userInput.length; index++) {
    fibSequence[index] = fibSequence[index - 2] + fibSequence[index - 1]
  }

  let indices = []
  let indexZeroes = userInput.indexOf(0)

  let reverseFib = fibSequence.reverse()
  for (element in reverseFib) {
    while (indexZeroes != -1) {
      indices.push(indexZeroes)
      indexZeroes = userInput.indexOf(0, indexZeroes + 1)
    }
    reverseFib.splice(indices[element], 1)
  }
  decrypted = reverseFib.reduce((a, b) => a + b, 1)
  console.log(decrypted);
}

const disemvowel = () => {
  const removedVowels = document.getElementById("removeVowels").value.toLowerCase().replace(/[0-9aeiou\W  ]/ig, '')
  document.getElementById("disemvoweled").innerHTML = removedVowels
}
