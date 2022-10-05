var g = 1;
function feedback_animation(){ 
    document.getElementById('upbody').style.backgroundColor = 'rgb('+redo+','+greeno+','+blueo+')';
     document.getElementById('upbody').style.color = 'rgb('+red+','+green+','+blue+')';
     document.getElementById('upbody').style.borderColor = 'rgb('+red+','+green+','+blue+')';
     document.getElementById('up_line-1').style.borderColor = 'rgb('+red+','+green+','+blue+')';
     if(g === 0){
       document.getElementById('upname_input').style.color = themecoloro;
       document.getElementById('uppass_input').style.color = themecoloro;
       document.getElementById('upname_input').style.backgroundColor = themecolor;
       document.getElementById('uppass_input').style.backgroundColor = themecolor;
       g=1;
      }
  }
 setInterval(feedback_animation,50)

 var database = firebase.database();
 var acc1, pass1;
            var clk1,clk11;
            var ispre=0;
            var w1=0,w2=0;
            var database=firebase.database();
            function upok(){
                clk1 = 1;
            }
            function draw(){
                if(clk1 === 1){
                    acc1 = document.getElementById('upname_input').value;
                    pass1 = document.getElementById('uppass_input').value;
                    ispre=0;
                    var gameStateRef  = database.ref('accounts/'+acc1+'/a');
                        gameStateRef.on("value",function(data){
                        ispre = data.val();
                    });
                    if(ispre === null){
                        getLocation();
                        
                            database.ref('accounts/'+acc1).update({
                                pass:pass1,
                                a:1,
                                latitude:w1,
                                longitude:w2,
                                Description:platform.description,
                                theme : '1',
                                mode:'1',
                                colour:'4'
                            });
                            
                            alert1("Sucess","Account created   <br>Id:"+acc1+'    Password : '+pass1);
                            ispre = 0;
                            clk1 = 0;
                }
                else if(ispre === 1){
                    alert1("Erron","Username Taken");
                    ispre = 0;
                    clk1 = 0;
                    }
                }
            }
            setInterval(draw,1);
            var sucess,error;
            function getLocation() {
    if (!navigator.geolocation) {
      //console.log('Geolocation API not supported by this browser.');
    } else {
      //console.log('Checking location...');
      navigator.geolocation.getCurrentPosition(sucess, error);
    }
  }
  function error() {
    //console.log('Geolocation error!');
  }
  function sucess(position) {
    //console.log('Latitude:', position.coords.latitude);
    //console.log('Longitude:', position.coords.longitude);
    w1 = position.coords.latitude
    w2 = position.coords.longitude
    //return w1 +', '+w2;
  }