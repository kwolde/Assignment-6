var coinFlip;
var heads = true;
do {
    coinFlip = Math.random();
    coinFlip = Math.round(coinFlip);
    if (coinFlip == 1) {
        window.console.log("Tails");
        heads = false;
    } else {
        window.console.log("Heads");
    }
} while (heads == true);