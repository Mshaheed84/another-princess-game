function rollDie(max) {
    return Math.floor(Math.random() * max)
}
function makeSpace(){
    console.log("\n\n")
}
const status = ['Powered Up', 'Big', 'Small', 'Dead' ]
class Player {
 
    constructor(){
        var name = ["Mario", "Luigi"]
        this.name = name[rollDie(2)]
        this.coins = 0
        this.status = 0
        this.hasStar = false
    }
    // constructor(name){
    //     if(name === ('Mario'||'Luigi')){
    //         this.name = name
    //     }else{
    //         this.name = 'Mario'
    //     }      
    //     this.coins = 0
    //     this.status = 0
    //     this.hasStar = false
    // }

    print = function(){
        if(this.hasStar){
            console.log("Name: "+this.name, "\nStatus: "+ this.status, "\nCoins: "+this.coins, "\nHas a star!");
        }else{
            console.log("Name: "+this.name, "\nStatus: "+ status[this.status], "\nCoins: "+this.coins);
        }
    };
    gotHit = function(){
        if(status[this.status] != "Dead"){
            this.status++        
        }
    }
    gotPowerup = function(){
        if(status[this.status] != 'Powered Up'){
            this.status--
        }
    }
    addCoin = function(){
        this.coins++;
    }
    move = function(){
        var rv = rollDie(3)
        if(rv === 0){
            this.gotHit()
        }if(rv === 1){
            this.gotPowerup()
        }if(rv === 2){
            this.addCoin()
        }
        this.print()
    }
    isDead = function(){
        var rv = false
        if(status[this.status]==='Dead'){
            rv = true
        }
        return rv
    }

}
var p1 = new Player()
var intervalID = setInterval(function(){
    p1.move();
    makeSpace();
    if(p1.isDead()){
        clearInterval(intervalID)
        console.log("You died!!")
    }
}, 500);
var count = 0

