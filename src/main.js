let btnName = document.getElementById('btn-name'); // boton de busqueda por nombre de pokemon

// FUNCION QUE BUSCA POR NOMBRE:
let buscarNombre = () => {
  let nameBuscar = document.getElementById('txt-name').value.toLowerCase();
  let resultBuscar = document.getElementById('result-buscar');
  for (let a of POKEMON.pokemon) {
    let nombre = a.name.toLowerCase();
    if (nombre.indexOf(nameBuscar) > -1) {
      resultBuscar.innerHTML = 
       `<div class = "caja-item" id = "caja-item-big">
        <figure>
          <img src = "${a.img}" width = "75" height = "75" />
        </figure>
        <p><strong>Número:</strong> ${a.num}</p>
        <p><strong>Nombre:</strong> ${a.name}</p>
        <p><strong>Tipo: </strong>${a.type}</p>
        <p><strong>Debilidad: </strong>${a.weaknesses}</p>
        </div>`
    }
  }
  event.preventDefault();
};
  btnName.addEventListener('click', buscarNombre);

// FUNCION QUE MUESTRA LA LISTA A - Z DE POKEMONES AL INICIO 
const showList = () => {
    // ordena los pokemones por nombre de A a Z
    a = POKEMON.pokemon.sort(function (a, b){ 
      if ( a.name < b.name ) {  return -1; }  
      if ( a.name > b.name ) {  return 1;  }
      return 0;
    });
    // muestra en pantalla la lista de pokemones
    let lista = "";
     for (i in a)  {
        lista += `<div class = "caja-item">
                    <figure>
                      <img src="${a[i].img}" width="50" height="50" />
                    </figure>
                      <p>${a[i].num}</p>
                      <p>${a[i].name}</p>
                  </div>`
        document.getElementById("lista-pokes").innerHTML = lista;
      } 
  };
  document.addEventListener("DOMContentLoaded", showList);


// FUNCION QUE MUESTRA LA LISTA ORDENADA de la Z a la A:
  const showListZA = () => {
    console.log("entrando a la funcion showListaZA");

    // ordena los pokemones por nombre de A a Z
    a = POKEMON.pokemon.sort(function (a, b){ 
      if ( a.name < b.name ) {  return -1; }  
      if ( a.name > b.name ) {  return 1;  }
      return 0;
    });
    // muestra en pantalla la lista de pokemones
    let lista = "";
     for (i in a)  {
        lista += `<div class = "caja-item">
                    <figure class="poke-img">
                      <img src="${a[i].img}" width="50" height="50" />
                    </figure>
                      <p class="poke-num">${a[i].num}</p>
                      <p class = "poke-name">${a[i].name}</p>
                  </div>`
        document.getElementById("lista-pokes").innerHTML = lista;
      } 
  };
  // document.getElementById("listadoAZ").addEventListener("click", showListZA);






  // llena el select para busqueda por tipo
        // for (i in a)  {
        //   var idSelect = document.getElementById("select-type");
        //   var addOption = document.createElement("option");
        //   idSelect.options.add(addOption, i);
        //   addOption.text = a[i].num + " - " + a[i].name;  
        // }
  
  
  // busqueda por tipo
  const busqTipo = () => {
  
  }
        // for (i in a)  {
        //   var idSelect = document.getElementById("lista-nombres");
        //   var addOption = document.createElement("option");
        //   idSelect.options.add(addOption, i);
        //   addOption.text = a[i].num + " - " + a[i].name;  
        // } 
  
  // leer un nombre y pasarlo a data.js
  //    en data.js leo el nombre y lo devuelvo con mas info aqui
  // envio el resultado a index.html para mostrarlo
  
// //Función que Imprime la Data Ordenada
// let ordenarPor = document.getElementById("ordenar");
// let imprimirOrden = document.getElementById("lista-ordenada");
// let pantallaPrintOrden = document.getElementById("pantalla-lista-ordenada");



// const printordenar = () => {
  
//   let ordenarData = ordenarPor.value;
//   let name= "";
//   let str = "";
//   if(ordenarData === "ascendente" || "descendente"){
//     name = "name";
//   }
//   else {
//     name = "num";
//   }
//   //Llama la funcion pura Ordenar
//   const resultado = window.ordenar(data,name,ordenarData);
//   //Imprime la data ordenada
//   resultado.forEach(element => {
//       str += `<li>
//       <img src="${element.img}">
//       <p><strong>Numero:</strong>${element.num}</p>
//       <p><strong>Nombre:</strong> ${element.name}</p>
//       </li> `;
//   });
//   imprimirOrden.innerHTML=str;
//   pantallaPrintOrden.style.display = "block";
//   mostrar.style.display = "none";

// };
// ordenarPor.addEventListener("change", printordenar);



// //Funcion que oculta patalla buscar y muestra busqueda por tipos
// //boton que se va a la lista de Tipos
// let botonBuscarTipos=document.getElementById("tipo-pokemon");
// let botonBuscarDebilidad=document.getElementById("debilidad-pokemon");
// let pantallaTipos=document.getElementById("pantalla-iconos-tipos");
// let pantallaBuscar = document.getElementById("pantalla-buscar");
// //let pantallaPrincipal = document.getElementById("pantalla-principal");

// const tipos = () =>{
//   pantallaTipos.style.display="block";
//   pantallaBuscar.style.display = "none";
// };
// botonBuscarTipos.addEventListener("click",tipos);
// botonBuscarDebilidad.addEventListener("click",tipos);

// //Funcion que imprime la data por tipo

// let pantallaPrintTipo = document.getElementById("busqueda-por-tipo"); 
// let tipo = document.getElementsByClassName("iconos");

// //recorre los elementos de la misma clase y asigana el evento click
//   for(let i=0; i<tipo.length; i++){
    
//     tipo[i].addEventListener("click", printType = (e) => {
//       if (!e) e= window.event;
//       let str = " ";
//       let resultado= " ";
//       let condicion = e.target.id;
//       //llama a la funcion Filtrar
//       resultado = window.filtrar(data,condicion);
//       //Imprime el resltado de la funcion Filtrar
//       resultado.forEach(element => {
//         str += `<li>
//         <img src="${element.img}">
//         <p><strong>Numero:</strong>${element.num}</p>
//         <p><strong>Nombre:</strong> ${element.name}</p>
//         </li> `;
//     });
//       pantallaPrintTipo.innerHTML = str; 
//       //Oculta la pantalla Tipos
//       pantallaTipos.style.display = "none";
//       pantallaPrintTipo.style.display= "block";
//   });
//   }

//   //Boton de prueba que aparece seccion de buscar y desaparece pantalla principal
//   let botonPrueba = document.getElementById("prueba");
  
//   let myFunction = () => {
//     pantallaBuscar.style.display = "block";
//     mostrar.style.display = "none";
//     pantallaTipos.style.display = "none";
//     pantallaPrintTipo.style.display = "none";
//     pantallaPrintOrden.style.display = "none";
//   };
//   botonPrueba.addEventListener("click",myFunction);