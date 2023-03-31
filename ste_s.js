function str_count(){
    var s = document.getElementById("str").value;
    var str = s.toLowerCase();
    var count = 0;
    for(var i = 0;i<str.length;i++){

    switch(true){
        case str[i] == 'a':
            count++;
            break;
        case str[i] == 'e':
            count ++;
            break;
        case str[i] == 'i':
            count++;
            break;
        case str[i] == 'o':
            count++;
            break;
        case str[i] == 'u':
            count++;
            break;
    }
}
    document.getElementById('count').value = count;
}