import { Personagem } from "./personagem.js"
import { Arqueiro } from "./arqueiro.js"
import { Mago } from "./mago.js"

export class ArqueiroMago extends Personagem {
    
    static tipo = 'ArqueiroMago'
    static descricao = 'Capaz de disparar flechas e lanças mágicas'
    ladoArqueiro
    ladoMago

    
    constructor(nome, destreza, inteligencia, levelMagico, elementoMagico){
        super(nome)
        this.ladoArqueiro = new Arqueiro(nome, destreza)
        this.ladoMago = new Mago(nome, elementoMagico, levelMagico, inteligencia)
    }

        obterInsignia() {
            return `${this.ladoArqueiro.obterInsignia()} e ${this.ladoMago.obterInsignia()}`
        }
}
