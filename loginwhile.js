let loggedin=false;
let username = "";
let password = "";

while (!loggedin) {
    if (username ==="Afnan" && password === "1234") {
        loggedin = true;
        console.log(`Hello ${username}, welcome to the MathBot!`);
    }
    else {
        username = window.prompt("Please enter your name:");
        password = window.prompt("Please enter your password:");
    }
}