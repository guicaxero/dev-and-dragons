import { Personagem } from "./modules/personagem.js"    
import { PersonagemView } from "./components/personagem-view.js"
import { ArqueiroMago } from "./modules/arqueiroMago.js"
import { Arqueiro } from "./modules/arqueiro.js"
import { Mago } from "./modules/mago.js"
import { Guerreiro } from "./modules/guerreiro.js"

const guiChar = new Mago('gui', 'Gelo', 6, 8)
const jobChar = new Guerreiro('job', 4)
const toloChar = new Arqueiro('Topos', 2)
const tugChar = new ArqueiroMago('Tug', 7, 8, 6, 'Fogo')

const personagens = [guiChar, jobChar, toloChar, tugChar]

new PersonagemView(personagens).render()
console.log(Personagem.verificarVencedor(guiChar, jobChar))