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
    sessionStorage.setItem("nuevaVacante", JSON.stringify(nuevaVacante));
    });


    

