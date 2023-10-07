window.onload = screen;
window.onresize = screen;

function screen(){
    var w = window.innerWidth;
    let s;
    if(w>1200){
        s="- extra large screen";
    }
    if(w<=1200 && w>992){
     s="- large screen (desktop)"
    }
    if(w<=992 && w>768){
        s="- medium screen (laptop)";
    }if(w<=768 && w>576){
        s="- small screen (tablet)";
    }if(w<=576){
        s="- extra small screen (phone)";
    }
    document.getElementById("size").innerHTML="Width = "+w+" px "+s;
}