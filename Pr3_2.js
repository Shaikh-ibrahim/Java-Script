var a = new Array(20,10,40,50,30);
document.getElementById("nn").value = "Array : " + a;
var sa = a.sort();
function min(){
    document.getElementById("min").innerHTML = "Min : " + sa[0];
}

function max(){
    var l = sa.length;
    document.getElementById("max").innerHTML = "Max : " + sa[l-1];
}