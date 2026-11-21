const contenedor = document.getElementById("lista-vacantes");
for (const vacante of vacantes){
    contenedor.innerHTML += ` <article class="tarjeta">
    <h3>${vacante.puesto}</h3>	
    <p>${vacante.negocio} - ${vacante.barrio}</p>	
    <p>${vacante.jornada}</p>	
    <p>Pago: ${vacante.pago} por día</p>	
    </article> `;
    }