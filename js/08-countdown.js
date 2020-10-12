var countdown = window.prompt("Enter a number to countdown from");
countdown = parseInt(countdown);

for (countdown; countdown >= 0; countdown--) {
    window.console.log(countdown);
}