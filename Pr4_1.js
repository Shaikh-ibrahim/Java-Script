function f_v(){
    var st = document.getElementById("str").value;
    var c = c_v(st);
    document.getElementById("count").value = c;
}

function c_v(st){
    s = st.toLowerCase();
    var count = 0;
    for(var i = 0;i<s.length;i++){
        if(s[i] == 'a' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u'){
            count++;
        }
    }
    return count;
}