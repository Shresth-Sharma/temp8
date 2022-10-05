var stophome,stopmenu,stopmenu1,stopmenu2,stopmenu3,stopsocial,stopsocial1,stopcontact,stopcontact1;
var d=1;
function repeat(){

    if(d===0){
        document.getElementsByTagName('body')[0].style.backgroundColor = themecolor;
        document.getElementById('home').style.backgroundColor = themecolor;
        document.getElementById('homebutton').style.backgroundColor = themecolor;
        document.getElementById('menu').style.backgroundColor = themecolor;
        document.getElementById('menubutton').style.backgroundColor = themecolor;
        document.getElementById('social').style.backgroundColor = themecolor;
        document.getElementById('socialbutton').style.backgroundColor = themecolor;
        document.getElementById('contact').style.backgroundColor = themecolor;
        document.getElementById('contactbutton').style.backgroundColor = themecolor;
        document.getElementById('up').style.backgroundColor = themecolor;
        document.getElementById('upbutton').style.backgroundColor = themecolor;
        document.getElementById('in').style.backgroundColor = themecolor;
        document.getElementById('inbutton').style.backgroundColor = themecolor;
        document.getElementById('feedback').style.backgroundColor = themecolor;
        document.getElementById('feedbackbutton').style.backgroundColor = themecolor;
        document.getElementsByClassName('dw')[0].style.backgroundColor = themecolor;
        document.getElementsByClassName('dw')[1].style.backgroundColor = themecolor;
        document.getElementsByClassName('dw')[2].style.backgroundColor = themecolor;
        document.getElementsByClassName('dw')[3].style.backgroundColor = themecolor;
        document.getElementsByClassName('dw')[4].style.backgroundColor = themecolor;
    d=1;
}
}
setInterval(repeat,50);
function mouseonhome(){
    stophome=setInterval(mouseonhome1,50);
}
function mouseleavehome(){
    clearInterval(stophome);
    document.getElementById('homebutton').style.backgroundColor = themecolor;
}
function mouseonup(){
    stopup=setInterval(mouseonup1,50);
}
function mouseleaveup(){
    clearInterval(stopup);
    document.getElementById('upbutton').style.backgroundColor = themecolor;
}
function mouseonin(){
    stopin=setInterval(mouseonin1,50);
}
function mouseleavein(){
    clearInterval(stopin);
    document.getElementById('inbutton').style.backgroundColor = themecolor;
}
function mouseonfeedback(){
    stopfeedback=setInterval(mouseonfeedback1,50);
}
function mouseleavefeedback(){
    clearInterval(stopfeedback);
    document.getElementById('feedbackbutton').style.backgroundColor = themecolor;
}
function mouseonmenu(){
    stopmenu=setInterval(mouseonmenu1,50);
}
function mouseleavemenu(){
    clearInterval(stopmenu);
    document.getElementById('menubutton').style.backgroundColor = themecolor;
}
function mouseonsocial(){
    stopsocial=setInterval(mouseonsocial1,50);
}
function mouseleavesocial(){
    clearInterval(stopsocial);
    document.getElementById('socialbutton').style.backgroundColor = themecolor;
}
function mouseonsocial_1(){
    stopsocial1=setInterval(mouseonsocial1_1,50);
    stopsocial=setInterval(mouseonsocial1,50);
}
function mouseleavesocial_1(){
    clearInterval(stopsocial1);
    document.getElementsByClassName('dw')[3].style.backgroundColor = themecolor;
    clearInterval(stopsocial);
    document.getElementById('socialbutton').style.backgroundColor = themecolor;
}
function mouseoncontact(){
    stopcontact=setInterval(mouseoncontact1,50);
}
function mouseleavecontact(){
    clearInterval(stopcontact);
    document.getElementById('contactbutton').style.backgroundColor = themecolor;
}
function mouseoncontact_1(){
    stopcontact1=setInterval(mouseoncontact1_1,50);
    stopcontact=setInterval(mouseoncontact1,50);
}
function mouseleavecontact_1(){
    clearInterval(stopcontact1);
    document.getElementsByClassName('dw')[4].style.backgroundColor = themecolor;
    clearInterval(stopcontact);
    document.getElementById('contactbutton').style.backgroundColor = themecolor;
}
function mouseonmenu_1(){
    stopmenu1=setInterval(mouseonmenu1_1,50);
    stopmenu=setInterval(mouseonmenu1,50);
}
function mouseleavemenu_1(){
    clearInterval(stopmenu1);
    clearInterval(stopmenu);
    document.getElementsByClassName('dw')[0].style.backgroundColor = themecolor;
    document.getElementById('menubutton').style.backgroundColor = themecolor;
}
function mouseonmenu_2(){
    stopmenu2=setInterval(mouseonmenu1_2,50);
    stopmenu=setInterval(mouseonmenu1,50);
}
function mouseleavemenu_2(){
    clearInterval(stopmenu2);
    clearInterval(stopmenu);
    document.getElementsByClassName('dw')[1].style.backgroundColor = themecolor;
    document.getElementById('menubutton').style.backgroundColor = themecolor;
}
function mouseonmenu_3(){
    stopmenu3=setInterval(mouseonmenu1_3,50);
    stopmenu=setInterval(mouseonmenu1,50);
}
function mouseleavemenu_3(){
    clearInterval(stopmenu3);
    clearInterval(stopmenu);
    document.getElementsByClassName('dw')[2].style.backgroundColor = themecolor;
    document.getElementById('menubutton').style.backgroundColor = themecolor;
}
function mouseonhome1(){
    document.getElementById('homebutton').style.backgroundColor = 'rgb('+redo+','+greeno+','+blueo+')';
}
function mouseonup1(){
    document.getElementById('upbutton').style.backgroundColor = 'rgb('+redo+','+greeno+','+blueo+')';
}
function mouseonin1(){
    document.getElementById('inbutton').style.backgroundColor = 'rgb('+redo+','+greeno+','+blueo+')';
}
function mouseonfeedback1(){
    document.getElementById('feedbackbutton').style.backgroundColor = 'rgb('+redo+','+greeno+','+blueo+')';
}
function mouseonmenu1(){
    document.getElementById('menubutton').style.backgroundColor = 'rgb('+redo+','+greeno+','+blueo+')';
}
function mouseonsocial1(){
    document.getElementById('socialbutton').style.backgroundColor = 'rgb('+redo+','+greeno+','+blueo+')';
}
function mouseonsocial1_1(){
    document.getElementsByClassName('dw')[3].style.backgroundColor = 'rgb('+redo+','+greeno+','+blueo+')';
}
function mouseonmenu1_1(){
    document.getElementsByClassName('dw')[0].style.backgroundColor = 'rgb('+redo+','+greeno+','+blueo+')';
}
function mouseonmenu1_2(){
    document.getElementsByClassName('dw')[1].style.backgroundColor = 'rgb('+redo+','+greeno+','+blueo+')';
}
function mouseonmenu1_3(){
    document.getElementsByClassName('dw')[2].style.backgroundColor = 'rgb('+redo+','+greeno+','+blueo+')';
}
function mouseoncontact1(){
    document.getElementById('contactbutton').style.backgroundColor = 'rgb('+redo+','+greeno+','+blueo+')';
}
function mouseoncontact1_1(){
    document.getElementsByClassName('dw')[4].style.backgroundColor = 'rgb('+redo+','+greeno+','+blueo+')';
}
function homeclicked(){
    window.open("../index.html","_top");
}
function feedbackclicked(){
    window.open("../html/feedback.html","_blank");
}
function upclicked(){
    window.open("../html/up.html","_blank");
}
function inclicked(){
    window.open("../html/in.html","_blank");
}
function discordclicked(){
    navigator.clipboard.writeText("Create_With_Shresth#3357"); 
    alert1('Note','Discord Id copied!<br>Id : Create_With_Shresth#3357')
}
function gmailclicked(){
    navigator.clipboard.writeText("createwithshresth2008@gmail.com"); 
    alert1('Note','G-mail Id copied!<br>Id : createwithshresth2008@gmail.com')
}