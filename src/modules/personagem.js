export class Personagem {
    #level

    constructor(nome, tipo){
        this.nome = nome
        this.#level = 1
        this.tipo = tipo
        this.vida = 100   //this.calcLife(level)
        this.mana = this.haveMana()
    }

    aumentarLevel(){
        this.#level +=1
    }

    diminuirLevel(){
        this.#level -=1
    }

    get level(){
        return this.#level
    }
    
    calcLife(level){
        if(this.constructor.tipo == 'Arqueiro')
            return (level * 7);

        else if(this.constructor.tipo == 'Mago')
            return (level * 4)
        
        else if(this.constructor.tipo == 'Guerreiro')
            return (level * 10)
        
        else if(this.constructor.tipo == 'ArqueiroMago')
            return (level * 6)
        
    }

    haveMana(){
        if(this.constructor.tipo == 'Mago' || this.constructor.tipo == 'ArqueiroMago')
            return Math.floor(this.vida / 2.5)
        else 
            return 0
    }

    obterInsignia() {
        if (this.#level >= 5){
            return `${this.constructor.tipo} Implacável`
        }
        return `${this.constructor.tipo} iniciante`
    }

    static verificarVencedor(personagem1, personagem2){
        if(personagem1.level === personagem2.level){
            return 'Meu deus, um empate!!!!'
        }
        if(personagem1.level > personagem2.level){
            return `O ${personagem1.obterInsignia()} ${personagem1.nome} Venceu!!`
        }
        return `O ${personagem2.obterInsignia()} ${personagem2.nome} Venceu!!!`
    }
}
