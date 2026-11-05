// const pokeAPI = "https://pokeapi.co/api/v2/pokemon/";
// const imgElement = document.getElementById("image");
// const nameElement = document.getElementById("name");
// const numberElement = document.getElementById("number");
// const cardElement = document.getElementById("card");

// let fetchData = async (url) => {
//   try {
//     let response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`Error de red: ${response.statusText}`);
//     }
//     let data = await response.json();

//     imgElement.src = data.sprites.other.dream_world.front_default;
//     nameElement.innerText = `${data.name}`;
//     numberElement.innerText = `#${number}`;

//     let types = data.types;

//     types.forEach((element) => {
//       console.log(element.type.name);

//       let newButton = document.createElement("button");
//       newButton.classList.add(element.type.name);
//       newButton.innerText = element.type.name;
//       cardElement.appendChild(newButton);
//     });
//   } catch (error) {
//     console.error(error);
//   }
// };

// function getRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }

// let number = getRandomNumber(1, 151);
// fetchData(`${pokeAPI}${number}`);

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


function getRandomId(max = 1025) {
  return Math.floor(Math.random() * max) + 1;
}

async function getPokemon() {
  try {
    const randomId = getRandomId();
    let respuesta = await fetch(pokeAPI + randomId);
    
    if (!respuesta.ok) {
      throw new Error("No se ha podido encontrar el Pokémon");
    }

    let data = await respuesta.json();

    imgElement.src = data.sprites.versions["generation-v"]["black-white"].front_default;
    nameElement.innerText = data.name;
    numberElement.innerText = `#${data.id}`;
    // tipoElement.src =  data.types.name;
    alturaElement.innerText = `${data.height*10} cm`;
    pesoElement.innerText = `${data.weight/10 } kg`;

    console.log(data);
  } catch (error) {
    console.error("Hubo un error:", error);
  }
}



async function getPokemonByName(nombre) {
  try {

    let busqueda = nombre.toLowerCase().trim();
    if (!busqueda) return; 

    let respuesta = await fetch(pokeAPI + busqueda);

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

boton.addEventListener('click', function (e) {

  getPokemon();

});

buscarInput.addEventListener('input', function (e) {
  e.preventDefault();
  const textoBuscado = e.target.value;
  getPokemonByName(textoBuscado);
});

getPokemon();