let casaAsig = new Array ();

let asignarCasa = (e) =>{
    var casa = document.getElementById("casa").value;
    if( casa.toLocaleUpperCase() == "H" || casa.toLocaleUpperCase() == "G"|| casa.toLocaleUpperCase() =="R"|| casa.toLocaleUpperCase() =="S" && casa.trim() != "" && casa.length == 1){
        document.getElementById("mensajeError").innerHTML = "";
        document.getElementById("casa").value ="";
        if(casaAsig.length<16){
            casaAsig.push(casa.toLocaleUpperCase());
            //console.log(casaAsig);
        }else{
            document.getElementById("mensajeError").innerHTML = "Ya ingreso el número total de Estudiantes"
            setTimeout( (e)=>{
                document.getElementById("mensajeError").innerHTML = "";             
            },2000, false);           
        }
    }else{        
        document.getElementById("mensajeError").innerHTML = "Elija un valor permitido";
        setTimeout( (e)=>{
            document.getElementById("mensajeError").innerHTML = "";             
        },1500, false);
        document.getElementById("casa").value ="";
    }
}

let calcularAsignacionesXCasa = (e) =>{
    let contadorAsignaciones = [0,0,0,0];
    casaAsig.forEach((element)=>{
        switch (element) {
            case "G":
                contadorAsignaciones [0] = ++contadorAsignaciones [0];
                break; 
            case "R":
                contadorAsignaciones [1] = ++contadorAsignaciones [1];
                break;          
            case "S":
                contadorAsignaciones [2] = ++contadorAsignaciones [2];
                break;
            case "H":
                contadorAsignaciones [3] = ++contadorAsignaciones [3];
                break;
        }
    });
    let porcentajesAsigXCasa = contadorAsignaciones.map((element) =>{
        return (element/casaAsig.length)*100;
    });
    //console.log("valor"+ contadorAsignaciones);
    //console.log("%"+ porcentajesAsigXCasa);
    
    HTML_TOTAL = `<table border=1 class="table table-striped table-bordered table-dark">
                     <thead>
                         <tr>
                            <td >  Casa  </td>
                            <td >Estudiantes Asignados</td>
                            <td >  %   </td>
                         </tr>
                     </thead>
                     <tbody>
                        <tr>
                            <td>Gryffindor (G)</td>
                            <td>${contadorAsignaciones [0]}</td>
                            <td>${porcentajesAsigXCasa [0]}</td>
                        </td>
                        <tr>
                            <td>Ravenclaw (R)</td>
                            <td>${contadorAsignaciones [1]}</td>
                            <td>${porcentajesAsigXCasa [1]}</td>
                        </tr>
                        <tr>
                            <td>Slytherin (S)</td>
                            <td>${contadorAsignaciones [2]}</td>
                            <td>${porcentajesAsigXCasa [2]}</td>
                        </tr>
                        <tr>
                            <td>Hufflepuff (H)</td>
                            <td>${contadorAsignaciones [3]}</td>
                            <td>${porcentajesAsigXCasa [3]}</td>
                        </tr>
                     <tbody>
                 </table>`
                 //porcentajesAsigXCasa[i]> porcentajesAsigXCasa[y]
    document.getElementById("table").innerHTML = HTML_TOTAL;

    let posiciones = new Array;
    if(porcentajesAsigXCasa[0]== porcentajesAsigXCasa[1] && porcentajesAsigXCasa[0] == porcentajesAsigXCasa[2] && porcentajesAsigXCasa[0]== porcentajesAsigXCasa[3]){
        console.log("Fue una clasificación normal");
    }else{
        if (porcentajesAsigXCasa[0]>=porcentajesAsigXCasa[1]&& porcentajesAsigXCasa[0]>=porcentajesAsigXCasa[2]&&porcentajesAsigXCasa[0]>=porcentajesAsigXCasa[3]) {
            posiciones.push("Gryffindor");
        }
        if (porcentajesAsigXCasa[1]>=porcentajesAsigXCasa[0]&& porcentajesAsigXCasa[1]>=porcentajesAsigXCasa[2]&&porcentajesAsigXCasa[1]>=porcentajesAsigXCasa[3]) {
            posiciones.push("Ravenclaw");
        }
        if (porcentajesAsigXCasa[2]>=porcentajesAsigXCasa[0]&& porcentajesAsigXCasa[2]>=porcentajesAsigXCasa[1]&&porcentajesAsigXCasa[2]>=porcentajesAsigXCasa[3]) {
            posiciones.push("Slytherin ");
        }
        if (porcentajesAsigXCasa[3]>=porcentajesAsigXCasa[0]&& porcentajesAsigXCasa[3]>=porcentajesAsigXCasa[1]&&porcentajesAsigXCasa[3]>=porcentajesAsigXCasa[2]) {
            posiciones.push("Hufflepuff");
        }
        if (posiciones.length == 1) {
            console.log(`La posición dominante es: ${posiciones}`);
        }else{
            console.log(`Las posiciones dominantes son: ${posiciones}.`);
        }
        
        
    }

}

//Asignación del evento click para guardar los valores en el array
document.getElementById("button").addEventListener("click", asignarCasa);

//Asignación del evento click para calcular las asignaciones por escuela
document.getElementById("asignacionesXCasa").addEventListener("click", calcularAsignacionesXCasa);


// if(porcentajesAsigXCasa.length=4){
//     for (let i = 0; i < porcentajesAsigXCasa.length; i++) {
//         for (let y = 0; y < porcentajesAsigXCasa.length ; y++) {
//             if(porcentajesAsigXCasa[i]>= porcentajesAsigXCasa[y]){
//                 console.log("Hola");
//             }else{
//                 break;
//             }
                

//         }

//     }    

// }