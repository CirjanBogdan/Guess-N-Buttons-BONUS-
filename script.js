function generateButtons() {
    let element = document.getElementById("div");
    let btns = document.getElementById("btns"); 
    let input = document.getElementById("userInput").value;
    if (input < 1) {
        document.getElementById("lessOne").innerHTML = "Choose a number bigger than 0!";
    } else {
        document.getElementById("chooseButton").innerHTML = "Choose the winning Button!";  
    }
    const randomNumber = Math.floor(Math.random() * input + 1);
    element.style.display = "none";
    document.getElementById("chooseButton").innerHTML = "Choose the winning Button!";        
    for (let i = 1; i <= input; ++i) {
        const button = document.createElement('button');
        button.className = "button";
        let buttonNum = i;
        button.addEventListener("click", function() {
            if (randomNumber === buttonNum) {
                document.getElementById("winOrLose").innerHTML = "YOU WIN!!!";
            } else {
                document.getElementById("winOrLose").innerHTML = "YOU LOST!";
            }
            btns.style.display = "none";
            const restartButton= document.createElement('button');
            restartButton.innerText= "Restart the game";
            restartButton.className = "button";
            document.body.appendChild(restartButton);
            restartButton.addEventListener("click", function() {
                location.reload();
            });
        });
        button.innerHTML = "Button " + buttonNum;
        btns.appendChild(button);
    }
}
