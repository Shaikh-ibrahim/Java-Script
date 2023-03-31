function f1(){
    var input = document.getElementById("demo").value;
    reg = /[^a-z][^A-Z]/;
    if(reg.test(input)){
        alert("Invalid!!")
    }
    else{
        alert("Valide!!")
    }
}