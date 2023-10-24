const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guess = parseInt(document.getElementById("guess").value);
    attempts++;

    if (guess === secretNumber) {
        document.getElementById("message").innerHTML = `Parabéns! Você acertou o número ${secretNumber} em ${attempts} tentativas.`;
        document.getElementById("message").style.color = "green";
        document.getElementById("guess").setAttribute("disabled", "true");
    } else if (guess < secretNumber) {
        document.getElementById("message").innerHTML = "Tente um palpite maior.";
        document.getElementById("message").style.color = "blue";
    } else {
        document.getElementById("message").innerHTML = "Tente um palpite menor.";
        document.getElementById("message").style.color = "red";
    }
}
