export default class Pokemon {
  id: number;
  name: string;
  type: string;
  height: number;
  weight: number;
  age: string;

   constructor(id: number, name: string, type: string, height: number, weight: number) {
     this.id = id;
     this.name = name;
     this.type = type;
     this.height = height;
     this.weight = weight;
     this.age = "young";
     //this.mp = 0;
   }

   grow(pokemon: Pokemon) {
      this.id = pokemon.id;
      this.name = pokemon.name;
      this.type = pokemon.type;
      this.height = pokemon.height;
      this.weight = pokemon.weight;
      this.age = "old";

      return this;
   }

   image() {
     return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.id}.png`;
   }

   info() {
     return `${this.name} (${this.age})\n\n est de type: ${this.type}\n corpulence: ${this.messageImc()}`;
   }

   private messageImc() {
    if(this.imc() < 20) {
      return "insuffisante"
     } else if (this.imc() < 40) {
      return "normale"
     } else {
      return "surpoids";
     }
   }

   private imc() {
     return this.weight / (this.height ^ 2);
   }
}

//let pokemon = new Pokemon(18, 'pikachu');

// Si je fais pokemon.name ça retourne pikachu

//pokemon.grow(new Pokemon(19, 'raichu'));

// Si je fais pokemon.name ça me retourne raichu