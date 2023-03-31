function f1(){
    var sub = document.getElementById("s").value;
    d1 = new Date();
    d1.setMonth(d1.getMonth() + 3);
    document.cookie = "Subject=" + sub + ";" + "expires=" + d1.toGMTString() + ";"
    alert(document.cookie + " \t " + d1.toGMTString()); 
}