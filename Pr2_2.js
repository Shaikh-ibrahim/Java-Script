function clock(){
    var time = parseInt(document.getElementById("time").value);
    if(time < 12 && time > 0){
        alert("GOOD MORNING");
    }
    else if(time >= 12 && time < 18){
        alert("GOOD AFTERNOON");
    }
    else if(time >= 18 && time <= 24){
        alert("GOOD EVENING");
    }
    else{
        alert("Enter Valid Input !!");
    }
}