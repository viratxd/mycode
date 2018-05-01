const names = ["Virat Choudhary", "Nikita jain", "Rohit(owner)", "Somalia Singh", "fatima"];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function choose() {
  const index = getRandomInt(0, names.length - 1);
  const name = names[index];

  const output = document.getElementById("author");
  output.innerText = "Name chosen: " + name;
}

document.addEventListener('DOMContentLoaded', choose);
