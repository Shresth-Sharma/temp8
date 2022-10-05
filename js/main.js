var database = firebase.database();
var theme1,c=1;
var mode1,j=1;
var colour1,m=1;
var n=1;
var account =  document.cookie;
if(account === ''){
    login = 0;
    theme1 = '1';
    mode1 = '1';
    colour1 = '4';
}
else{
    login = 1;
    var gameStateRef  = database.ref('accounts/'+account+'/theme');
        gameStateRef.on("value",function(data){
        theme1 = data.val();
    });
    var gameStateRef  = database.ref('accounts/'+account+'/mode');
        gameStateRef.on("value",function(data){
        mode1 = data.val();
    });
    var gameStateRef  = database.ref('accounts/'+account+'/colour');
        gameStateRef.on("value",function(data){
        colour1 = data.val();
    });
}

var themecolor,themecoloro;
var red = 255, green = 0, blue = 0;
var redo = 0, greeno = 255, blueo = 0;
var color_time=0;




function color_animation(){
    if(theme1!==undefined&&c===1){
        if(theme1 === '1'){
            themecolor = 'black'
            themecoloro = 'white'
            document.getElementById('alertbc1').style.display = 'none';
            c=0;
            d=0;
            e=0;
            f=0;
            g=0;
        }
        else if(theme1 === '2'){
            themecolor = 'white'
            themecoloro = 'black'
            document.getElementById('alertbc1').style.display = 'none';
            e=0;
            f=0;
            g=0;
            c=0;
            d=0;
        }
    }
if(mode1 === '1'){
    if(colour1 === '1'){
        if(n===1){
            red = 0, green = 0, blue = 255;
            redo = 255, greeno = 0, blueo = 0;
            n=0;
        }
        if(color_time <= 100){
            red += 2.55;
            redo -= 2.55;
            blue -= 2.55;
            blueo += 2.55;
            color_time += 1;
        }else if(color_time <= 200){
            red -= 2.55;
            redo += 2.55;
            blue += 2.55;
            blueo -= 2.55;
            color_time += 1;
        }
        else{
            color_time = 0;
        }
    }
    else if(colour1 === '2'){
        if(n===1){
            red = 0, green = 0, blue = 255;
            redo = 0, greeno = 255, blueo = 0;
            n=0;
        }
        if(color_time <= 100){
            blue -= 2.55;
            blueo += 2.55;
            green += 2.55;
            greeno -= 2.55;
            color_time += 1;
        }else if(color_time <= 200){
            blue += 2.55;
            blueo -= 2.55;
            green -= 2.55;
            greeno += 2.55;
            color_time += 1;
        }
        else{
            color_time = 0;
        }
    }
    else if(colour1 === '3'){
        if(n===1){
            red = 0, green = 0, blue = 255;
            redo = 255, greeno = 255, blueo = 0;
            n=0;
        }
        if(color_time <= 100){
            blue -= 2.55;
            blueo += 2.55;
            green += 2.55;
            greeno -= 2.55;
            red += 2.55;
            redo -= 2.55;
            color_time += 1;
        }else if(color_time <= 200){
            blue += 2.55;
            blueo -= 2.55;
            green -= 2.55;
            greeno += 2.55;
            red -= 2.55;
            redo += 2.55;
            color_time += 1;
        }
        else{
            color_time = 0;
        }
    }
    else if(colour1 === '4'){
        if(n===1){
            red = 0, green = 0, blue = 255;
            redo = 128, greeno = 0, blueo = 128;
            n=0;
        }
        if(color_time <= 100){
            blue -= 1.27;
            blueo += 1.27;
            red += 1.28;
            redo -= 1.28;
            color_time += 1;
        }else if(color_time <= 200){
            blue += 1.27;
            blueo -= 1.27;
            red -= 1.28;
            redo += 1.28;
            color_time += 1;
        }
        else{
            color_time = 0;
        }
    }
    else if(colour1 === '5'){
        if(n===1){
            red = 255, green = 0, blue = 0;
            redo = 255, greeno = 255, blueo = 0;
            n=0;
        }
        if(color_time <= 100){
            green += 2.55;
            greeno -= 2.55;
            color_time += 1;
        }else if(color_time <= 200){
            green -= 2.55;
            greeno += 2.55;
            color_time += 1;
        }
        else{
            color_time = 0;
        }
    }
    else if(colour1 === '6'){
        if(n===1){
            red = 255, green = 0, blue = 0;
            redo = 0, greeno = 255, blueo = 0;
            n=0;
        }
        if(color_time <= 100){
            red -= 2.55;
            redo += 2.55;
            green += 2.55;
            greeno -= 2.55;
            color_time += 1;
        }else if(color_time <= 200){
            red += 2.55;
            redo -= 2.55;
            green -= 2.55;
            greeno += 2.55;
            color_time += 1;
        }
        else{
            color_time = 0;
        }
    }
    else if(colour1 === '7'){
        if(n===1){
            red = 255, green = 0, blue = 0;
            redo = 128, greeno = 0, blueo = 128;
            n=0;
        }
        if(color_time <= 100){
            red -= 1.27;
            redo += 1.27;
            blue += 1.28;
            blueo -= 1.28;
            color_time += 1;
        }else if(color_time <= 200){
            red += 1.27;
            redo -= 1.27;
            blue -= 1.28;
            blueo += 1.28;
            color_time += 1;
        }
        else{
            color_time = 0;
        }
    }
    else if(colour1 === '8'){
        if(n===1){
            red = 0, green = 255, blue = 0;
            redo = 255, greeno = 255, blueo = 0;
            n=0;
        }
        if(color_time <= 100){
            red += 2.55;
            redo -= 2.55;
            color_time += 1;
        }else if(color_time <= 200){
            red -= 2.55;
            redo += 2.55;
            color_time += 1;
        }
        else{
            color_time = 0;
        }
    }
    else if(colour1 === '9'){
        if(n===1){
            red = 0, green = 255, blue = 0;
            redo = 128, greeno = 0, blueo = 128;
            n=0;
        }
        if(color_time <= 100){
            red += 1.28;
            redo -= 1.28;
            blue += 1.28;
            blueo -= 1.28;
            green -= 2.55;
            greeno += 2.55;
            color_time += 1;
        }else if(color_time <= 200){
            red -= 1.28;
            redo += 1.28;
            blue -= 1.28;
            blueo += 1.28;
            green += 2.55;
            greeno -= 2.55;
            color_time += 1;
        }
        else{
            color_time = 0;
        }
    }
    else if(colour1 === '10'){
        if(n===1){
            red = 128, green = 0, blue = 128;
            redo = 255, greeno = 255, blueo = 0;
            n=0;
        }
        if(color_time <= 100){
            red += 1.27;
            redo -= 1.27;
            green += 2.55;
            greeno -= 2.55;
            blue -= 1.28;
            blueo += 1.28;
            color_time += 1;
        }else if(color_time <= 200){
            red -= 1.27;
            redo += 1.27;
            green -= 2.55;
            greeno += 2.55;
            blue += 1.28;
            blueo -= 1.28;
            color_time += 1;
        }
        else{
            color_time = 0;
        }
    }
    else if(colour1 === '11'){
        if(n===1){
            red = 255, green = 0, blue = 0;
            redo = 0, greeno = 255, blueo = 0;
            n=0;
        }
        if(color_time <= 100){
            red -= 1.275;
            redo += 1.275;
            color_time += 1;
        }else if(color_time <= 200){
            green += 1.275;
            greeno -= 1.275;
            color_time += 1;
        }
        else if(color_time <= 300){
            blue += 1.275;
            blueo -= 1.275;
            color_time += 1;
        }
        else if(color_time <= 100){
            red -= 1.275;
            redo += 1.275;
            color_time += 1;
        }else if(color_time <= 200){
            green += 1.275;
            greeno -= 1.275;
            color_time += 1;
        }
        else if(color_time <= 300){
            blue += 1.275;
            blueo -= 1.275;
            color_time += 1;
        }
        else if(color_time <= 100){
            red += 1.275;
            redo -= 1.275;
            color_time += 1;
        }else if(color_time <= 200){
            green -= 1.275;
            greeno += 1.275;
            color_time += 1;
        }
        else if(color_time <= 300){
            blue -= 1.275;
            blueo += 1.275;
            color_time += 1;
        }
        else if(color_time <= 100){
            red += 1.275;
            redo -= 1.275;
            color_time += 1;
        }else if(color_time <= 200){
            green -= 1.275;
            greeno += 1.275;
            color_time += 1;
        }
        else if(color_time <= 300){
            blue -= 1.275;
            blueo += 1.275;
            color_time += 1;
        }
        else{
            color_time = 0;
        }
    }
}
    else{
    //alert1("Error!","Unexpected error occured")
}
}
function color_animation_1(){
    //place items you want to color here
    document.getElementById('homebutton').style.borderColor = 'rgb('+red+','+green+','+blue+')';
    document.getElementById('menubutton').style.borderColor = 'rgb('+red+','+green+','+blue+')';
    document.getElementById('socialbutton').style.borderColor = 'rgb('+red+','+green+','+blue+')';
    document.getElementById('contactbutton').style.borderColor = 'rgb('+red+','+green+','+blue+')';
    document.getElementById('upbutton').style.borderColor = 'rgb('+red+','+green+','+blue+')';
    document.getElementById('inbutton').style.borderColor = 'rgb('+red+','+green+','+blue+')';
    document.getElementById('feedbackbutton').style.borderColor = 'rgb('+red+','+green+','+blue+')';
    document.getElementsByClassName('dw')[0].style.borderColor = 'rgb('+red+','+green+','+blue+')';
    document.getElementsByClassName('dw')[1].style.borderColor = 'rgb('+red+','+green+','+blue+')';
    document.getElementsByClassName('dw')[2].style.borderColor = 'rgb('+red+','+green+','+blue+')';
    document.getElementsByClassName('dw')[3].style.borderColor = 'rgb('+red+','+green+','+blue+')';
    document.getElementsByClassName('dw')[4].style.borderColor = 'rgb('+red+','+green+','+blue+')';
    document.getElementById('homebutton').style.color = 'rgb('+red+','+green+','+blue+')';
    document.getElementById('menubutton').style.color = 'rgb('+red+','+green+','+blue+')';
    document.getElementById('socialbutton').style.color = 'rgb('+red+','+green+','+blue+')';
    document.getElementById('contactbutton').style.color = 'rgb('+red+','+green+','+blue+')';
    document.getElementById('upbutton').style.color = 'rgb('+red+','+green+','+blue+')';
    document.getElementById('inbutton').style.color = 'rgb('+red+','+green+','+blue+')';
    document.getElementById('feedbackbutton').style.color = 'rgb('+red+','+green+','+blue+')';
    document.getElementsByClassName('dw')[0].style.color = 'rgb('+red+','+green+','+blue+')';
    document.getElementsByClassName('dw')[1].style.color = 'rgb('+red+','+green+','+blue+')';
    document.getElementsByClassName('dw')[2].style.color = 'rgb('+red+','+green+','+blue+')';
    document.getElementsByClassName('dw')[3].style.color = 'rgb('+red+','+green+','+blue+')';
    document.getElementsByClassName('dw')[4].style.color = 'rgb('+red+','+green+','+blue+')';
    document.getElementById('cen').style.backgroundColor = 'rgb('+red+','+green+','+blue+')';
    document.getElementById('cen').style.color = 'rgb('+redo+','+greeno+','+blueo+')';
    document.getElementsByClassName('top')[0].style.borderColor = 'rgb('+redo+','+greeno+','+blueo+')';
    document.getElementById('alertbox').style.borderColor = 'rgb('+redo+','+greeno+','+blueo+')';
    document.getElementById('alertbox').style.color = 'rgb('+red+','+green+','+blue+')';
    document.getElementById('alerthead').style.borderColor = 'rgb('+redo+','+greeno+','+blueo+')';
    document.getElementById('alertbt').style.borderColor = 'rgb('+redo+','+greeno+','+blueo+')';
    document.getElementById('alertbt').style.color = 'rgb('+red+','+green+','+blue+')';
}
setInterval(color_animation_1,50);
setInterval(color_animation,50);
function feedbackdelay(){
    alert1('Request','Please help us improve by giving feedback')
}
setTimeout(feedbackdelay,5000);
setTimeout(feedbackdelay,100000);