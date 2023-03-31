var co5ibe = new Array(2005690127,2005690128,2005690129,2005690130,2005690131,2005690132,2005690133,2005690134,2005690135,2005690136,2005690137,2005690138,2005690139,2005690140,2005690141,2005690142,2005690143,2005690144,2005690145,2005690146,2005690147,2005690148,2005690149,2005690150,2005690151,2005690152,2005690153,2005690154,2005690155,2005690156,2005690157,2005690158,2005690159,2005690160,2005690161,2005690162,2005690163,2005690164,2005690165,2005690166,2005690167,2005690168,2005690169,2005690170,2005690171,2005690172,2005690173,2005690174,2005690175,2005690176,2005690177,2005690178,2005690179,2005690180,2005690181,2005690182,2005690183,2005690184,2005690185,2005690186);
var s = new Array();
var st = new Array();
for (var i = 0; i < 4; i++) {
    s[i] = document.createElement("option");
}
for (var i = 0; i < co5ibe.length; i++) {
    st[i] = document.createElement("input");
    st[i].type = "checkbox";
}
var nl = document.createElement("p").innerHTML = "\n";
// nl.innerHTML = "<br>";
function f1(x) {
    var co5 = new Array("STE", "OSY", "AJP", "CSS");
    var co4 = new Array("DBMS", "CGR", "CPP", "DSU");
    if (x == "CO5IB") {
        for (var i = 0; i < 4; i++) {
            s[i].text = co5[i];
            s[i].value = co5[i];
            document.forms.form1.s1.append(s[i]);
        }
        for (var i = 0; i < co5ibe.length; i++) {
            st[i].text = co5[i];
            st[i].value = co5[i];
            document.forms.form1.append(st[i]);
            document.forms.form1.append(co5ibe[i]);
            // document.forms.form1.append(nl);
        }
    }
    else {
        for (var i = 0; i < 4; i++) {
            s[i].text = co4[i];
            s[i].value = co4[i];
            document.forms.form1.s1.append(s[i]);
        }
    }
}
function f2() {
    var msg = document.forms.form1.s1.value + "\t : \n";
    with (document.forms.form1) {
        if (c1.checked == true) {
            msg = msg + s.value + "\t" + c1.value + "\t P \n";
        }
        else {
            msg = msg + document.forms.form1.s.value + "\t" + c1.value + "\t A \n";
        }
        if (c2.checked == true) {
            msg = msg + document.forms.form1.s.value + "\t" + c2.value + "\t P \n";
        }
        else {
            msg = msg + document.forms.form1.s.value + "\t" + c2.value + "\t A \n";
        }
        if (c3.checked == true) {
            msg = msg + document.forms.form1.s.value + "\t" + c3.value + "\t P \n";
        }
        else {
            msg = msg + document.forms.form1.s.value + "\t" + c3.value + "\t A \n";
        }
    }
    alert(msg)
}
function f3() {
    
    // var se = 2005690127;
    // for(var i = 0; i < 60;i++){
        // e.push(se);
        // se++;
    // }
    document.write(e)
}