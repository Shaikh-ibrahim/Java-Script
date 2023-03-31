var arr = new Array(10,20,30,40);
document.getElementById("n1").value = "Array : " + arr;
function add(){
    var sum = 0;
    for(i = 0;i<arr.length;i++){
        sum = sum + arr[i];
    }
    document.getElementById("re").innerHTML = "Addition : " + sum;
}
function pro(){
    var pr = 1;
    for(i = 0;i<arr.length;i++){
        pr = pr * arr[i];
    }
    document.getElementById("res").innerHTML = "Product : " + pr;
}