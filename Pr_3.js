function convert(){
    var c = parseInt(document.getElementById("n1").value);
    document.getElementById("n2").value = (c*9/5)+32; 
    document.getElementById("onc").innerHTML = "onClick";
    
    if(document.getElementById("n1").value == ""){
        document.getElementById("n2").value = "Plz Enter Any Value !";  
    }
}