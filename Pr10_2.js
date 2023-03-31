function f1(c){
    document.cookie = "Color = " + c +";"
    var s = document.cookie
    var a = s.split("=");
    alert(s)
    document.forms.frm.fn.style.backgroundColor = a[1];
    document.forms.frm.ln.style.backgroundColor = a[1];
    // document.write(screen.width);
}