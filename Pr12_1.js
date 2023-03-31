function f1(){
    var mobile = document.getElementById("mob").value;
    reg = /^\+91\ [6-9]{1}[0-9]{9}$/;
    if(reg.test(mobile)){
        alert("Valide!");
    }
    else{
        alert("Invalide!")
    }
}