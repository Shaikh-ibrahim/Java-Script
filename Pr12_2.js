function f1(){
    var input = document.getElementById("demo").innerHTML;
    var out = document.getElementById("res");
    // // document.write()
    // alert(input)
    reg = /Ja[a-z]*/g;
    out.innerHTML = input.match(reg);
    console.log(input.match(reg));
}