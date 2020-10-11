var first = window.prompt("Enter a number");
var second = window.prompt("Enter a second number");

if (first > second) {
    document.write(first + " is larger");
} else if (second > first) {
    document.write(second + " is larger");
} else {
    document.write("The numbers entered are equal");
}