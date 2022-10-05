document.getElementById('alertbc1').style.display = 'block';
document.getElementById('alertbc1').style.minWidth = window.innerWidth+'px';
document.getElementById('alertbc1').style.minHeight = window.innerHeight+'px';
function alert1(head,msg){
document.getElementById('alertbc').style.backgroundColor=themecolor;
document.getElementById('alertbox').style.backgroundColor=themecolor;
document.getElementById('alertbox').style.color=themecoloro;
document.getElementById('alertbt').style.color=themecoloro;
document.getElementById('alertbt').style.backgroundColor=themecolor;
    document.getElementById('alertbc').style.display = 'block';
    document.getElementById('alertbox').style.display = 'block';
    document.getElementById('alertbc').style.minWidth = window.innerWidth+'px';
    document.getElementById('alertbc').style.minHeight = window.innerHeight+'px';
    document.getElementById('alertbox').style.minWidth = window.innerWidth/4+'px';
    document.getElementById('alertbox').style.minHeight = window.innerHeight/2+'px';
    var alertboxX = window.innerWidth/2 - document.getElementById('alertbox').clientWidth/2;
    document.getElementById('alertbox').style.left = alertboxX+'px';
    var alertboxY = window.innerHeight/2 - document.getElementById('alertbox').clientHeight/2;
    document.getElementById('alertbox').style.top = alertboxY+'px';
    document.getElementById('alertbt').style.bottom = alertboxY+10+'px';
    document.getElementById('alertbt').style.right = alertboxX+10+'px';
    document.getElementById('alerthead').innerHTML = head;
    document.getElementById('alertp').innerHTML = msg;
}
function closealert(){
    document.getElementById('alertbc').style.display = 'none';
    document.getElementById('alertbox').style.display = 'none';
}