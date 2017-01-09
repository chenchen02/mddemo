
var timeb=null;
var indexb=0;

function innit2(){
    timeb=setInterval('playb()',3000);
}
function playb(){
    indexb++;
    if(indexb>2){
        indexb=1;
    }
    showimageb();
}
function  pointb(a){
    indexb=a;
    stop2();
    showimageb();

}

function stop2(){
    clearInterval(timeb);
}

function showimageb(){
    for(var a=1;a<3;a++){
        var imgesb=document.getElementById("tub"+a);
        var numbeb=document.getElementById("numb"+a);
        if(indexb==a){
            imgesb.setAttribute('class','show');
            numbeb.setAttribute('class','show');
        }else{
            imgesb.setAttribute('class','');
            numbeb.setAttribute('class','');
        }

    }
}
