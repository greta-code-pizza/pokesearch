import './style.scss';
import Pokemon from './Pokemon';


window.addEventListener("load", () => {
  let searchList = document.getElementById('searchlist');
  let ulSearchlist = document.getElementById('ulSearchlist');

  let fake = new Pokemon(0, "plop", "plop", 0, 0);
  
  let pokemon = new Pokemon(4, "charmander", "fire", 600, 8500);
  let plop = new Pokemon(5, "charmeleon", "fire", 1100, 19000)


  let pokemons = [
    new Pokemon(1, "bulbasaur", "plante", 700, 6900),
    fake.grow(new Pokemon(9, "blastoise", "water", 1600, 85500)), 
    new Pokemon(12, "butterfree", "normal", 1100, 32000),
    pokemon.grow(plop)
  ];


  document.getElementById('searchbar').addEventListener('keyup', (event) => {
    let el = event.target as HTMLInputElement;
    let val = el.value;
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

          img.src = pokemon.image();
          link.innerText = pokemon.info();
          
          li.appendChild(img);
          li.appendChild(link);
          ulSearchlist.appendChild(li);
        }
      });
    }
  })
});
