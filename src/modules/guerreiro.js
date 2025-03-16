import { Personagem } from "./personagem.js";

export class Guerreiro extends Personagem {
    
    static tipo = 'Guerreiro'
    static descricao = 'Um combatente lendário e robusto!'

    constructor(nome, forca){
        super(nome)
        this.forca = forca
    }

    obterInsignia(){
        if(this.level >= 7 && this.forca>= 5)
            return `Guerreiro Furioso`
        else 
            return super.obterInsignia()
    }

}