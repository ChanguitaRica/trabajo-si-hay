const contenedor = document.getElementById("lista-vacantes");
for (const vacante of vacantes){
    contenedor.innerHTML += `<h3>${vacante.puesto}</h3>`;
}