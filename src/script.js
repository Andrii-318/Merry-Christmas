//Таблиця
function generateTable() {
  const table = document.createElement("table");
  table.style.color = "white";
  let number = 1;

  for (let row = 0; row < 10; row++) {
    const tableRow = table.insertRow();
    let consoleRow = "";

    for (let cell = 0; cell < 10; cell++) {
      const tableCell = tableRow.insertCell();
      tableCell.textContent = number;
      consoleRow += number.toString().padStart(4, " ");
      number++;
    }

    console.log(consoleRow);
  }
  document.body.appendChild(table);
}

generateTable();

//Сніг
function makeSnow() {
  const snow = document.createElement("div");
  const size = Math.random() * 4.5 + 3.5;
  snow.className = "snow";
  snow.style.width = `${size}px`;
  snow.style.height = `${size}px`;
  snow.style.left = `${Math.random() * window.innerWidth}px`;
  snow.style.position = "fixed";
  snow.style.opacity = (size / 8).toString();
  if (size < 7) {
    snow.style.zIndex = -5;
  }
  snow.style.animationDuration = `${Math.random() * 3 + 2}s`;
  document.body.appendChild(snow);
  setTimeout(() => {
    snow.remove();
  }, 5000);
}

setInterval(makeSnow, 40);
