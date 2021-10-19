const endpoint = 'https://akabab.github.io/starwars-api/api/all.json';

const gallery = document.querySelector('.gallery');

const fetchAPI = async () => {
  const response = await fetch(endpoint);
  return await response.json();
}

const logCharacters = async () => {
  try{
    const characters = await fetchAPI();
    
    const cardHTML = characters.reduce((acc, char) => {
      acc += `
        <div class="card">
          <span class="title">${char.name}</span>
          <img src="${char.image}" alt="${char.name}" />
          <span><b>Gender: </b>${char.gender}</span>
          <span><b>Specie: </b>${char.species}</span>
          <span><b>Homeworld: </b>${char.homeworld}</span>
        </div>
      `;
  
      return acc;
    }, '');

    gallery.innerHTML = cardHTML;
  }catch(error){
    console.error(error);
    window.alert('Erro na requisição de dados')
  }
}

logCharacters();