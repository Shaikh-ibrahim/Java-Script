function f1(){
    with(document.forms.attendance){
       
        if(btn.value == "Checked"){
            btn.value = "Unchecked"
            a.checked = true;
            b.checked = true;
            c.checked = true
        }
        else{
            btn.value = "Checked"
            a.checked = false;
            b.checked = false;
            c.checked = false;
        }
    }
}

