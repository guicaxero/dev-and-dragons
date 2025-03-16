import { Personagem } from "./personagem.js"

export class Arqueiro extends Personagem {
    static tipo = 'Arqueiro'
    static descricao = 'Uma precisão invejável, além da sobrevivência aguçada'

    constructor(nome, destreza){
        super(nome,)
        this.destreza = destreza
    }

    obterInsignia(){
        if(this.destreza >= 5)
            return `Dominador de flechas`
        else 
            return super.obterInsignia()
    }
}
