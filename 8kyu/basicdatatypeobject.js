//Give you a function animal, accept 1 parameter:obj like this:
//{name:"dog",legs:4,color:"white"}
//and return a string like this:

//"This white dog has 4 legs."

//soluctions
function animal(obj){
  
    let {color,name,legs}= obj;
    return `This ${color} ${name} has ${legs} legs.`
    }

    //soluction2
    function animal(obj){
        let obj1 = {name:"dog",legs:4,color:"white"};
        let obj2 = {name:"cock",legs:2,color:"red"};
        let obj3 = {name:"rabbit",legs:4,color:"gray"};
        return "This " + obj.color + " " + obj.name + " has " + obj.legs + " legs.";
      }