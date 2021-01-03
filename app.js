import './style.scss';
window.addEventListener("load", () => {
  let searchList = document.getElementById('searchlist');
  let ulSearchlist = document.getElementById('ulSearchlist');

  let bulbasaur = {
    id: 1,
    name: "bulbasaur"
  };

  let blastoise = {
    id: 9,
    name: "blastoise"
  };

  let butterfree = {
    id: 12,
    name: "butterfree"
  };

  let pokemons = [bulbasaur, butterfree, blastoise];

  document.getElementById('searchbar').addEventListener('keyup', (event) => {
    let val = event.target.value;
    ulSearchlist.innerHTML = '';
    searchList.style.display = 'none';

    if(val !== '') {
      pokemons.forEach(pokemon => {
        let regex = new RegExp(val, 'g');

        if (pokemon.name.match(regex)) {
          searchList.style.display = 'block';

          let li = document.createElement('li');
          let img = document.createElement('img');
          let link = document.createElement('a');

          img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
          link.innerText = pokemon.name;
          li.appendChild(img);
          li.appendChild(link);
          ulSearchlist.appendChild(li);
        }
      });
    }
  })
});
