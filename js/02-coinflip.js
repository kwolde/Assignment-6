var coinFlip = Math.random;
var valid = false;
var choice;
do {
    choice = window.prompt("Heads(H) or Tails(T)").toUpperCase();
    if ((choice != "H") && (choice != "T")) {
        window.alert("Invalid choice: " + choice);
    } else {
        valid = true;
    }
} while (valid == false);

var result = "";
coinFlip = Math.round(coinFlip);
if (coinFlip == 1) {
    result += "The flip was tails";
    if (choice == "H") {
        result += " and you chose heads... you lose!";
    } else {
        result += " and you chose tails... you win!";
    }
} else {
    result += "The flip was heads";
    if (choice == "H") {
        result += " and you chose heads... you win!";
    } else {
        result += " and you chose tails... you lose!";
    }
}

window.alert(result);