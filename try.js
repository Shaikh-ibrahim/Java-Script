function f1(){
    with(document.forms.student){
        // if(v == "ibrahim"){
        //     ibr[0].text = "Shaikh Ibrahim"
        // }
        // else if(v == "asil"){
        //     ibr[1].text = "Shaikh Asil"
        // }
        // else{
        //     ibr[2].text = "Gulamnabi"
        // }
        var str = "";
        if(document.getElementById('ib').checked == true){
            ibr[0].text = "Shaikh Ibrahim"
            str = "[Ibrahim is present]"
        }
        if(document.getElementById('ib').checked == false){
            ibr[0].text = ""
        }
        if(document.getElementById('asl').checked == true){
            ibr[1].text = "Shaikh Asil"
            str = str + " [Asil is present]"
        }
        if(document.getElementById('asl').checked == false){
            ibr[1].text = ""
        }        
        if(document.getElementById('ala').checked == true){
            ibr[2].text = "Gulamnabi"
            str = str + " [Gulamnabi is present]"
        }
        if(document.getElementById('ala').checked == false){
            ibr[2].text = ""
        }
    }
    alert(str)
    document.getElementById('ta').value = str;
}