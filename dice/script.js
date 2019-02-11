var rand1,rand2
 var p1,p2;
p1=0
p2=0

function player1(){

     document.getElementById("turn").innerHTML = "Player-1 Turn"
    
    rand1 = Math.floor((Math.random()*6)+1)
    rand2 = Math.floor((Math.random()*6)+1)
    document.getElementById("p1r").innerHTML="Player 1 rolled "+rand1+" and "+rand2 
    
    Image("d1",rand1)
    Image("d2",rand2)
    
     console.log()
    if(rand1 == rand2)
    {
        if(rand1==2 || rand1==1 || rand1==4 || rand1==5)
        {
            p1+=5
     document.getElementById("p1d").innerHTML="Player 1 Score"+5           
         
        }
        else if(rand1==3)
        {
            p1=0
            document.getElementById("p1d").innerHTML="Player 1 Score "+0            
        }
        else{
            p1+=25
            document.getElementById("p1d").innerHTML="Player 1 Score "+25
            
        }
    }
    else{
        document.getElementById("p1d").innerHTML="Player 1 Score "+0
    }
    
    document.getElementById("p1t").innerHTML="Player 1 Total Score : "+p1
   
    console.log(p1)
    if(p1>=10 || p2>=10){
        //win message
       res()


    }

}

function res()
{   
    if(p1>=10)
    {
    //     var c = document.createElement("h1")
    // var cval = document.createTextNode("Player 1 Won:")
    //     c.append(cval)
    //     document.body.appendChild(c)

    alert("Player 1 won")
    }
    if(p2>=10)
    {
    //     var c = document.createElement("h1")
    // var cval = document.createTextNode("Player 2 Won:")
    //     c.append(cval)
    //     document.body.appendChild(c)
    alert("Player 2 won")
    }


}

function player2()
{
    document.getElementById("turn").innerHTML = "Player-2 Turn"
    
    rand1 = Math.floor((Math.random()*6)+1)
    rand2 = Math.floor((Math.random()*6)+1)
    document.getElementById("p2r").innerHTML="Player 2 rolled "+rand1+" and "+rand2 
    
    Image("d1",rand1)
    Image("d2",rand2)
    
     console.log()
    if(rand1 == rand2)
    {
        if(rand1==2 || rand1==1 || rand1==4 || rand1==5)
        {
            p2+=5
     document.getElementById("p2d").innerHTML="Player 2 Score"+5           
         
        }
        else if(rand1==3)
        {
            p2=0
            document.getElementById("p2d").innerHTML="Player 2 Score "+0            
        }
        else{
            p2+=25
            document.getElementById("p2d").innerHTML="Player 2 Score "+25
            
        }
    }
    else{
        document.getElementById("p2d").innerHTML="Player 2 Score "+0
    }
    
    document.getElementById("p2t").innerHTML="Player 2 Total Score : "+p1
   

    if(p1>=10 || p2>=10){
        //win message
       res()
    }


}


function Image(str,val1)
{  
    switch(val1){
        case 1:
        document.getElementById(str).src="dice1.png"
        break;
        case 2:
        document.getElementById(str).src="dice2.png"
        break;
        case 3:
        document.getElementById(str).src="dice3.png"
        break;
        case 4:
        document.getElementById(str).src="dice4.png"
        break
        case 5:
        document.getElementById(str).src="dice5.png"
        break
        case 6:
        document.getElementById(str).src="dice6.png"
        break
    }
}