// Create an empty lunches array
let lunches = [];

// Add lunch to the end
function addLunchToEnd(arr, lunch) {
  arr.push(lunch);
  console.log(`${lunch} added to the end of the lunch menu.`);
  return arr;
}

// Add lunch to the start
function addLunchToStart(arr, lunch) {
  arr.unshift(lunch);
  console.log(`${lunch} added to the start of the lunch menu.`);
  return arr;
}

// Remove last lunch
function removeLastLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches to remove.");
    return arr;
  }

  const removed = arr.pop();
  console.log(`${removed} removed from the end of the lunch menu.`);
  return arr;
}

// Remove first lunch
function removeFirstLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches to remove.");
    return arr;
  }

  const removed = arr.shift();
  console.log(`${removed} removed from the start of the lunch menu.`);
  return arr;
}

// Get a random lunch
function getRandomLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches available.");
    return;
  }

  const randomIndex = Math.floor(Math.random() * arr.length);
  console.log(`Randomly selected lunch: ${arr[randomIndex]}`);
}

// Show the lunch menu
function showLunchMenu(arr) {
  if (arr.length === 0) {
    console.log("The menu is empty.");
  } else {
    console.log(`Menu items: ${arr.join(", ")}`);
  }
}