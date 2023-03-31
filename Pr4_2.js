function input(){
    var n = parseInt(document.getElementById('num').value);
    var s = s_q(n);
    document.getElementById('sum').value = s;
}

function s_q(no){
    var sum = 0;
    while(no>0){
        d = no % 10;
        sum = sum + d;
        no = Math.floor(no / 10);
    }   
    return sum;
}