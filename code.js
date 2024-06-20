function playCraps(){

    //this is a 1 line comment 
    /*this is the function to play craps*/

    console.log("playCraps() started");
    //Rolls the first dice//
    var die1 = Math.floor(Math.random() * 6) +1;
    console.log(die1);
    document.getElementById("die1Res").innerHTML = "die1 result = " + die1;
    //Rolls the second dice//
    var die2 = Math.floor(Math.random() * 6) +1;
    console.log(die2);
    document.getElementById("die2Res").innerHTML = "die2 result = " + die2;

    //Adds die 1 and 2//
    var sum = die1 + die2;
    console.log(sum);
    document.getElementById("sumRes").innerHTML = "sum result = " + sum;
    //looks for a lose condition (7 or 11)//
    if(sum == 7 || sum == 11 ){
    console.log("loss");
    document.getElementById("gameRes").innerHTML = "Beat it loser! You ain't worthy of being with Mr. GREEN";
    //looks for a win condition//    
    } else if(die1 == die2 && die1 % 2 == 0){
        console.log("win");
        document.getElementById("gameRes").innerHTML = "You Won! Play again if you're feeling antsy!";
    }else{
    //doesnt see a win or loss//
    console.log("tie");
    document.getElementById("gameRes").innerHTML = "Come on, win or lose to impress me!";

    }
}


//For Assign 7, starts moving the image, enables stop button, disables start button
function startFun(){
    console.log("startFun() started");
    document.getElementById("startbutton").disabled = true; 
    document.getElementById("stopbutton").disabled = false;
    document.getElementById("myMarquee").start();
}

//has the image stop moving, enables start button, disables stop button
function stopFun(){
    console.log("stopFun() started");
    document.getElementById("stopbutton").disabled = true;
    document.getElementById("startbutton").disabled = false;   
    document.getElementById("myMarquee").stop();  
}