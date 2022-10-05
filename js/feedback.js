var e = 1;
function feedback_animation(){ 
    document.getElementById('feedbackbody').style.backgroundColor = 'rgb('+redo+','+greeno+','+blueo+')';
     document.getElementById('feedbackbody').style.color = 'rgb('+red+','+green+','+blue+')';
     document.getElementById('feedbackbody').style.borderColor = 'rgb('+red+','+green+','+blue+')';
     document.getElementById('feedback_line-1').style.borderColor = 'rgb('+red+','+green+','+blue+')';
     document.getElementById('feedback_line-2').style.borderColor = 'rgb('+red+','+green+','+blue+')';
     document.getElementById('feedback_line-3').style.borderColor = 'rgb('+red+','+green+','+blue+')';
    if(e===0){
        document.getElementById('name_input').style.color = themecoloro;
        document.getElementById('mail_input').style.color = themecoloro;
        document.getElementById('feedbackdetailinput').style.color = themecoloro;
        document.getElementById('suggestioninput').style.color = themecoloro;
        document.getElementById('name_input').style.backgroundColor = themecolor;
        document.getElementById('mail_input').style.backgroundColor = themecolor;
        document.getElementById('feedbackdetailinput').style.backgroundColor = themecolor;
        document.getElementById('suggestioninput').style.backgroundColor = themecolor;
        e=1
    }
 }
 setInterval(feedback_animation,50)

 var database = firebase.database();
 var name1='-',mail1='-',type1='-',star1='-',detail1='-',suggestion1='-';
 function sendfeed(){
    name1 = document.getElementById('name_input').value;
    mail1 = document.getElementById('mail_input').value;
    detail1 = document.getElementById('feedbackdetailinput').value;
    suggestion1 = document.getElementById('suggestioninput').value;
    if(document.getElementById('type_1').checked){
        type1 = '_Comment';
    }
    else if(document.getElementById('type_2').checked){
        type1 = 'Question';
    }
    else if(document.getElementById('type_3').checked){
        type1 = 'Bug_Report';
    }
    else if(document.getElementById('type_4').checked){
        type1 = 'Feature_Request';
    }
    if(document.getElementById('star_1').checked){
        star1 = 1;
    }
    else if(document.getElementById('star_2').checked){
        star1 = 2;
    }
    else if(document.getElementById('star_3').checked){
        star1 = 3;
    }
    else if(document.getElementById('star_4').checked){
        star1 = 4;
    }
    else if(document.getElementById('star_5').checked){
        star1 = 5;
    }
    else if(document.getElementById('star_6').checked){
        star1 = 6;
    }
    else if(document.getElementById('star_7').checked){
        star1 = 7;
    }
    else if(document.getElementById('star_8').checked){
        star1 = 8;
    }
    else if(document.getElementById('star_9').checked){
        star1 = 9;
    }
    else if(document.getElementById('star_10').checked){
        star1 = 10;
    }
    console.log(name1);
    console.log(mail1);
    console.log(type1);
    console.log(star1);
    console.log(detail1);
    console.log(suggestion1);
    database.ref('feedback/'+name1+'/').update({
        mail:mail1,
        type:type1,
        star:star1,
        detail:detail1,
        suggestion:suggestion1
    });
    window.open("../html/feedbackThanks.html","_top");
 }