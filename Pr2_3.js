function submit(){
    var number = parseInt(document.getElementById("num").value);
    for(var i = 1; i <= 10;i++){
        document.write(number + " * " + i + " = " + i * number + "<br>");
    }
}