function add(){
    var n1 = parseInt(document.getElementById("n1").value);
    var n2 = parseInt(document.getElementById("n2").value);
    document.getElementById("res").value = n1 + n2;
    document.getElementById("name").innerHTML = "Addition";
}
function sub(){
    var n1 = parseInt(document.getElementById("n1").value);
    var n2 = parseInt(document.getElementById("n2").value);
    document.getElementById("res").value = n1 - n2;
    document.getElementById("name").innerHTML = "Subtraction";
}
function mul(){
    var n1 = parseInt(document.getElementById("n1").value);
    var n2 = parseInt(document.getElementById("n2").value);
    document.getElementById("res").value = n1 * n2;
    document.getElementById("name").innerHTML = "Multiplication";
}
function div(){
    var n1 = parseInt(document.getElementById("n1").value);
    var n2 = parseInt(document.getElementById("n2").value);
    document.getElementById("res").value = n1 / n2;
    document.getElementById("name").innerHTML = "Division";
}