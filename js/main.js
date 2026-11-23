const contenedor = document.getElementById("lista-vacantes");
const guardadas = JSON.parse(sessionStorage.getItem("vacantesNuevas")) || [];	
for (const publicada of guardadas) {
    vacantes.push(publicada);
    }
    function mostrarVacantes(filtro){
        contenedor.innerHTML= "";
        for (const vacante of vacantes){
            if(filtro === "Todas" || vacante.tipo ===filtro){
            contenedor.innerHTML += ` <article class="tarjeta"> 
            <h3>${vacante.puesto}</h3>	
            <p>${vacante.negocio} - ${vacante.barrio}</p>	
            <p>${vacante.jornada}</p>	
            <p>Pago: ${vacante.pago} por día</p>	
            </article> `;
              }
        
    }
    }
    mostrarVacantes("Todas");
const selector = document.getElementById("filtro-tipo");
selector.addEventListener("change", function () {
    mostrarVacantes(selector.value);
});