var f = 1;
function feedback_animation(){ 
    document.getElementById('inbody').style.backgroundColor = 'rgb('+redo+','+greeno+','+blueo+')';
     document.getElementById('inbody').style.color = 'rgb('+red+','+green+','+blue+')';
     document.getElementById('inbody').style.borderColor = 'rgb('+red+','+green+','+blue+')';
     document.getElementById('in_line-1').style.borderColor = 'rgb('+red+','+green+','+blue+')';
     if(f===0){
         document.getElementById('inname_input').style.color = themecoloro;
         document.getElementById('inpass_input').style.color = themecoloro;
         document.getElementById('inname_input').style.backgroundColor = themecolor;
         document.getElementById('inpass_input').style.backgroundColor = themecolor;
        f=1
     }
 }
 setInterval(feedback_animation,50)

 var database = firebase.database();
 var acc1, pass1;
 var clk1,clk11;
 var ispre=0;
 var w1=0,w2=0;
 function inok(){
     clk11 = 1;
 }
 function draw(){
     if(clk11 === 1){
         acc1 = document.getElementById('inname_input').value;
         pass1 = document.getElementById('inpass_input').value;
         ispre=0;
         var gameStateRef  = database.ref('accounts/'+acc1);
             gameStateRef.on("value",function(data){
             ispre = data.val();
         });
         if(ispre !== null){
             var pass2;
             var gameStateRef  = database.ref('accounts/'+acc1+'/pass');
                 gameStateRef.on("value",function(data){
                 pass2 = data.val();
             });
             if(pass2 !== undefined){
                if(pass1 === pass2){
                    document.cookie="                                                                               ;expires=Thu, 18 Dec 2113 12:00:00 UTC;path=/"
                    document.cookie=acc1+";expires=Thu, 18 Dec 2113 12:00:00 UTC;path=/"
                    alert1("Sucess","Logged In");
                    clk11 = 0;
                }else{
                    alert1('Error!',"Wrong password");
                    clk11 = 0;
                }
             }
         }
         else{
             alert1('Error!','Username not found');
             clk11 = 0;
         }
     }
 }
 setInterval(draw,1);