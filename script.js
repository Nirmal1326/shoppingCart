// Count
var count=1;
$("#add").click(function(){
    count++;
    $(".count").text(count);
})
$("#less").click(function(){
    count--;
    if(count<0){
        alert("Limit exeeding");
        count=0;
        }
    else{
    $(".count").text(count);
    }
})
$("#reset").click(function(){
    count=0;
    $(".count").text(count);
})

// count2
var count2=1;
$("#add2").click(function(){
    count2++;
    $(".count2").text(count2);
})
$("#less2").click(function(){
    count2--;
    if(count2<0){
        alert("Limit exeeding");
        count2=0;
        }
    else{
    $(".count2").text(count2);
    }
})
$("#reset2").click(function(){
    count2=0;
    $(".count2").text(count2);
})

// count3
var count3=1;
$("#add3").click(function(){
    count3++;
    $(".count3").text(count3);
})
$("#less3").click(function(){
    count3--;
    if(count3<0){
        alert("Limit exeeding");
        count3=0;
        }
    else{
    $(".count3").text(count3);
    }   
})
$("#reset3").click(function(){
        count3=0;
        $(".count3").text(count3);
    })

// Colour dropdown
$("#Red").click(function(){
    $("#colour").text("red"); 
})
$("#Blue").click(function(){
    $("#colour").text("blue"); 
})
$("#Pink").click(function(){
    $("#colour").text("pink"); 
})
$("#Black").click(function(){
    $("#colour").text("black"); 
})

//colour dropdown 2
$("#Red2").click(function(){
    $("#colour2").text("red"); 
})
$("#Blue2").click(function(){
    $("#colour2").text("blue"); 
})
$("#Pink2").click(function(){
    $("#colour2").text("pink"); 
})
$("#Black2").click(function(){
    $("#colour2").text("black"); 
})

//size drop down
$("#s").click(function(){
    $("#size").text("s"); 
})
$("#m").click(function(){
    $("#size").text("m"); 
})
$("#l").click(function(){
    $("#size").text("l"); 
})
$("#xl").click(function(){
    $("#size").text("xl"); 
})