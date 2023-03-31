function f1(){
with(document.forms.frm){
    if(c.checked == true){
        win= window.open("clock.html","w1",'width=300,height=300,top=402,left=103'); 
    }
    else{
        win.close();
    }
    if(com.checked == true){
        win2 = window.open("co.html","w2",'width=400,height=300,top=402,left=443');
    }
    else{
        win2.close();
    }
    if(img.checked == true){
        win3 = window.open("img.html","w3",'width=500,height=300,top=402,left=883');
    }
    else{
        win3.close();
    }
}
}