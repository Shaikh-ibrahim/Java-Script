function f1(){
    var msg = "";
    with(document.forms.student){
        if(Shaikh_ibrahim.checked == true){
            msg = msg + Shaikh_ibrahim.value + "\t P \n"
        }
        else{
            msg = msg + Shaikh_ibrahim.value + " \t A \n"
        }
        if(Shaikh_Asil.checked == true){
            msg = msg + Shaikh_Asil.value + "\t P \n"
        }
        else{
            msg = msg + Shaikh_Asil.value + "\t A \n"
        }
        if(Gulamnabi.checked == true){
            msg = msg + Gulamnabi.value + "\t P \n"
        }
        else{
            msg = msg + Gulamnabi.value + "\t A \n"
        }
        action="p.html";
        submit();
    }
    alert(msg);
}