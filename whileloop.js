let username = "";

while (username == "" || username == null) {
    username = prompt("Please enter your name:");
}

console.log(`Hello ${username}, welcome to the MathBot!`);