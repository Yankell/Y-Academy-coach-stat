const app = document.getElementById("app");

let data = {
  left: {
    name: "Ylouan",
    fautesDirectes: 0,
    fautesProvoquees: 0,
    coupsGagnants: 0,
    score: 0
  },
  right: {
    name: "Yale",
    fautesDirectes: 0,
    fautesProvoquees: 0,
    coupsGagnants: 0,
    score: 0
  }
};

function render() {

  app.innerHTML = `
  <div class="card">

    <table>

      <tr>
        <th></th>
        <th id="leftName">${data.left.name}</th>
<th id="rightName">${data.right.name}</th>
      </tr>

      <tr>
        <td><b>Fautes directes</b></td>
        <td><button id="fdL">${data.left.fautesDirectes}</button></td>
        <td><button id="fdR">${data.right.fautesDirectes}</button></td>
      </tr>

      <tr>
        <td><b>Fautes provoquées</b></td>
        <td><button id="fpL">${data.left.fautesProvoquees}</button></td>
        <td><button id="fpR">${data.right.fautesProvoquees}</button></td>
      </tr>

      <tr>
        <td><b>Coups gagnants</b></td>
        <td><button id="cgL">${data.left.coupsGagnants}</button></td>
        <td><button id="cgR">${data.right.coupsGagnants}</button></td>
      </tr>

      <tr>
        <td><b>Score</b></td>
        <td><h2>${data.left.score}</h2></td>
        <td><h2>${data.right.score}</h2></td>
      </tr>

    </table>

    <br>

    <button id="swap">↔ Inverser</button>

    <button id="reset">Nouveau match</button>

  </div>
  `;

  document.getElementById("fdL").onclick = () => {
    data.left.fautesDirectes++;
    data.right.score++;
    render();
  };

  document.getElementById("fdR").onclick = () => {
    data.right.fautesDirectes++;
    data.left.score++;
    render();
  };

  document.getElementById("fpL").onclick = () => {
    data.left.fautesProvoquees++;
    data.left.score++;
    render();
  };

  document.getElementById("fpR").onclick = () => {
    data.right.fautesProvoquees++;
    data.left.score++;
    render();
  };

  document.getElementById("cgL").onclick = () => {
    data.left.coupsGagnants++;
    data.left.score++;
    render();
  };

  document.getElementById("cgR").onclick = () => {
    data.right.coupsGagnants++;
    data.right.score++;
    render();
  };

  document.getElementById("swap").onclick = () => {
    const tmp = data.left;
    data.left = data.right;
    data.right = tmp;
    render();
  };

  document.getElementById("reset").onclick = () => {
    data = {
      left: {
        name: "Ylouan",
        fautesDirectes: 0,
        fautesProvoquees: 0,
        coupsGagnants: 0,
        score: 0
      },
      right: {
        name: "Yale",
        fautesDirectes: 0,
        fautesProvoquees: 0,
        coupsGagnants: 0,
        score: 0
      }
    };

    render();
  };
  document.getElementById("leftName").onclick = swapPlayers;
document.getElementById("rightName").onclick = swapPlayers;
}
function swapPlayers(){

    let tmp = data.left;
    data.left = data.right;
    data.right = tmp;

    render();
}

render();

document.getElementById("leftName").onclick = swapPlayers;
document.getElementById("rightName").onclick = swapPlayers;