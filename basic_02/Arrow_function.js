const object1 = {
    name1 : "sumit",
    age : 23,

    wlecome: function(){
        console.log(`${this.name1},welcomoe to site`)
    }
}

object1.wlecome()
object1.name1 = "kapil"
object1.wlecome()