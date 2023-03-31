function fn(obj){
    var r = document.getElementById("d");
    var r1 = document.getElementById("d1");
    reg = /[^a-z][^A-Z]/;
    with(document.forms.frm){
        if(reg.test(fname.value)){
            r.innerHTML = "Invalid !!";
        }
        else{
            r.innerHTML = "valid !!";
        }
        if(reg.test(lname.value)){
            r1.innerHTML = "Invalid !!";
        }
        else{
            r1.innerHTML = "valid !!";
        }
    }
}
function mob(){
    var r2 = document.getElementById("d2");
    reg1 = /^\+91\ [6-9]{1}[0-9]{9}$/;
    with(document.forms.frm){
        if(reg1.test(mobile.value)){
            r2.innerHTML = "valid !!";
        }
        else{
            r2.innerHTML = "Invalid !!";
        }
    }
}
function un(){
    var r3 = document.getElementById("d3");
    reg2 = /@[a-z]{4}[0-9]{3}$/;
    with(document.forms.frm){
        if(reg2.test(uname.value)){
            r3.innerHTML = "valid !!";
        }
        else{
            r3.innerHTML = "Invalid !!";
        }
    }
}
function password(){
    var r4 = document.getElementById("dd");
    reg3 = /^[A-Z]{1}[a-z]{8}$/;
    with(document.forms.frm){
        if(reg3.test(pass.value)){
            r4.innerHTML = "valid !!";
            // alert("vali")
        }
        else{
            r4.innerHTML = "Invalid !!";
            // alert("in")
        }
    }
}
function Email(){
    var r4 = document.getElementById("ddd");
    reg3 = /^\w+@/;
    with(document.forms.frm){
        if(reg3.test(email  .value)){
            r4.innerHTML = "valid !!";
        }
        else{
            r4.innerHTML = "Invalid !!";
        }
    }
}