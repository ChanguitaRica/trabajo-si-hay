const contenedor = document.getElementById("lista-vacantes");
const guardadas = JSON.parse(sessionStorage.getItem("vacantesNuevas")) || [];	
for (const publicada of guardadas) {
    vacantes.push(publicada);
    }
for (const vacante of vacantes){
    contenedor.innerHTML += ` <article class="tarjeta"> 
    <h3>${vacante.puesto}</h3>	
    <p>${vacante.negocio} - ${vacante.barrio}</p>	
    <p>${vacante.jornada}</p>	
    <p>Pago: ${vacante.pago} por día</p>	
    </article> `;
    }
