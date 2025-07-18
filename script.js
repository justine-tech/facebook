let mnex = document.getElementById("mnex");
let fbmp3 = document.getElementById("fbmp3");
let fbmp31 = document.getElementById("fbmp31");
let fbmp32 = document.getElementById("fbmp32");
let fbmp33 = document.getElementById("fbmp33");
let fbmp34 = document.getElementById("fbmp34");
let fbmp35 = document.getElementById("fbmp35");
let fbmp36 = document.getElementById("fbmp36");
let fbmp37 = document.getElementById("fbmp37");
let fbmp38 = document.getElementById("fbmp38");
                
    mnex.onclick = function(){
        fbmp3.currentTime = 1.6;
        fbmp3.play();
        
    }

    fbmp3.addEventListener('timeupdate', ()=>{
        if(fbmp3.currentTime >= 4.7){
         fbmp3.pause();
        }
    });
let mbac1 = document.getElementById("mbac1");
mbac1.onclick = function(){
    fbmp3.pause();
}








let mnex1 = document.getElementById("mnex1");
mnex1.onclick = function(){
    fbmp31.currentTime = 4.7;
    fbmp31.play();
    fbmp3.pause();
}
fbmp31.addEventListener('timeupdate', ()=>{
        if(fbmp31.currentTime >= 7.5){
         fbmp31.pause();
        }
    });
let mbac2 = document.getElementById("mbac2");
mbac2.onclick = function(){
    fbmp3.currentTime = 1.6;
    fbmp3.play();
    fbmp31.pause();

}










let mnex2 = document.getElementById("mnex2");
mnex2.onclick = function(){
    fbmp32.currentTime = 7.6;
    fbmp32.play();
    fbmp31.pause();
}
fbmp32.addEventListener('timeupdate', ()=>{
        if(fbmp32.currentTime >= 10.4){
         fbmp32.pause();
        }
    });
let mbac3 = document.getElementById("mbac3");
mbac3.onclick = function(){
    fbmp31.currentTime = 4.7;
    fbmp31.play();
    fbmp32.pause();

}











let mnex3 = document.getElementById("mnex3");

mnex3.onclick = function(){
    fbmp33.currentTime = 10.5;
    fbmp33.play();
    fbmp32.pause();
}
fbmp33.addEventListener('timeupdate', ()=>{
        if(fbmp33.currentTime >= 13.2){
         fbmp33.pause();
        }
    });
let mbac4 = document.getElementById("mbac4");
mbac4.onclick = function(){
    fbmp32.currentTime = 7.6;
    fbmp32.play();
    fbmp33.pause();

}












let mnex4 = document.getElementById("mnex4");

mnex4.onclick = function(){
    fbmp34.currentTime = 13.2;
    fbmp34.play();
    fbmp33.pause();
}
fbmp34.addEventListener('timeupdate', ()=>{
        if(fbmp34.currentTime >= 15.9){
         fbmp34.pause();
        }
    });

let mbac5 = document.getElementById("mbac5");
mbac5.onclick = function(){
    fbmp33.currentTime = 10.5;
    fbmp33.play();
    fbmp34.pause();

}







let mnex5 = document.getElementById("mnex5");

mnex5.onclick = function(){
    fbmp35.currentTime = 16;
    fbmp35.play();
    fbmp34.pause();
}
fbmp35.addEventListener('timeupdate', ()=>{
        if(fbmp35.currentTime >= 18.8){
         fbmp35.pause();
        }
    });
let mbac6 = document.getElementById("mbac6");
mbac6.onclick = function(){
    fbmp34.currentTime = 13.2;
    fbmp34.play();
    fbmp35.pause();

}







let mnex6 = document.getElementById("mnex6");

mnex6.onclick = function(){
    fbmp36.currentTime = 18.9;
    fbmp36.play();
    fbmp35.pause();
}
fbmp36.addEventListener('timeupdate', ()=>{
        if(fbmp36.currentTime >= 21.6){
         fbmp36.pause();
        }
    });

let mbac7 = document.getElementById("mbac7");
mbac7.onclick = function(){
    fbmp35.currentTime = 16;
    fbmp35.play();
    fbmp36.pause();

}








let mnex7 = document.getElementById("mnex7");

mnex7.onclick = function(){
    fbmp37.currentTime = 21.7;
    fbmp37.play();
    fbmp36.pause();
}
fbmp37.addEventListener('timeupdate', ()=>{
        if(fbmp37.currentTime >= 24.4){
         fbmp37.pause();
        }
    });

let mbac8 = document.getElementById("mbac8");
mbac8.onclick = function(){
    fbmp36.currentTime = 18.9;
    fbmp36.play();
    fbmp37.pause();

}









let mnex8 = document.getElementById("mnex8");

mnex8.onclick = function(){
    fbmp38.currentTime = 24.5;
    fbmp38.play();
    fbmp37.pause();
}
fbmp38.addEventListener('timeupdate', ()=>{
        if(fbmp38.currentTime >= 32.5){
         fbmp38.pause();
        }
    });

let mbac9 = document.getElementById("mbac9");
mbac9.onclick = function(){
    fbmp37.currentTime = 21.7;
    fbmp37.play();
    fbmp38.pause();

}



let closall = document.getElementById("closall");

closall.onclick = function(){
    fbmp38.pause();
}
