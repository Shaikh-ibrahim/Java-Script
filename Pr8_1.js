function f1(){
    var str = "";
    with(document.forms.attendance){
        if(a.checked == true){
            str = str + a.value + " Present\n";
        }
        else{
            str = str + a.value + " Absent\n";
        }
        if(b.checked == true){
            str = str + b.value + " Present\n";
        }
        else{
            str = str + b.value + " Absent\n";
        }
        if(c.checked == true){
            str = str + c.value + " Present\n";
        }
        else{
            str = str + c.value + " Absent\n";
        }
        if(d.checked == true){
            str = str + d.value + " Present\n";
        }
        else{
            str = str + d.value + " Absent\n";
        }
        if(e.checked == true){
            str = str + e.value + " Present\n";
        }
        else{
            str = str + e.value + " Absent\n";
        }
    }
    document.getElementById("ta").value = str;
    
    var p = document.createElement("p").innerHTML = "SHAIKH";
    document.forms.attendance.append(p);
}
function f2(){
    with(document.forms.attendance){
    var msg = a.value + " Absent\n" + b.value + " Absent\n" + c.value + " Absent\n" + d.value + " Absent\n" + e.value + " Absent\n";
    }
    document.getElementById("ta").value = msg;

}