for (var i = 1; i < 101; i++) {
    if (((i % 3) == 0) && ((i % 5) == 0)) {
        window.console.log("Marco! Polo");
        continue;
    }
    if ((i % 3) == 0) {
        window.console.log("Marco!");
    }
    if ((i % 5) == 0) {
        window.console.log("Polo!");
    }
}