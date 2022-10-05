document.getElementById('theme_box').value='';
document.getElementById('color_comb_mode').value='';
document.getElementById('color_select_mode').value='';
var database = firebase.database();
var theme2,theme3;
var mode2,mode3;
var colour2,colour3;
var a=1,b=0,h=1,i=0,k=1,l=0;
var gameStateRef  = database.ref('accounts/'+account+'/theme');
        gameStateRef.on("value",function(data){
        theme2 = data.val();
});
var gameStateRef  = database.ref('accounts/'+account+'/mode');
        gameStateRef.on("value",function(data){
        mode2 = data.val();
});
var gameStateRef  = database.ref('accounts/'+account+'/colour');
        gameStateRef.on("value",function(data){
        colour2 = data.val();
});
function color_comb_animation(){ 
    document.getElementById('settings_body').style.backgroundColor = 'rgb('+redo+','+greeno+','+blueo+')';
    document.getElementById('settings_body').style.color = 'rgb('+red+','+green+','+blue+')';
    document.getElementById('settings_body').style.borderColor = 'rgb('+red+','+green+','+blue+')';
    if(theme2!==undefined && a===1){
        document.getElementById('theme_box').value=theme2;
        theme3 = theme2;
        a=0;
        b=1;
    }
    if(mode2!==undefined && h===1){
        document.getElementById('color_comb_mode').value=mode2;
        mode3 = mode2;
        h=0;
        i=1;
    }
    if(colour2!==undefined && k===1){
        document.getElementById('color_select_mode').value=colour2;
        colour3 = colour2;
        k=0;
        l=1;
    }
    if(b===1){

        theme2 = document.getElementById('theme_box').value;
        if(theme3 !== theme2){
            if(login === 1){
                database.ref('accounts/'+account+'/').update({
                    theme:theme2
                });
            }
            else{
                alert1("Note",'Sign-in to change settings.');
            }
        }
        theme3=theme2
    }
    if(i===1){

        mode2 = document.getElementById('color_comb_mode').value;
        if(mode3 !== mode2){
            if(login === 1){
                database.ref('accounts/'+account+'/').update({
                    mode:mode2
                });
            }
            else{
                alert1("Note",'Sign-in to change settings.');
            }
        }
        mode3=mode2;
    }
    if(l===1){

        colour2 = document.getElementById('color_select_mode').value;
        if(colour3 !== colour2){
            if(login === 1){
                database.ref('accounts/'+account+'/').update({
                    colour:colour2
                });
                
            }
            else{
                alert1("Note",'Sign-in to change settings.');
            }
            console.log("dfs")
        }
        colour3=colour2;
    }
}
setInterval(color_comb_animation,50)
