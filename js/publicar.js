const formulario = document.getElementById("form-vacante");	
formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();
    const nuevaVacante={ 
    puesto: document.getElementById("puesto").value,
    negocio: document.getElementById("negocio").value,
    barrio: document.getElementById("barrio").value,
    tipo: document.getElementById("tipo").value,
    jornada: document.getElementById("jornada").value,
    pago: Number(document.getElementById("pago").value)
   };
    const guardadas = JSON.parse(sessionStorage.getItem("vacantesNuevas")) || [];
    guardadas.push(nuevaVacante);
    sessionStorage.setItem("vacantesNuevas", JSON.stringify(guardadas));
    window.location.href = "vacantes.html";
});


    

