let username = "";


do {
    username = window.prompt("Please enter your name:");
}
while (username == "" || username == null) {
   
}

console.log(`Hello ${username}, welcome to the MathBot!`);