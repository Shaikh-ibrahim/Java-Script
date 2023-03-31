function login(){
    uname = "shaikh";
    upass = "ibrahim";
    if(document.getElementById("user").value == uname 
        && document.getElementById("pass").value == upass){
        alert("Login 👍");
    }
    else{
        alert("Somting Went Worng !!!");
    }
}