

const pokeAPI = "https://pokeapi.co/api/v2/pokemon/";

const imgElement = document.getElementById("image");
const nameElement = document.getElementById("name");
const numberElement = document.getElementById("number");
const pesoElement = document.getElementById("peso");
const alturaElement = document.getElementById("altura");
const tipoElement = document.getElementById("tipo");
const cardElement = document.getElementById("card");
const boton= document.getElementById("Gachapon");
const buscarInput = document.getElementById("buscar")
const buscarSi = document.getElementById("buscarSi")





async function getPokemonByName(nombre) {
try {
    let busqueda = nombre.toLowerCase().trim();
    if (!busqueda) return; 


    nameElement.innerText = "Cargando..."
    let respuesta = await fetch(pokeAPI + busqueda);

    if (!respuesta.ok) {
      nameElement.innerText = "Pokemon no encontrado"

      throw new Error(`El Pokémon "${nombre}" no fue encontrado.`);
    }

    let data = await respuesta.json();

    imgElement.src = data.sprites.versions["generation-v"]["black-white"].front_default;
    nameElement.innerText = data.name;
    numberElement.innerText = `#${data.id}`;
    alturaElement.innerText = `${data.height*10} cm`;
    pesoElement.innerText = `${data.weight/10 } kg`;

    console.log(data);
  } catch (error) {
    console.error("Hubo un error:", error);
  }
}



const formulario = document.querySelector("form");

formulario.addEventListener('submit', function (e) {
  e.preventDefault(); 
  const textoBuscado = buscarInput.value;
  getPokemonByName(textoBuscado);
});

