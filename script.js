class Traveler {
    
    constructor (name, food = 1, isHealthy = true){
        this._name = name;
        this._food = food;
        this._isHealthy = isHealthy;
    };
    
    
    get nome(){
        return this._nome;
    };
    
    
    set nome(novoNome){
        this._name = novoNome;
    };


    get food(){
        return this._food;
    };


    set food(number){
        this._food = number;
    };


    get isHealthy(){
        return this._isHealthy;
    }

    set isHealthy(boolean){
        this._isHealthy = boolean;
    }


    hunt(){
        this.food += 2;
    };


    eat () {

        if (this.food > 0){
            this.food -= 1;
            
        }else {
            this.isHealthy = false;
        };
    };

};

class Wagon {

    constructor (capacity){
        this.passangers = [];
        this.capacity = capacity;
    };


    getAvailableSeatCount(){
        let passangers = this.passangers.length;
        return this.capacity - this.passangers.length;
    }


    join(Traveler){
        if(this.capacity - this.passangers.length > 0){
            this.passangers.push(Traveler);
        }
    };


    shouldQuarantine(){
        let quarantine = false;

        for (let i = 0; i < this.passangers.length; i++){
            let passangerIndex = this.passangers[i];           
            if(!passangerIndex.isHealthy){
                quarantine = true;
            }
        };

        return quarantine;
    };
    

    totalFood(){
        let food = 0;
        
        for (let i = 0; i < this.passangers.length; i++){
            let passangerIndex = this.passangers[i];
            food += passangerIndex.food;
        }
        
        return food;
    };
};

// Criar uma carroça que comporta 2 pessoas
let wagon = new Wagon(2);
// Criar três viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');

console.log(`${wagon.getAvailableSeatCount()} should be 2`);

wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);

wagon.join(juan);
wagon.join(maude); // Não tem espaço para ela!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);

henrietta.hunt(); // pega mais comida
juan.eat();
juan.eat(); // juan agora está com fome (doente)

console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);