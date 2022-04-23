// import express from "express";

const express = require('express');
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));


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
        nome: "Ivysaur",
        tipo: [grama, veneno],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
        descricao: "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
        altura: 1.0,
        peso: 13.0,
        categoria: "Seed",
        habilidade: ["Overgrow"],
        fraquezas: [fogo, psicico, voador, gelo]
    }, {
        id: 3,
        nome: "Venossaur",
        tipo: [grama, veneno],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
        descricao: "Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
        altura: 2.0,
        peso: 100.0,
        categoria: "Seed",
        habilidade: ["Overgrow"],
        fraquezas: [fogo, psicico, voador, gelo]
    }, {
        id: 4,
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
        id: 5,
        nome: "Charmeleon",
        tipo: [fogo],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png",
        descricao: "It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.",
        altura: 1.1,
        peso: 19.0,
        categoria: "Flame",
        habilidade: ["Blaze"],
        fraquezas: [agua, terra, pedra]
    }, {
        id: 6,
        nome: "Charizard",
        tipo: [fogo, voador],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
        descricao: "It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.",
        altura: 1.7,
        peso: 90.5,
        categoria: "Flame",
        habilidade: ["Blaze"],
        fraquezas: [agua, eletrico, pedra]
    }, {
        id: 7,
        nome: "Squirtle",
        tipo: [agua],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
        descricao: "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
        altura: 0.5,
        peso: 9.0,
        categoria: "Tiny Turtle",
        habilidades: ["Torrent"],
        fraquezas: [grama, eletrico]
    },
    {
        id: 8,
        nome: "Wartotrle",
        tipo: [agua],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png",
        descricao: "It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.",
        altura: 1.0,
        peso: 22.5,
        categoria: "Turtle",
        habilidade: ["Torrent"],
        fraquezas: [grama, eletrico]
    }, {
        id: 9,
        nome: "Blastoise",
        tipo: [agua],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
        descricao: "It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.",
        altura: 1.6,
        peso: 85.5,
        categoria: "Shellfish",
        habilidade: ["Torrent"],
        fraquezas: [grama, eletrico]
    }, {
        id: 10,
        nome: "Caterpie",
        tipo: [inseto],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png",
        descricao: "For protection, it releases a horrible stench from the antenna on its head to drive away enemies.",
        altura: 0.3,
        peso: 2.9,
        categoria: "Worm",
        habilidade: ["Shield Dust"],
        fraquezas: [fogo, voador, pedra]
    }, {
        id: 11,
        nome: "Metapod",
        tipo: [inseto],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png",
        descricao: "It is waiting for the moment to evolve. At this stage, it can only harden, so it remains motionless to avoid attack.",
        altura: 0.7,
        peso: 9.9,
        categoria: "Cocoon",
        habilidade: ["Shed Skin"],
        fraquezas: [fogo, voador, pedra]
    }, {
        id: 12,
        nome: "Butterfree",
        tipo: [inseto, voador],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png",
        descricao: "In battle, it flaps its wings at great speed to release highly toxic dust into the air",
        altura: 1.1,
        peso: 32.0,
        categoria: "Buterfly",
        habilidade: ["Compound Eyes"],
        fraquezas: [fogo, voador, eletrico, gelo, pedra]
    }, {
        id: 13,
        nome: "Weedle",
        tipo: [inseto, veneno],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png",
        descricao: "Beware of the sharp stinger on its head. It hides in grass and bushes where it eats leaves.",
        altura: 0.3,
        peso: 3.2,
        categoria: "Hairy Bug",
        habilidade: ["Shield Dust"],
        fraquezas: [fogo, psicico, voador, pedra]
    }, {
        id: 14,
        nome: "Kakuna",
        tipo: [inseto, veneno],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png",
        descricao: "Able to move only slightly. When endangered, it may stick out its stinger and poison its enemy.",
        altura: 0.6,
        peso: 10.0,
        categoria: "Cocoon",
        habilidade: ["Shed Skin"],
        fraquezas: [fogo, psicico, voador, pedra]
    }, {
        id: 15,
        nome: "Beedrill",
        tipo: [inseto, veneno],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png",
        descricao: "It has three poisonous stingers on its forelegs and its tail. They are used to jab its enemy repeatedly.",
        altura: 1.0,
        peso: 29.5,
        categoria: "Poison Bee",
        habilidade: ["Swarm"],
        fraquezas: [fogo, psicico, voador, pedra]
    },
    {
        id: 16,
        nome: "Pidgey",
        tipo: [normal, voador],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png",
        descricao: "Very docile. If attacked, it will often kick up sand to protect itself rather than fight back.",
        altura: 0.3,
        peso: 1.8,
        categoria: "Tiny Bird",
        habilidade: ["Keen Eye", "Tangled Feet"],
        fraquezas: [eletrico, gelo, pedra]
    },
    {
        id: 17,
        nome: "Pidgeotto",
        tipo: [normal, voador],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/017.png",
        descricao: "This Pokémon is full of vitality. It constantly flies around its large territory in search of prey.",
        altura: 1.1,
        peso: 30.0,
        categoria: "Bird",
        habilidade: ["Keen Eye", "Tangled Feet"],
        fraquezas: [eletrico, gelo, pedra]
    }, {
        id: 18,
        nome: "Pidgeot",
        tipo: [normal, voador],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png",
        descricao: "This Pokémon flies at Mach 2 speed, seeking prey. Its large talons are feared as wicked weapons.",
        altura: 1.5,
        peso: 39.5,
        categoria: "Bird",
        habilidade: ["Keen Eye", "Tangled Feet"],
        fraquezas: [eletrico, gelo, pedra]
    },
    {
        id: 19,
        nome: "Rattata",
        tipo: [normal],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png",
        descricao: "Will chew on anything with its fangs. If you see one, you can be certain that 40 more live in the area.",
        altura: 0.3,
        peso: 3.5,
        categoria: "Mouse",
        habilidade: ["Run Away", "Guts"],
        fraquezas: [lutador]
    }, {
        id: 20,
        nome: "Raticate",
        tipo: [normal],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/020.png",
        descricao: "Its hind feet are webbed. They act as flippers, so it can swim in rivers and hunt for prey.",
        altura: 0.7,
        peso: 18.5,
        categoria: "Mouse",
        habilidade: ["Run Away", "Guts"],
        fraquezas: [lutador]
    }, {
        id: 21,
        nome: "Spearow",
        tipo: [normal, voador],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/021.png",
        descricao: "Inept at flying high. However, it can fly around very fast to protect its territory.",
        altura: 0.3,
        peso: 2.0,
        categoria: "Tiny Bird",
        habilidade: ["Keen Eye"],
        fraquezas: [eletrico, gelo, pedra]
    }, {
        id: 22,
        nome: "Fearow",
        tipo: [normal, voador],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/022.png",
        descricao: "A Pokémon that dates back many years. If it senses danger, it flies high and away, instantly.",
        altura: 1.2,
        peso: 38.0,
        categoria: "Beak",
        habilidade: ["Keen Eye"],
        fraquezas: [eletrico, gelo, pedra]
    },
    {
        id: 23,
        nome: "Ekans",
        tipo: [veneno],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/023.png",
        descricao: "The older it gets, the longer it grows. At night, it wraps its long body around tree branches to rest",
        altura: 2.0,
        peso: 6.9,
        categoria: "Snake",
        habilidade: ["Shed Skin"],
        fraquezas: [psicico, terra]
    },
    {
        id: 24,
        nome: "Arbok",
        tipo: [veneno],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png",
        descricao: "The frightening patterns on its belly have been studied. Six variations have been confirmed.",
        altura: 3.5,
        peso: 65.0,
        categoria: "Cobra",
        habilidade: ["Shed Skin", "Intimidate"],
        fraquezas: [psicico, terra]
    },
    {
        id: 25,
        nome: "Pikachu",
        tipo: [eletrico],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
        descricao: "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.",
        altura: 0.4,
        peso: 6.0,
        categoria: "Mouse",
        habilidade: ["Static"],
        fraquezas: [terra]
    },
    {
        id: 26,
        nome: "Raichu",
        tipo: [eletrico],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png",
        descricao: "Its long tail serves as a ground to protect itself from its own high-voltage power.",
        altura: 0.8,
        peso: 30.0,
        categoria: "Mouse",
        habilidade: ["Static"],
        fraquezas: [terra]
    },
    {
        id: 27,
        nome: "Sandshrew",
        tipo: [terra],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/027.png",
        descricao: "It loves to bathe in the grit of dry, sandy areas. By sand bathing, the Pokémon rids itself of dirt and moisture clinging to its body.",
        altura: 0.6,
        peso: 12.0,
        categoria: "Mouse",
        habilidade: ["Sand Veil"],
        fraquezas: [agua, grama, gelo]
    },
    {
        id: 28,
        nome: "Sandslash",
        tipo: [terra],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/028.png",
        descricao: "The drier the area Sandslash lives in, the harder and smoother the Pokémon's spikes will feel when touched.",
        altura: 1.0,
        peso: 29.5,
        categoria: "Mouse",
        habilidade: ["Sand Veil"],
        fraquezas: [agua, grama, gelo]
    },
    {
        id: 29,
        nome: "Nidoran-Female",
        tipo: [veneno],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/029.png",
        descricao: "Females are more sensitive to smells than males. While foraging, they’ll use their whiskers to check wind direction and stay downwind of predators.",
        altura: 0.4,
        peso: 7.0,
        categoria: "Poison Pin",
        habilidade: ["Poison Point", "Rivalry"],
        fraquezas: [psicico, terra]
    },
    {
        id: 30,
        nome: "Nidorina",
        tipo: [veneno],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/030.png",
        descricao: "The horn on its head has atrophied. Its thought that this happens so Nidorinas children wont get poked while their mother is feeding them.",
        altura: 0.8,
        peso: 20.0,
        categoria: "Poison Pin",
        habilidade: ["Poison Point", "Rivalry"],
        fraquezas: [psicico, terra]
    },
    {
        id: 31,
        nome: "Nidoquen",
        tipo: [veneno, terra],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/031.png",
        descricao: "Nidoqueen is better at defense than offense. With scales like armor, this Pokémon will shield its children from any kind of attack.",
        altura: 1.3,
        peso: 60.0,
        categoria: "Drill",
        habilidade: ["Posison", "Ricalry"],
        fraquezas: [agua, psicico, gelo, terra]
    },
    {
        id: 32,
        nome: "Nidoran-Male",
        tipo: [veneno],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/032.png",
        descricao: "The horn on a male Nidorans forehead contains a powerful poison. This is a very cautious Pokémon, always straining its large ears.",
        altura: 0.5,
        peso: 9.0,
        categoria: "Poison Pin",
        habilidade: ["Poison Point", "Rivalry"],
        fraquezas: [psicico, terra]
    },
    {
        id: 33,
        nome: "Nidorino",
        tipo: [veneno],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/033.png",
        descricao: "With a horn thats harder than diamond, this Pokémon goes around shattering boulders as it searches for a moon stone.",
        altura: 0.9,
        peso: 19.5,
        categoria: "Poison Pin",
        habilidade: ["Poison Point", "Rivalry"],
        fraquezas: [psicico, terra]
    },
    {
        id: 34,
        nome: "Nidoking",
        tipo: [veneno, terra],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/034.png",
        descricao: "When it goes on a rampage, its impossible to control. But in the presence of a Nidoqueen its lived with for a long time, Nidoking calms down.",
        altura: 1.4,
        peso: 62.0,
        categoria: "Drill",
        habilidade: ["Poison Point", "Rivalry"],
        fraquezas: [agua, psicico, gelo, terra]
    }, {
        id: 35,
        nome: "Clefairy",
        tipo: [fada],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png",
        descricao: "It is said that happiness will come to those who see a gathering of Clefairy dancing under a full moon.",
        altura: 0.6,
        peso: 7.5,
        categoria: "Fairy",
        habilidade: ["Cute Charm", "Magic Guard"],
        fraquezas: [aco, veneno]
    }, {
        id: 36,
        nome: "Clefable",
        tipo: [fada],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/036.png",
        descricao: "A timid fairy Pokémon that is rarely seen, it will run and hide the moment it senses people.",
        altura: 1.3,
        peso: 40.0,
        categoria: "Fairy",
        habilidade: ["Cute Charm", "Magic Guard"],
        fraquezas: [aco, veneno]
    }, {
        id: 37,
        nome: "Vulpix",
        tipo: [fogo],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/037.png",
        descricao: "While young, it has six gorgeous tails. When it grows, several new tails are sprouted.",
        altura: 0.6,
        peso: 9.9,
        categoria: "Fox",
        habilidade: ["Flash Fire"],
        fraquezas: [agua, terra, pedra]
    }, {
        id: 38,
        nome: "Ninetales",
        tipo: [fogo],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png",
        descricao: "It is said to live 1,000 years, and each of its tails is loaded with supernatural powers.",
        altura: 1.1,
        peso: 19.9,
        categoria: "Fox",
        habilidade: ["Flash Fire"],
        fraquezas: [agua, terra, pedra]
    }, {
        id: 39,
        nome: "Jigglypuff",
        tipo: [normal, fada],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png",
        descricao: "Jigglypuff has top-notch lung capacity, even by comparison to other Pokémon. It wont stop singing its lullabies until its foes fall asleep.",
        altura: 0.5,
        peso: 5.5,
        categoria: "Balloon",
        habilidade: ["Cute Charm", "Competitive"],
        fraquezas: [aco, veneno]
    }, {
        id: 40,
        nome: "Wigglytuff",
        tipo: [normal, fada],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/040.png",
        descricao: "The more air it takes in, the more it inflates. If opponents catch it in a bad mood, it will inflate itself to an enormous size to intimidate them.",
        altura: 1.0,
        peso: 12.0,
        categoria: "Balloon",
        habilidade: ["Cute Charm", "Competitive"],
        fraquezas: [aco, veneno]
    }, {
        id: 41,
        nome: "Zubat",
        tipo: [veneno, voador],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/041.png",
        descricao: "It emits ultrasonic waves from its mouth to check its surroundings. Even in tight caves, Zubat flies around with skill.",
        altura: 0.8,
        peso: 7.5,
        categoria: "Bat",
        habilidade: ["Inner Focus"],
        fraquezas: [psicico, eletrico, gelo, pedra]
    }, {
        id: 42,
        nome: "Golbat",
        tipo: [veneno, voador],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/042.png",
        descricao: "It loves to drink other creatures’ blood. It’s said that if it finds others of its kind going hungry, it sometimes shares the blood it’s gathered.",
        altura: 1.6,
        peso: 55.0,
        categoria: "Bat",
        habilidade: ["Inner Focus"],
        fraquezas: [psicico, eletrico, gelo, pedra]
    }, {
        id: 43,
        nome: "Oddish",
        tipo: [grama, veneno],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/043.png",
        descricao: "If exposed to moonlight, it starts to move. It roams far and wide at night to scatter its seeds.",
        altura: 0.5,
        peso: 5.4,
        categoria: "Weed",
        habilidade: ["Chlorophyll"],
        fraquezas: [fogo, psicico, voador, gelo]
    }, {
        id: 44,
        nome: "Gloom",
        tipo: [grama, veneno],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/044.png",
        descricao: "Its pistils exude an incredibly foul odor. The horrid stench can cause fainting at a distance of 1.25 miles.",
        altura: 0.8,
        peso: 8.6,
        categoria: "Weed",
        habilidade: ["Chlorophyll"],
        fraquezas: [fogo, psicico, voador, gelo]
    }, {
        id: 45,
        nome: "Vileplume",
        tipo: [grama, veneno],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/045.png",
        descricao: "It has the worlds largest petals. With every step, the petals shake out heavy clouds of toxic pollen.",
        altura: 1.2,
        peso: 18.6,
        categoria: "Flower",
        habilidade: ["Chlorophyll"],
        fraquezas: [fogo, psicico, voador, gelo]
    }, {
        id: 46,
        nome: "Paras",
        tipo: [inseto, grama],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/046.png",
        descricao: "Burrows under the ground to gnaw on tree roots. The mushrooms on its back absorb most of the nutrition.",
        altura: 0.3,
        peso: 5.4,
        categoria: "Mushroom",
        habilidade: ["Effect Spore", "Dry Skin"],
        fraquezas: [fogo, voador, gelo, veneno, pedra, inseto]
    }, {
        id: 47,
        nome: "Parasect",
        tipo: [inseto, grama],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/047.png",
        descricao: "The bug host is drained of energy by the mushroom on its back. The mushroom appears to do all the thinking.",
        altura: 1.0,
        peso: 29.5,
        categoria: "Mushroom",
        habilidade: ["Effect Spore", "Dry Skin"],
        fraquezas: [fogo, voador, gelo, veneno, pedra, inseto]
    }, {
        id: 48,
        nome: "Venonat",
        tipo: [inseto, veneno],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/048.png",
        descricao: "Its large eyes act as radar. In a bright place, you can see that they are clusters of many tiny eyes.",
        altura: 1.0,
        peso: 30.0,
        categoria: "Insect",
        habilidade: ["Compound Eyes", "Tinted Lens"],
        fraquezas: [fogo, psicico, voador, pedra]
    }, {
        id: 49,
        nome: "Venomoth",
        tipo: [grama, veneno],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/049.png",
        descricao: "The powdery scales on its wings are hard to remove from skin. They also contain poison that leaks out on contact.",
        altura: 1.5,
        peso: 12.5,
        categoria: "Poison Moth",
        habilidade: ["Shield Dust", "Tinted Lens"],
        fraquezas: [fogo, psicico, voador, pedra]
    }, {
        id: 50,
        nome: "Diglett",
        tipo: [terra],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/050.png",
        descricao: "If a Diglett digs through a field, it leaves the soil perfectly tilled and ideal for planting crops.",
        altura: 0.2,
        peso: 0.8,
        categoria: "Mole",
        habilidade: ["Sand Veil", "Arena Trap"],
        fraquezas: [agua, grama, gelo]
    }, {
        id: 51,
        nome: "Dugtrio",
        tipo: [terra],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/051.png",
        descricao: "A team of Diglett triplets. It triggers huge earthquakes by burrowing 60 miles underground.",
        altura: 0.7,
        peso: 33.3,
        categoria: "Mole",
        habilidade: ["Sand Veil", "Arena Trap"],
        fraquezas: [agua, grama, gelo]
    }, {
        id: 52,
        nome: "Meowth",
        tipo: [normal],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png",
        descricao: "It loves to collect shiny things. If it’s in a good mood, it might even let its Trainer have a look at its hoard of treasures.",
        altura: 0.4,
        peso: 4.2,
        categoria: "Scratch Cat",
        habilidade: ["Pickup", "Technician"],
        fraquezas: [lutador]
    }, {
        id: 53,
        nome: "Persian",
        tipo: [normal],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/053.png",
        descricao: "Getting this prideful Pokémon to warm up to you takes a lot of effort, and it will claw at you the moment it gets annoyed",
        altura: 1.0,
        peso: 32.0,
        categoria: "Classy Cat",
        habilidade: ["Technician", "Limber"],
        fraquezas: [lutador]
    }, {
        id: 54,
        nome: "Psyduck",
        tipo: [agua],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png",
        descricao: "Psyduck is constantly beset by headaches. If the Pokémon lets its strange power erupt, apparently the pain subsides for a while.",
        altura: 0.8,
        peso: 19.6,
        categoria: "Duck",
        habilidade: ["Damp", "Cloud Nine"],
        fraquezas: [grama, eletrico]
    }, {
        id: 55,
        nome: "Golduck",
        tipo: [agua],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/055.png",
        descricao: "This Pokémon lives in gently flowing rivers. It paddles through the water with its long limbs, putting its graceful swimming skills on display.",
        altura: 1.7,
        peso: 76.6,
        categoria: "Duck",
        habilidade: ["Damp", "Cloud Nine"],
        fraquezas: [grama, eletrico]
    }, {
        id: 56,
        nome: "Mankey",
        tipo: [lutador],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/056.png",
        descricao: "An agile Pokémon that lives in trees. It angers easily and will not hesitate to attack anything.",
        altura: 0.5,
        peso: 28.0,
        categoria: "Pig Monkey",
        habilidade: ["Vital Spirit", "Anger Point"],
        fraquezas: [psicico, voador, fada]
    }, {
        id: 57,
        nome: "Primeape",
        tipo: [lutador],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/057.png",
        descricao: "It stops being angry only when nobody else is around. To view this moment is very difficult.",
        altura: 1.0,
        peso: 32.0,
        categoria: "Pig Monkey",
        habilidade: ["Vital Spirit", "Anger Point"],
        fraquezas: [psicico, voador, fada]
    }, {
        id: 58,
        nome: "Growlithe",
        tipo: [fogo],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/058.png",
        descricao: "It has a brave and trustworthy nature. It fearlessly stands up to bigger and stronger foes.",
        altura: 0.7,
        peso: 19.0,
        categoria: "Puppy",
        habilidade: ["Intimidate", "Flash Fire"],
        fraquezas: [agua, terra, pedra]
    }, {
        id: 59,
        nome: "Arcanine",
        tipo: [fogo],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/059.png",
        descricao: "The sight of it running over 6,200 miles in a single day and night has captivated many people.",
        altura: 1.9,
        peso: 155.0,
        categoria: "Legendary",
        habilidade: ["Intimidate", "Flash Fire"],
        fraquezas: [agua, terra, pedra]
    }, {
        id: 60,
        nome: "Poliwag",
        tipo: [agua],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/060.png",
        descricao: "For Poliwag, swimming is easier than walking. The swirl pattern on its belly is actually part of the Pokémons innards showing through the skin.",
        altura: 0.6,
        peso: 12.4,
        categoria: "Tadpole",
        habilidade: ["Damp", "Water Absorb"],
        fraquezas: [grama, eletrico]
    }, {
        id: 61,
        nome: "Poliwhirl",
        tipo: [agua],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/061.png",
        descricao: "Staring at the swirl on its belly causes drowsiness. This trait of Poliwhirls has been used in place of lullabies to get children to go to sleep.",
        altura: 1.0,
        peso: 20.0,
        categoria: "Tadpole",
        habilidade: ["Damp", "Water Absorb"],
        fraquezas: [grama, eletrico]
    }, {
        id: 62,
        nome: "PoliWrath",
        tipo: [agua, lutador],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/062.png",
        descricao: "Its body is solid muscle. When swimming through cold seas, Poliwrath uses its impressive arms to smash through drift ice and plow forward.",
        altura: 1.3,
        peso: 54.0,
        categoria: "Tadpole",
        habilidade: ["Damp", "Water Absorb"],
        fraquezas: [fada, grama, voador, psicico, eletrico]
    }, {
        id: 63,
        nome: "Abra",
        tipo: [psicico],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/063.png",
        descricao: "This Pokémon uses its psychic powers while it sleeps. The contents of Abras dreams affect the powers that the Pokémon wields.",
        altura: 0.9,
        peso: 19.5,
        categoria: "Psi",
        habilidade: ["Inner Focus", "Synchronize"],
        fraquezas: [fantasma, escuridao, inseto]
    }, {
        id: 64,
        nome: "Kadabra",
        tipo: [psicico],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/064.png",
        descricao: "Using its psychic power, Kadabra levitates as it sleeps. It uses its springy tail as a pillow.",
        altura: 1.3,
        peso: 56.5,
        categoria: "Psi",
        habilidade: ["Inner Focus", "Synchronize"],
        fraquezas: [fantasma, escuridao, inseto]
    }, {
        id: 65,
        nome: "Alakazam",
        tipo: [psicico],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/065.png",
        descricao: "It has an incredibly high level of intelligence. Some say that Alakazam remembers everything that ever happens to it, from birth till death.",
        altura: 1.5,
        peso: 48.0,
        categoria: "Psi",
        habilidade: ["Inner Focus", "Synchronize"],
        fraquezas: [fantasma, escuridao, inseto]
    }, {
        id: 66,
        nome: "Machop",
        tipo: [lutador],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/066.png",
        descricao: "Its whole body is composed of muscles. Even though it’s the size of a human child, it can hurl 100 grown-ups.",
        altura: 0.8,
        peso: 19.5,
        categoria: "SuperPower",
        habilidade: ["Guts", "No Guard"],
        fraquezas: [psicico, voador, fada]
    }, {
        id: 67,
        nome: "Machoke",
        tipo: [lutador],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/067.png",
        descricao: "Its muscular body is so powerful, it must wear a power-save belt to be able to regulate its motions.",
        altura: 1.5,
        peso: 70.5,
        categoria: "SuperPower",
        habilidade: ["Guts", "No Guard"],
        fraquezas: [psicico, voador, fada]
    }, {
        id: 68,
        nome: "Machamp",
        tipo: [lutador],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/068.png",
        descricao: "It quickly swings its four arms to rock its opponents with ceaseless punches and chops from all angles.",
        altura: 1.6,
        peso: 130.0,
        categoria: "SuperPower",
        habilidade: ["Guts", "No Guard"],
        fraquezas: [psicico, voador, fada]
    }, {
        id: 69,
        nome: "Bellsprout",
        tipo: [grama, veneno],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/069.png",
        descricao: "Prefers hot and humid places. It ensnares tiny bugs with its vines and devours them.",
        altura: 0.7,
        peso: 4.0,
        categoria: "Flower",
        habilidade: ["Chlorophyll"],
        fraquezas: [fogo, psicico, voador, gelo]
    }, {
        id: 70,
        nome: "Weepinbell",
        tipo: [grama, veneno],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/070.png",
        descricao: "When hungry, it swallows anything that moves. Its hapless prey is dissolved by strong acids.",
        altura: 1.0,
        peso: 6.4,
        categoria: "Flycatcher",
        habilidade: ["Chlorophyll"],
        fraquezas: [fogo, psicico, voador, gelo]
    }, {
        id: 71,
        nome: "Victreebel",
        tipo: [grama, veneno],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/071.png",
        descricao: "Lures prey with the sweet aroma of honey. Swallowed whole, the prey is dissolved in a day, bones and all.",
        altura: 1.7,
        peso: 15.5,
        categoria: "Flycatcher",
        habilidade: ["Chlorophyll"],
        fraquezas: [fogo, psicico, voador, gelo]
    }, {
        id: 72,
        nome: "Tentacool",
        tipo: [agua, veneno],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/072.png",
        descricao: "Tentacool is not a particularly strong swimmer. It drifts across the surface of shallow seas as it searches for prey.",
        altura: 0.9,
        peso: 45.5,
        categoria: "JellyFish",
        habilidade: ["Clear Body", "Liquid Ooze"],
        fraquezas: [psicico, eletrico, terra]
    }, {
        id: 73,
        nome: "Tentacruel",
        tipo: [agua, veneno],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/073.png",
        descricao: "When the red orbs on Tentacruel’s head glow brightly, watch out. The Pokémon is about to fire off a burst of ultrasonic waves.",
        altura: 1.6,
        peso: 55.0,
        categoria: "JellyFish",
        habilidade: ["Clear Body", "Liquid Ooze"],
        fraquezas: [psicico, eletrico, terra]
    }, {
        id: 74,
        nome: "Geodude",
        tipo: [pedra, terra],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/074.png",
        descricao: "Commonly found near mountain trails and the like. If you step on one by accident, it gets angry.",
        altura: 0.4,
        peso: 20.0,
        categoria: "Rock",
        habilidade: ["Rock Head", "Sturdy"],
        fraquezas: [aco, lutador, agua, gelo, grama, terra]
    }, {
        id: 75,
        nome: "Graveler",
        tipo: [pedra, terra],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/075.png",
        descricao: "Often seen rolling down mountain trails. Obstacles are just things to roll straight over, not avoid.",
        altura: 1.0,
        peso: 105.0,
        categoria: "Rock",
        habilidade: ["Rock Head", "Sturdy"],
        fraquezas: [aco, lutador, agua, gelo, grama, terra]
    }, {
        id: 76,
        nome: "Golem",
        tipo: [pedra, terra],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/076.png",
        descricao: "Once it sheds its skin, its body turns tender and whitish. Its hide hardens when its exposed to air.",
        altura: 1.4,
        peso: 300.0,
        categoria: "Megaton",
        habilidade: ["Rock Head", "Sturdy"],
        fraquezas: [aco, lutador, agua, gelo, grama, terra]
    }, {
        id: 77,
        nome: "Ponyta",
        tipo: [fogo],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/077.png",
        descricao: "It can't run properly when it's newly born. As it races around with others of its kind, its legs grow stronger.",
        altura: 1.0,
        peso: 30.0,
        categoria: "Fire Horse",
        habilidade: ["Run Away", "Flash Fire"],
        fraquezas: [agua, terra, pedra]
    }, {
        id: 78,
        nome: "Rapidash",
        tipo: [fogo],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/078.png",
        descricao: "This Pokémon can be seen galloping through fields at speeds of up to 150 mph, its fiery mane fluttering in the wind.",
        altura: 1.7,
        peso: 95.0,
        categoria: "Fire Horse",
        habilidade: ["Run Away", "Flash Fire"],
        fraquezas: [agua, terra, pedra]
    }, {
        id: 79,
        nome: "Slowpoke",
        tipo: [agua, psicico],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/079.png",
        descricao: "Slow-witted and oblivious, this Pokémon won't feel any pain if its tail gets eaten. It won't notice when its tail grows back, either.",
        altura: 1.2,
        peso: 36.0,
        categoria: "Dopey",
        habilidade: ["Oblivious", "Own Tempo"],
        fraquezas: [fantasma, escuridao, grama, eletrico, inseto]
    }, {
        id: 80,
        nome: "Slowbro",
        tipo: [agua, psicico],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/080.png",
        descricao: "Slowpoke became Slowbro when a Shellder bit on to its tail. Sweet flavors seeping from the tail make the Shellder feel as if its life is a dream.",
        altura: 1.6,
        peso: 78.5,
        categoria: "Hermit Crab",
        habilidade: ["Oblivious", "Own Tempo"],
        fraquezas: [fantasma, escuridao, grama, eletrico, inseto]
    }, {
        id: 81,
        nome: "Magnemite",
        tipo: [eletrico, aco],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/081.png",
        descricao: "At times, Magnemite runs out of electricity and ends up on the ground. If you give batteries to a grounded Magnemite, it'll start moving again.",
        altura: 0.3,
        peso: 6.0,
        categoria: "Magnet",
        habilidade: ["Sturdy", "Magnet Pull"],
        fraquezas: [fogo, lutador, terra]
    }, {
        id: 82,
        nome: "Magneton",
        tipo: [eletrico, aco],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/082.png",
        descricao: "This Pokémon is three Magnemite that have linked together. Magneton sends out powerful radio waves to study its surroundings.",
        altura: 1.0,
        peso: 60.0,
        categoria: "Magnet",
        habilidade: ["Sturdy", "Magnet Pull"],
        fraquezas: [fogo, lutador, terra]
    }, {
        id: 83,
        nome: "Farfertch'd",
        tipo: [normal, voador],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/083.png",
        descricao: "The stalk this Pokémon carries in its wings serves as a sword to cut down opponents. In a dire situation, the stalk can also serve as food.",
        altura: 0.8,
        peso: 15.0,
        categoria: "Wild Duck",
        habilidade: ["Keen Eye", "Inner Focus"],
        fraquezas: [eletrico, gelo, pedra]
    }, {
        id: 84,
        nome: "Doduo",
        tipo: [normal, voador],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/084.png",
        descricao: "Its short wings make flying difficult. Instead, this Pokémon runs at high speed on developed legs.",
        altura: 1.4,
        peso: 39.2,
        categoria: "Twin Bird",
        habilidade: ["Run Away", "Early Bird"],
        fraquezas: [eletrico, gelo, pedra]
    }, {
        id: 85,
        nome: "Dodrio",
        tipo: [normal, voador],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/085.png",
        descricao: "One of Doduo's two heads splits to form a unique species. It runs close to 40 mph in prairies.",
        altura: 1.8,
        peso: 85.2,
        categoria: "Triple Bird",
        habilidade: ["Run Away", "Early Bird"],
        fraquezas: [eletrico, gelo, pedra]
    }, {
        id: 86,
        nome: "Seel",
        tipo: [agua],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/086.png",
        descricao: "Loves freezing-cold conditions. Relishes swimming in a frigid climate of around 14 degrees Fahrenheit.",
        altura: 1.1,
        peso: 90.0,
        categoria: "Sea Lion",
        habilidade: ["Thick Fat", "Hydration"],
        fraquezas: [grama, eletrico]
    }, {
        id: 87,
        nome: "Dewgong",
        tipo: [agua, gelo],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/087.png",
        descricao: "Its entire body is a snowy white. Unharmed by even intense cold, it swims powerfully in icy waters.",
        altura: 1.7,
        peso: 120.0,
        categoria: "Sea Lion",
        habilidade: ["Thick Fat", "Hydration"],
        fraquezas: [grama, eletrico, lutador, pedra]
    }, {
        id: 88,
        nome: "Grimer",
        tipo: [veneno],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/088.png",
        descricao: "Made of congealed sludge. It smells too putrid to touch. Even weeds won't grow in its path.",
        altura: 0.9,
        peso: 30.0,
        categoria: "Sludge",
        habilidade: ["Stench", "Sticky Hold"],
        fraquezas: [psicico, terra]
    }, {
        id: 89,
        nome: "Muk",
        tipo: [veneno],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/089.png",
        descricao: "Smells so awful, it can cause fainting. Through degeneration of its nose, it lost its sense of smell.",
        altura: 1.2,
        peso: 30.0,
        categoria: "Sludge",
        habilidade: ["Stench", "Sticky Hold"],
        fraquezas: [psicico, terra]
    }, {
        id: 90,
        nome: "Shelder",
        tipo: [agua],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/090.png",
        descricao: "It swims facing backward by opening and closing its two-piece shell. It is surprisingly fast.",
        altura: 0.3,
        peso: 4.0,
        categoria: "Bivalve",
        habilidade: ["Shell Armor", "Skill Link"],
        fraquezas: [grama, eletrico]
    }, {
        id: 91,
        nome: "Cloyster",
        tipo: [agua, gelo],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/091.png",
        descricao: "Its shell is extremely hard. It cannot be shattered, even with a bomb. The shell opens only when it is attacking.",
        altura: 1.5,
        peso: 132.5,
        categoria: "Bivalve",
        habilidade: ["Shell Armor", "Skill Link"],
        fraquezas: [grama, eletrico, lutador, pedra]
    }, {
        id: 92,
        nome: "Gastly",
        tipo: [fantasma, veneno],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/092.png",
        descricao: "Born from gases, anyone would faint if engulfed by its gaseous body, which contains poison.",
        altura: 1.3,
        peso: 0.1,
        categoria: "Gas",
        habilidade: ["Levitate"],
        fraquezas: [fantasma, escuridao, psicico, terra]
    }, {
        id: 93,
        nome: "Haunter",
        tipo: [fantasma, veneno],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/093.png",
        descricao: "Its tongue is made of gas. If licked, its victim starts shaking constantly until death eventually comes.",
        altura: 1.6,
        peso: 0.1,
        categoria: "Gas",
        habilidade: ["Levitate"],
        fraquezas: [fantasma, escuridao, psicico, terra]
    }, {
        id: 94,
        nome: "Gengar",
        tipo: [fantasma, veneno],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png",
        descricao: "On the night of a full moon, if shadows move on their own and laugh, it must be Gengar's doing.",
        altura: 1.5,
        peso: 40.5,
        categoria: "Shadow",
        habilidade: ["Cursed Body"],
        fraquezas: [fantasma, escuridao, psicico, terra]
    }, {
        id: 95,
        nome: "Onix",
        tipo: [],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/095.png",
        descricao: "As it digs through the ground, it absorbs many hard objects. This is what makes its body so solid.",
        altura: 8.8,
        peso: 210.0,
        categoria: "Rock Snake",
        habilidade: ["Rock head", "Sturdy"],
        fraquezas: [aco, lutador, agua, gelo, grama, terra]
    }, {
        id: 96,
        nome: "Drowzee",
        tipo: [psicico],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/096.png",
        descricao: "If you sleep by it all the time, it will sometimes show you dreams it had eaten in the past.",
        altura: 1.0,
        peso: 32.4,
        categoria: "Hypnosis",
        habilidade: ["Insomnia", "Forewarn"],
        fraquezas: [fantasma, escuridao, inseto]
    }, {
        id: 97,
        nome: "Hypno",
        tipo: [psicico],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/097.png",
        descricao: "Avoid eye contact if you come across one. It will try to put you to sleep by using its pendulum.",
        altura: 1.6,
        peso: 75.6,
        categoria: "Hypnosis",
        habilidade: ["Insomnia", "Forewarn"],
        fraquezas: [fantasma, escuridao, inseto]
    }, {
        id: 98,
        nome: "Krabby",
        tipo: [agua],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/098.png",
        descricao: "It can be found near the sea. The large pincers grow back if they are torn out of their sockets.",
        altura: 0.4,
        peso: 6.5,
        categoria: "River Crab",
        habilidade: ["Shell Armor", "Hyper Cutter"],
        fraquezas: [grama, eletrico]
    }, {
        id: 99,
        nome: "Kingler",
        tipo: [agua],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/099.png",
        descricao: "Its large and hard pincer has 10,000-horsepower strength. However, being so big, it is unwieldy to move.",
        altura: 1.3,
        peso: 60.0,
        categoria: "Pincer",
        habilidade: ["Shell Armor", "Hyper Cutter"],
        fraquezas: [grama, eletrico]
    }, {
        id: 100,
        nome: "Voltorb",
        tipo: [eletrico],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/100.png",
        descricao: "It is said to camouflage itself as a Poké Ball. It will self-destruct with very little stimulus.",
        altura: 0.5,
        peso: 10.4,
        categoria: "Ball",
        habilidade: ["Static", "Soundproof"],
        fraquezas: [terra]
    }, {
        id: 101,
        nome: "Electrode",
        tipo: [eletrico],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/101.png",
        descricao: "Stores electrical energy inside its body. Even the slightest shock could trigger a huge explosion.",
        altura: 1.2,
        peso: 66.6,
        categoria: "Ball",
        habilidade: ["Static", "Soundproof"],
        fraquezas: [terra]
    }, {
        id: 102,
        nome: "Exeggcute",
        tipo: [grama, psicico],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/102.png",
        descricao: "Though it may look like it's just a bunch of eggs, it's a proper Pokémon. Exeggcute communicates with others of its kind via telepathy, apparently.",
        altura: 0.4,
        peso: 2.5,
        categoria: "Egg",
        habilidade: ["Chlorophyll"],
        fraquezas: [fantasma, fogo, voador, gelo, escuridao, veneno, inseto]
    }, {
        id: 103,
        nome: "Exeggutor",
        tipo: [grama, psicico],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/103.png",
        descricao: "Each of Exeggutor's three heads is thinking different thoughts. The three don't seem to be very interested in one another.",
        altura: 2.0,
        peso: 120.0,
        categoria: "Coconut",
        habilidade: ["Chlorophyll"],
        fraquezas: [fantasma, fogo, voador, gelo, escuridao, veneno, inseto]
    }, {
        id: 104,
        nome: "Cubone",
        tipo: [terra],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/104.png",
        descricao: "When the memory of its departed mother brings it to tears, its cries echo mournfully within the skull it wears on its head.",
        altura: 0.4,
        peso: 6.5,
        categoria: "Lonely",
        habilidade: ["Rock Head", "Lightning Rod"],
        fraquezas: [agua, grama, gelo]
    }, {
        id: 105,
        nome: "Marowak",
        tipo: [terra],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/105.png",
        descricao: "This Pokémon overcame its sorrow to evolve a sturdy new body. Marowak faces its opponents bravely, using a bone as a weapon.",
        altura: 1.0,
        peso: 45.0,
        categoria: "Bone Keeper",
        habilidade: ["Rock Head", "Lightning Rod"],
        fraquezas: [agua, grama, gelo]
    }, {
        id: 106,
        nome: "Hitmonlee",
        tipo: [lutador],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/106.png",
        descricao: "This amazing Pokémon has an awesome sense of balance. It can kick in succession from any position.",
        altura: 1.5,
        peso: 49.8,
        categoria: "Kicking",
        habilidade: ["Limber", "Reckless"],
        fraquezas: [psicico, voador, fada]
    }, {
        id: 107,
        nome: "Hitmonchan",
        tipo: [lutador],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/107.png",
        descricao: "Its punches slice the air. They are launched at such high speed, even a slight graze could cause a burn.",
        altura: 1.4,
        peso: 50.2,
        categoria: "Punching",
        habilidade: ["Keen Eye", "Iron Fist"],
        fraquezas: [psicico, voador, fada]
    }, {
        id: 108,
        nome: "Lickitung",
        tipo: [normal],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/108.png",
        descricao: "If this Pokémon's sticky saliva gets on you and you don't clean it off, an intense itch will set in. The itch won't go away, either.",
        altura: 1.2,
        peso: 65.5,
        categoria: "Licking",
        habilidade: ["Oblivius", "Own tempo"],
        fraquezas: [lutador]
    }, {
        id: 109,
        nome: "Koffing",
        tipo: [veneno],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/109.png",
        descricao: "Its body is full of poisonous gas. It floats into garbage dumps, seeking out the fumes of raw, rotting trash.",
        altura: 0.6,
        peso: 1.0,
        categoria: "Poison Gas",
        habilidade: ["Levitate", "Neutralizing Gas"],
        fraquezas: [psicico, terra]
    }, {
        id: 110,
        nome: "Weezing",
        tipo: [veneno],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/110.png",
        descricao: "It mixes gases between its two bodies. It's said that these Pokémon were seen all over the Galar region back in the day.",
        altura: 1.2,
        peso: 9.5,
        categoria: "Poison Gas",
        habilidade: ["Levitate", "Neutralizing Gas"],
        fraquezas: [psicico, terra]
    }, {
        id: 111,
        nome: "Rhyhorn",
        tipo: [terra, pedra],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/111.png",
        descricao: "Strong, but not too bright, this Pokémon can shatter even a skyscraper with its charging tackles.",
        altura: 1.0,
        peso: 115.0,
        categoria: "Spikes",
        habilidade: ["Rock Head", "Lightning Rod"],
        fraquezas: [aco, gelo, agua, lutador, grama, terra]
    }, {
        id: 112,
        nome: "Rhydon",
        tipo: [terra, pedra],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/112.png",
        descricao: "It begins walking on its hind legs after evolution. It can punch holes through boulders with its horn.",
        altura: 1.9,
        peso: 120.0,
        categoria: "Drill",
        habilidade: ["Rock Head", "Lightning Rod"],
        fraquezas: [aco, gelo, agua, lutador, grama, terra]
    }, {
        id: 113,
        nome: "Chansey",
        tipo: [normal],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/113.png",
        descricao: "The egg Chansey carries is not only delicious but also packed with nutrition. It's used as a high-class cooking ingredient.",
        altura: 1.1,
        peso: 34.6,
        categoria: "Egg",
        habilidade: [normal],
        fraquezas: [lutador]
    }, {
        id: 114,
        nome: "Tangela",
        tipo: [grama],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/114.png",
        descricao: "Hidden beneath a tangle of vines that grows nonstop even if the vines are torn off, this Pokémon's true appearance remains a mystery.",
        altura: 1.0,
        peso: 35.0,
        categoria: "Vine",
        habilidade: ["Chlorophyll", "Leaf Guard"],
        fraquezas: [fogo, voador, gelo, veneno, inseto]
    }, {
        id: 115,
        nome: "Kangaskhan",
        tipo: [normal],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/115.png",
        descricao: "Although it's carrying its baby in a pouch on its belly, Kangaskhan is swift on its feet. It intimidates its opponents with quick jabs.",
        altura: 2.2,
        peso: 80.0,
        categoria: "Parent",
        habilidade: ["Early Bird", "Scrappy"],
        fraquezas: [lutador]
    }, {
        id: 116,
        nome: "Horsea",
        tipo: [agua],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/116.png",
        descricao: "Horsea makes its home in oceans with gentle currents. If this Pokémon is under attack, it spits out pitch-black ink and escapes.",
        altura: 0.4,
        peso: 8.0,
        categoria: "Dragon",
        habilidade: ["Swift Swim", "Sniper"],
        fraquezas: [grama, eletrico]
    }, {
        id: 117,
        nome: "Seadra",
        tipo: [agua],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/117.png",
        descricao: "It's the males that raise the offspring. While Seadra are raising young, the spines on their backs secrete thicker and stronger poison.",
        altura: 1.2,
        peso: 25.0,
        categoria: "Dragon",
        habilidade: ["Poison Point", "Sniper"],
        fraquezas: [grama, eletrico]
    }, {
        id: 118,
        nome: "Goldeen",
        tipo: [agua],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/118.png",
        descricao: "Its dorsal, pectoral, and tail fins wave elegantly in water. That is why it is known as the Water Dancer.",
        altura: 0.6,
        peso: 15.0,
        categoria: "Goldfish",
        habilidade: ["Swift Swim", "Water Veil"],
        fraquezas: [grama, eletrico]
    }, {
        id: 119,
        nome: "Seaking",
        tipo: [agua],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/119.png",
        descricao: "In autumn, its body becomes more fatty in preparing to propose to a mate. It takes on beautiful colors.",
        altura: 1.3,
        peso: 39.0,
        categoria: "Goldfish",
        habilidade: ["Swift Swim", "Water Veil"],
        fraquezas: [grama, eletrico]
    }, {
        id: 120,
        nome: "Staryu",
        tipo: [agua],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/120.png",
        descricao: "If you visit a beach at the end of summer, you’ll be able to see groups of Staryu lighting up in a steady rhythm.",
        altura: 0.8,
        peso: 34.5,
        categoria: "Star Shape",
        habilidade: ["Natural Cure", "Illuminate"],
        fraquezas: [grama, eletrico]
    }, {
        id: 121,
        nome: "Starmite",
        tipo: [agua, psicico],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/121.png",
        descricao: "This Pokémon has an organ known as its core. The organ glows in seven colors when Starmie is unleashing its potent psychic powers.",
        altura: 1.1,
        peso: 80.0,
        categoria: "Mysterious",
        habilidade: ["Natural Cure", "Illuminate"],
        fraquezas: [fantasma, escuridao, grama, eletrico, inseto]
    }, {
        id: 122,
        nome: "Mr Mime",
        tipo: [psicico, fada],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/122.png",
        descricao: "The broadness of its hands may be no coincidence—many scientists believe its palms became enlarged specifically for pantomiming.",
        altura: 1.3,
        peso: 54.5,
        categoria: "Barrier",
        habilidade: ["Soundproof", "Filter"],
        fraquezas: [fantasma, aco, veneno]
    }, {
        id: 123,
        nome: "Scyther",
        tipo: [inseto, voador],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/123.png",
        descricao: "As Scyther fights more and more battles, its scythes become sharper and sharper. With a single slice, Scyther can fell a massive tree.",
        altura: 1.5,
        peso: 56.0,
        categoria: "Mantis",
        habilidade: ["Swarm", "Technician"],
        fraquezas: [fogo, voador, eletrico, gelo, pedra]
    }, {
        id: 124,
        nome: "Jynx",
        tipo: [gelo, psicico],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/124.png",
        descricao: "In certain parts of Galar, Jynx was once feared and worshiped as the Queen of Ice.",
        altura: 1.4,
        peso: 40.6,
        categoria: "Human Shape",
        habilidade: ["Oblivious", "ForeWarn"],
        fraquezas: [aco, fantasma, fogo, escuridao, pedra, inseto]
    }, {
        id: 125,
        nome: "Electabuzz",
        tipo: [eletrico],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/125.png",
        descricao: "Many power plants keep Ground-type Pokémon around as a defense against Electabuzz that come seeking electricity.",
        altura: 1.1,
        peso: 30.0,
        categoria: "Electric",
        habilidade: ["Static"],
        fraquezas: [terra]
    }, {
        id: 126,
        nome: "Magmar",
        tipo: [fogo],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/126.png",
        descricao: "Magmar dispatches its prey with fire. But it regrets this habit once it realizes that it has burned its intended prey to a charred crisp.",
        altura: 1.3,
        peso: 44.5,
        categoria: "Spitfire",
        habilidade: ["Flame Body"],
        fraquezas: [agua, terra, pedra]
    }, {
        id: 127,
        nome: "Pinsir",
        tipo: [inseto],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/127.png",
        descricao: "These Pokémon judge one another based on pincers. Thicker, more impressive pincers make for more popularity with the opposite gender.",
        altura: 1.5,
        peso: 55.0,
        categoria: "Stag Beetle",
        habilidade: ["Hyper Cutter", "Mold Breaker"],
        fraquezas: [fogo, voador, pedra]
    }, {
        id: 128,
        nome: "Taurus",
        tipo: [normal],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/128.png",
        descricao: "When Tauros begins whipping itself with its tails, it's a warning that the Pokémon is about to charge with astounding speed.",
        altura: 1.4,
        peso: 88.4,
        categoria: "Wild Bull",
        habilidade: ["Intimidate", "Anger Point"],
        fraquezas: [lutador]
    }, {
        id: 129,
        nome: "Magikarp",
        tipo: [agua],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/129.png",
        descricao: "It is virtually worthless in terms of both power and speed. It is the most weak and pathetic Pokémon in the world.",
        altura: 0.9,
        peso: 10.0,
        categoria: "Fish",
        habilidade: ["Swift Swim"],
        fraquezas: [grama, eletrico]
    }, {
        id: 130,
        nome: "Gyarados",
        tipo: [agua, voador],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/130.png",
        descricao: "It has an extremely aggressive nature. The Hyper Beam it shoots from its mouth totally incinerates all targets.",
        altura: 6.5,
        peso: 235.0,
        categoria: "Atrocious",
        habilidade: ["Intimidate"],
        fraquezas: [eletrico, pedra]
    }, {
        id: 131,
        nome: "Lapras",
        tipo: [agua, gelo],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/131.png",
        descricao: "A smart and kindhearted Pokémon, it glides across the surface of the sea while its beautiful song echoes around it.",
        altura: 2.5,
        peso: 220.0,
        categoria: "Transport",
        habilidade: ["Water Absorb", "Shell Armor"],
        fraquezas: [grama, eletrico, lutador, pedra]
    }, {
        id: 132,
        nome: "Ditto",
        tipo: [normal],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png",
        descricao: "It can reconstitute its entire cellular structure to change into what it sees, but it returns to normal when it relaxes.",
        altura: 0.3,
        peso: 4.0,
        categoria: "Transform",
        habilidade: ["Limber"],
        fraquezas: [lutador]
    }, {
        id: 133,
        nome: "Eevee",
        tipo: [normal],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png",
        descricao: "It has the ability to alter the composition of its body to suit its surrounding environment.",
        altura: 0.3,
        peso: 6.5,
        categoria: "Evolution",
        habilidade: ["Run Away", "Adaptability"],
        fraquezas: [lutador]
    }, {
        id: 134,
        nome: "Vaporeon",
        tipo: [agua],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/134.png",
        descricao: "When Vaporeon's fins begin to vibrate, it is a sign that rain will come within a few hours.",
        altura: 1.0,
        peso: 29.0,
        categoria: "Bubble Jet",
        habilidade: ["Water Absorb"],
        fraquezas: [grama, eletrico]
    }, {
        id: 135,
        nome: "Jolteon",
        tipo: [eletrico],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/135.png",
        descricao: "If it is angered or startled, the fur all over its body bristles like sharp needles that pierce foes.",
        altura: 0.8,
        peso: 24.5,
        categoria: "Lightning",
        habilidade: ["Volt Absorb"],
        fraquezas: [terra]
    }, {
        id: 136,
        nome: "Flareon",
        tipo: [fogo],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/136.png",
        descricao: "Once it has stored up enough heat, this Pokémon’s body temperature can reach up to 1,700 degrees Fahrenheit.",
        altura: 0.9,
        peso: 25.0,
        categoria: "Flame",
        habilidade: ["Flash Fire"],
        fraquezas: [agua, terra, pedra]
    }, {
        id: 137,
        nome: "Porygon",
        tipo: [normal],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/137.png",
        descricao: "State-of-the-art technology was used to create Porygon. It was the first artificial Pokémon to be created via computer programming.",
        altura: 0.8,
        peso: 36.5,
        categoria: "Virtual",
        habilidade: ["Trace", "Download"],
        fraquezas: [lutador]
    }, {
        id: 138,
        nome: "Omanyte",
        tipo: [pedra, agua],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/138.png",
        descricao: "Because some Omanyte manage to escape after being restored or are released into the wild by people, this species is becoming a problem.",
        altura: 0.4,
        peso: 7.5,
        categoria: "Spiral",
        habilidade: ["Shell Armor", "Swift Swim"],
        fraquezas: [grama, eletrico, lutador, terra]
    }, {
        id: 139,
        nome: "Omastar",
        tipo: [pedra, agua],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/139.png",
        descricao: "Weighed down by a large and heavy shell, Omastar couldn't move very fast. Some say it went extinct because it was unable to catch food.",
        altura: 1.0,
        peso: 35.0,
        categoria: "Spiral",
        habilidade: ["Shell Armor", "Swift Swim"],
        fraquezas: [grama, eletrico, lutador, terra]
    }, {
        id: 140,
        nome: "Kabuto",
        tipo: [pedra, agua],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/140.png",
        descricao: "This species is almost entirely extinct. Kabuto molt every three days, making their shells harder and harder.",
        altura: 0.5,
        peso: 11.5,
        categoria: "Shellfish",
        habilidade: ["Battle Armor", "Swift Swim"],
        fraquezas: [grama, eletrico, lutador, terra]
    }, {
        id: 141,
        nome: "Kabutops",
        tipo: [pedra, agua],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/141.png",
        descricao: "Kabutops slices its prey apart and sucks out the fluids. The discarded body parts become food for other Pokémon.",
        altura: 1.3,
        peso: 40.5,
        categoria: "Shellfish",
        habilidade: ["Battle Armor", "Swift Swim"],
        fraquezas: [grama, eletrico, lutador, terra]
    }, {
        id: 142,
        nome: "Aerodactyl",
        tipo: [pedra, voador],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/142.png",
        descricao: "This is a ferocious Pokémon from ancient times. Apparently even modern technology is incapable of producing a perfectly restored specimen.",
        altura: 1.8,
        peso: 59.0,
        categoria: "Fossil",
        habilidade: ["Rock Head", "Pressure"],
        fraquezas: [aco, agua, eletrico, gelo, pedra]
    }, {
        id: 143,
        nome: "Snorlax",
        tipo: [normal],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png",
        descricao: "It is not satisfied unless it eats over 880 pounds of food every day. When it is done eating, it goes promptly to sleep.",
        altura: 2.1,
        peso: 460.0,
        categoria: "Sleeping",
        habilidade: ["Thick Fat", "Immunity"],
        fraquezas: [lutador]
    }, {
        id: 144,
        nome: "Articuno",
        tipo: [gelo, voador],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/144.png",
        descricao: "It's said that this Pokémon's beautiful blue wings are made of ice. Articuno flies over snowy mountains, its long tail fluttering along behind it.",
        altura: 1.7,
        peso: 55.4,
        categoria: "Freeze",
        habilidade: ["Pressure"],
        fraquezas: [aco, fogo, eletrico, pedra]
    }, {
        id: 145,
        nome: "Zapdos",
        tipo: [eletrico, voador],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/145.png",
        descricao: "This Pokémon has complete control over electricity. There are tales of Zapdos nesting in the dark depths of pitch-black thunderclouds.",
        altura: 1.6,
        peso: 52.6,
        categoria: "Electric",
        habilidade: ["Pressure"],
        fraquezas: [gelo, pedra]
    }, {
        id: 146,
        nome: "Moltres",
        tipo: [fogo, voador],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/146.png",
        descricao: "It's one of the legendary bird Pokémon. When Moltres flaps its flaming wings, they glimmer with a dazzling red glow.",
        altura: 2.0,
        peso: 60.0,
        categoria: "Flame",
        habilidade: ["Pressure"],
        fraquezas: [agua, eletrico, pedra]
    }, {
        id: 147,
        nome: "Dratini",
        tipo: [dragao],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/147.png",
        descricao: "Dratini dwells near bodies of rapidly flowing water, such as the plunge pools of waterfalls. As it grows, Dratini will shed its skin many times.",
        altura: 1.8,
        peso: 3.3,
        categoria: "Dragon",
        habilidade: ["Shed Skin"],
        fraquezas: [fada, gelo, dragao]
    }, {
        id: 148,
        nome: "Dragonair",
        tipo: [dragao],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/148.png",
        descricao: "This Pokémon lives in pristine oceans and lakes. It can control the weather, and it uses this power to fly into the sky, riding on the wind.",
        altura: 4.0,
        peso: 16.5,
        categoria: "Dragon",
        habilidade: ["Shed Skin"],
        fraquezas: [fada, gelo, dragao]
    }, {
        id: 149,
        nome: "Dragonite",
        tipo: [dragao, voador],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png",
        descricao: "It's a kindhearted Pokémon. If it spots a drowning person or Pokémon, Dragonite simply must help them.",
        altura: 2.2,
        peso: 210.0,
        categoria: "Dragon",
        habilidade: ["Inner Focus"],
        fraquezas: [fada, dragao, gelo, pedra]
    }, {
        id: 150,
        nome: "Mewtwo",
        tipo: [psicico],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png",
        descricao: "Its DNA is almost the same as Mew's. However, its size and disposition are vastly different.",
        altura: 2.0,
        peso: 122.0,
        categoria: "Genetic",
        habilidade: ["Pressure"],
        fraquezas: [fantasma, escuridao, inseto]
    }, {
        id: 151,
        nome: "Mew",
        tipo: [psicico],
        imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png",
        descricao: "When viewed through a microscope, this Pokémon's short, fine, delicate hair can be seen.",
        altura: 0.4,
        peso: 4.0,
        categoria: "New Species",
        habilidade: ["Syncronize"],
        fraquezas: [fantasma, escuridao, inseto]
    }
]

app.get("/", (req, res) => {
    res.render("index.ejs", { pokedex });
});

app.get("/detalhes/:id", (req, res) => {
    let pokemon = []
    pokedex.filter((element) => {
        if (element.id == req.params.id) {
            pokemon.push(element)
        }
    })
    res.render("detalhes.ejs", { pokemon });
})

app.get("/cadastro", (req, res) => {
    res.render("cadastro.ejs")
})
const port = 3030;

app.listen(port, () => { console.log(`servidor rodando em http://localhost:${port}`) });