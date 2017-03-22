/**
 * Created by lenovo on 2016/12/15.
 */
var time=null;
var index=0;

function innit(){
    time=setInterval('play()',3000);
}
function play(){
    index++;
    if(index>5){
        index=1;
    }
    showimage();
}
function  point(i){
    index=i;
    stop1();
    showimage();

}

function stop1(){
    clearInterval(time);
}

function showimage(){
    for(var i=1;i<6;i++){
        var imges=document.getElementById("tua"+i);
        var numbe=document.getElementById("numa"+i);
        if(index==i){
            imges.setAttribute('class','show');
            numbe.setAttribute('class','show');
        }else{
            imges.setAttribute('class','');
            numbe.setAttribute('class','');
        }

    }
}

