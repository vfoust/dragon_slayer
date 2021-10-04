var wrapperEle = document.body.querySelector(".wrapper")

var total_damage=0
wrapperEle.innerHTML = `Dragon Damage: ${total_damage}`
function attack(type,damage){
    if(type==="fire"){
        damage=damage-1
        total_damage = (total_damage + damage)
        wrapperEle.innerHTML = `Dragon Damage: ${total_damage}`
    }
    if(type==="ice"){
        damage=damage+1
        total_damage = (total_damage + damage)
        wrapperEle.innerHTML = `Dragon Damage: ${total_damage}`
    }
    if(type==="poison"){
        total_damage = (total_damage + damage)
        wrapperEle.innerHTML = `Dragon Damage: ${total_damage}`
    }
    if(total_damage>9) {
        var ele = document.createElement("div");
        ele.innerHTML="You have slayed the might mighty dragon"
        wrapperEle.appendChild(ele);
        die;
    }
}



document.body.querySelector(".fire").addEventListener("click", function (){
    var type="fire"
    var damage=3
    attack(type,damage)
})
document.body.querySelector(".ice").addEventListener("click", function (){
    var type="ice"
    var damage=1
    attack(type,damage)
})
document.body.querySelector(".poison").addEventListener("click", function (){
    var type="poison"
    var damage=4
    attack(type,damage)
})


//var ele = document.createElement("div");
//wrapperEle.appendChild(ele);