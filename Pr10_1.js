function f1(){
    with(document.forms.C_D){
        if(c_name.value.length > 0){
            document.cookie = "Customer Name=" + c_name.value + ";";
            alert("Cookie Written : " + document.cookie)
        }
    }
}