document.addEventListener("DOMContentLoaded", () => {



    //llena las opciones de años
    llenarSelect ();


    
})

document.getElementById("reset").addEventListener("click", limpiar);
document.getElementById("btnConsultar").addEventListener("click", consultar);



function llenarSelect(){
    const max = new Date().getFullYear();//toma el año  en el que estamos
    const min = max - 10;
    const year = document.querySelector("#year");

    for(let i = max; i >= min; i--){ //queremos que aparezca como filtro inicial el 2020, y luego recorra hacia atrás
        //console.log(i);
        const opcion = document.createElement("option");
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);//agrega las opciones de año al select

    }
}

function limpiar (){
    document.getElementById("marca").value=0;
    document.getElementById("year").value=0;
    document.getElementById("minimo").value=null;
}

function consultar(){
    const resultados = document.getElementById("resultados");

    let tabla = "<table><tr><th>Marca</th><th>Modelo</th><th>Año</th><th>Precio</th><th>Puertas</th><th>Color</th><th>Transmisión</th></tr>";

   //console.log(autos);
    for (let i = 0; i < autos.length; i++){
        tabla = tabla + "" +
         "<tr><td>"+ 
            autos[i].marca +"</td><td>" +
            autos[i].modelo +"</td><td>" +
            autos[i].year +"</td><td>" +
            autos[i].precio +"</td><td>" +
            autos[i].puertas +"</td><td>" +
            autos[i].color +"</td><td>" +
            autos[i].transmision +"</td><td>";

    }    
    
    tabla = tabla + "</table>"
    resultados.innerHTML = tabla;
}