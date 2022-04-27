require("dotenv").config();

const express = require('express');
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded())

const port = process.env.PORT || 3000;

const agua = "Water"
const psicico = "Psychic"
const fogo = "Fire"
const veneno = "Poison"
const gelo = "Ice"
const voador = "Flying"
const grama = "Grass"
const pedra = "Rock"
const eletrico = "Electric"
const lutador = "Fighting"
const normal = "Normal"
const terra = "Ground"
const inseto = "Bug"
const fada = "Fairy"
const aco = "Steel"
const fantasma = "Ghost"
const escuridao = "Dark"
const dragao = "Dragon"

const pokedex = [{
    id: 1,
    nome: "Bulbasaur",
    tipo: [grama, veneno],
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    descricao: "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
    altura: 0.7,
    peso: 6.9,
    categoria: "Seed",
    habilidade: ["Overgrow"],
    fraquezas: [fogo, psicico, voador, gelo]

}, {
    id: 2,
    nome: "Charmander",
    tipo: [fogo],
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    descricao: "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
    altura: 0.6,
    peso: 8.5,
    categoria: "Lizard",
    habilidade: ["Blaze"],
    fraquezas: [agua, terra, pedra]
}, {
    id: 3,
    nome: "Squirtle",
    tipo: [agua],
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    descricao: "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
    altura: 0.5,
    peso: 9.0,
    categoria: "Tiny Turtle",
    habilidades: ["Torrent"],
    fraquezas: [grama, eletrico]
}];




let pokemon = undefined;

app.get("/", (req, res) => {
    res.render("index", { pokedex, pokemon });
});

// app.post("/:id", (req, res) => {
//     const id = req.params.id;
//     pokemon = pokedex[id];
//     res.render("/:id", { pokedex, pokemon });
// });

app.post("/create", (req, res) => {
    const pokemon = req.body;
    pokemon.id = pokedex.length + 1;
    pokedex.push(pokemon);
    res.redirect("/");
});

app.get("/detalhes/:id", (req, res) => {
    const id = +req.params.id;
    pokemon = pokedex.find(pokemon => pokemon.id === id);
    res.redirect("/");
});

app.post("/update/:id", (req, res) => {
    const id = +req.params.id - 1;
    const newPokemon = req.body;
    newPokemon.id = id + 1;
    pokedex[id] = newPokemon;
    pokemon = undefined;
    res.redirect("/");
});

// app.get("/detalhes/:id", (req, res) => {
//     let pokemon = [];
//     pokedex.filter((element) => {
//         if (element.id == req.params.id) {
//             pokemon.push(element);
//         }
//     })
//     res.render("detalhes.ejs", { pokemon });
// })

app.get("/cadastro", (req, res) => {
    res.render("cadastro.ejs", { pokedex, pokemon });
})
const porta = 3031;

app.listen(porta, () => { console.log(`servidor rodando em http://localhost:${porta}`) });