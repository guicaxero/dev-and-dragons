import { Personagem } from "./personagem.js"

export class Mago extends Personagem {
    static tipo = 'Mago'
    static descricao = 'Além de feitiços poderosos, exibe sua maestria com poções'

    constructor(nome, elementoMagico, levelMagico, inteligencia){
        super(nome)
        this.elementoMagico = elementoMagico
        this.levelMagico = levelMagico
        this.inteligencia = inteligencia
    }

    obterInsignia(){
        if(this.levelMagico >= 5 && this.inteligencia>= 5)
            return `Mestre do ${this.elementoMagico}`
        else 
            return super.obterInsignia()
    }

}
