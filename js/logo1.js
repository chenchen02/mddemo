/**
 * Created by lenovo on 2016/12/13.
 */
$(document).ready(function(){

        $(".yan1").hide();
    $(".yan2").hide();


});


function  input(){
    var x=document.getElementById("input1");
    if(x.value=="")
    {$(".yan1").show();}

    else if(isNaN(x.value))
    { document.getElementById("yan1").innerHTML="必须是数字";}

    else{$(".yan1").hide() }

}

function  test(){
    var x=document.getElementById("input2");
    if(x.value=="")
    {$(".yan2").show();}
    else{
        $(".yan2").hide();
    }

}