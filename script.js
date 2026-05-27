const curiosidades = [
  "A Araucária pode atingir mais de 40 metros de altura.",

  "O pinhão é a semente da Araucária e serve de alimento para diversos animais.",

  "O Paraná já teve grande parte do território coberto por Floresta de Araucária.",

  "O Ipê-Amarelo é considerado uma das árvores mais bonitas do Brasil.",

  "A Imbuia está ameaçada devido ao desmatamento."
];

function mostrarCuriosidade() {

  const indice = Math.floor(Math.random() * curiosidades.length);

  document.getElementById("resultado").innerHTML =
    curiosidades[indice];
}
