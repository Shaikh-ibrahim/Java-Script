function odd_even(){
    var n = parseInt(document.getElementById("number").value);
    var i = 2;
    do{
        if(n%i==0){
            document.getElementById('res').value = "EVEN";
        }
        else{
            document.getElementById('res').value = "ODD";
        }
        i++;
    }while(i  <= 2);
}