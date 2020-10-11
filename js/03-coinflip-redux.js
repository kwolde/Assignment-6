var coinFlip;
for (var i = 0; i < 10; i++) {
    coinFlip = Math.random();
    coinFlip = Math.round(coinFlip);
    if (coinFlip == 1) {
        window.console.log("Tails");
    } else {
        window.console.log("Heads");
    }
}