
let rand;
let p1,p2;
p1=p2=0
function player1(){

     document.getElementById("turn").innerHTML = "Player-1 Turn"
    
    rand = Math.floor((Math.random()*6)+1)
    // console.log(rand)
   var h= document.createElement("p")
    var val = document.createTextNode("Player 1 rolled : "+rand)
    h.append(val)

    document.body.appendChild(h)
    p1+=rand;
   
    if(p1>=50 || p2>=50){
        //win message
       res()


    }

}

function res()
{
    var c = document.createElement("h4")
    var cval = document.createTextNode("Player 1 Total Score :"+p1+"\n Player 2 Total score : "+p2)

    c.append(cval)
    document.body.appendChild(c)
}

function player2()
{
    document.getElementById("turn").innerHTML = "Player-2 Turn"
    
    rand = Math.floor((Math.random()*6)+1)
    // console.log(rand)
   var h= document.createElement("p")
    var val = document.createTextNode("Player 2 rolled : "+rand)
    h.append(val)

    document.body.appendChild(h)
    p2+=rand;
   
    if(p1>=50 || p2>=50){
        //win message
       res()


    }
}