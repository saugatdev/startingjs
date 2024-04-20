const hint = document.getElementById("hint");
const enterl = document.getElementById("enter");
const score = document.getElementById("score");
let guessedLetters = [];
let randomname = "";
let currentScore = 10;
let filledInputs=0;

window.onload = function () {
    fetch('hint.json')
        .then(response => response.json())
        .then(data => {
            const randomIndex = Math.floor(Math.random() * data.length);
            const randomHint = data[randomIndex].hint;
            randomname = data[randomIndex].name;
            hint.innerHTML = randomHint;

            for (let i = 0; i < randomname.length; i++) {
                const input = document.createElement('input');
                input.type = 'text';
                input.disabled = true; 
                document.getElementById('enter').appendChild(input);
            }
        })
}

document.addEventListener('keydown', function (event) {
    const keyPressed = event.key.toLowerCase(); 

    if (/[a-zA-Z]/.test(keyPressed) && !guessedLetters.includes(keyPressed)) {
        guessedLetters.push(keyPressed);
        let letterFound = false;

        for (let i = 0; i < randomname.length; i++) {
            if (randomname[i].toLowerCase() === keyPressed) {
                enterl.children[i].value = keyPressed;
                letterFound = true;
                filledInputs++;
            }
        }

        if (!letterFound) {
            score.innerHTML = --currentScore; 
        }

        if(currentScore===randomname.length-3){
            alert("Man Hanged Bro");
            location.reload();
        }
    
        if(filledInputs===randomname.length){
            alert("You won");
            location.reload();
        }
    }
});
