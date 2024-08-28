let hero1 = ["Thor","Ironman","hulk"];

const hero2 = {
    CarptainAmerica:"Shield",
    CaptainMarvel:"Flash",

    print : function(){
        console.log(`all superhero power is ${this.CarptainAmerica}`);
    }
}

Object.prototype.fire = function(){
    console.log("all Heros have fire power")
}

hero1.fire();
hero2.fire();