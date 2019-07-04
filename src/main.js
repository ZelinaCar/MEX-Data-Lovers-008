// // muestra y oculta sections
//  let btnCatalogo = document.getElementById('btn-catalogo');
//  let btnBusqueda = document.getElementById("btn-busqueda");
//  let btnCatalogo = document.getElementById('btn-stats');
//  let btnBusqueda = document.getElementById("btn-adopta");

// const hideSection = id => document.getElementById(id).classList.add('hide');
// const showSection = id => document.getElementById(id).classList.remove('hide');

// const showCatalog = () => {
//     hideSection('seccion-inicio');
//     showSection('seccion-lista');
// }

// btnCatalogo.addEventListener('click', showCatalog);
// // logo.addEventListener('click', returnToIndex);



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
                  <figure class="poke-img">
                    <img src="${a[i].img}" width="50" height="50" />
                  </figure>
                    <p class="poke-num">${a[i].num}</p>
                    <p class = "poke-name">${a[i].name}</p>
                </div>`
      document.getElementById("lista-nombres").innerHTML = lista;
    }
};

document.addEventListener("DOMContentLoaded", showList);


// leer un nombre y pasarlo a data.js
//    en data.js leo el nombre y lo devuelvo con mas info aqui
// envio el resultado a index html para mostrarlo

//funcion que busca por nombre del pokemon
// let boton = document.getElementById('buscar-nombre');
// let inputNombre = document.getElementById('nombre-pokemon');
// let imprimirBusqueda = document.getElementById('busqueda-nombre');

// let buscarNombre = () => {

//   let texto= inputNombre.value.toLowerCase();
//   console.log(texto);
//   for(let pokemon of POKEMON.pokemon){
//         let nombre = pokemon.name.toLowerCase();
//         if(nombre.indexOf(texto) !== -1){
//             imprimirBusqueda.innerHTML = `<li>
//             <img src="${pokemon.img}">
//             <p><strong>Numero:</strong>${pokemon.num}</p>
//             <p><strong>Nombre:</strong> ${pokemon.name}</p>
//             </li>`;
//         }
//     }
//         //console.log(Nombre);

// };



// const cifrar = () => {
//   let cadena = document.getElementById('tarea').value;              //cadena a cifrar
//   let offset = parseInt(document.getElementById('offset').value);
//   cadena = cadena.toUpperCase();
//   let nuevaCadena = cipher.encode(offset, cadena);
//   document.getElementById('resultado').value = nuevaCadena;         //valor de la cadena de texto
//   // document.getElementById('resultado').innerHTML = nuevaCadena;  //para un parrafo
// }
// document.getElementById('boton-cifrar').addEventListener('click',cifrar);


// document.addEventListener("DOMContentLoaded", function(event) {
//   console.log("DOM fully loaded and parsed");
// });
      // for (i in a)  {
      //   var idSelect = document.getElementById("lista-nombres");
      //   var addOption = document.createElement("option");
      //   idSelect.options.add(addOption, i);
      //   addOption.text = a[i].num + " - " + a[i].name;
      // }
