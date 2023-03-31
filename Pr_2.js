function count_print(){
    var count = parseInt(document.getElementById("n1").value);
    document.getElementById("n1").value = count+1;
    document.getElementById("name").innerHTML = "onClick = Inc";
}
function reset(){
    document.getElementById("n1").value = 0;
    document.getElementById("name").innerHTML = "onClick = Reset";
}