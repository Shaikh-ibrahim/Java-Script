function f1(v){
    with(document.forms.colloge){
        if(v == "arkp"){
            c[0].text = "CO"
            c[1].text = "CE"
            c[2].text = "CV"
            aiktc.checked = false;
        }
        else{
            c[0].text = "Pharmasi"
            c[1].text = "Arcitacture"
            c[2].text = "Engg"
            arkp.checked = false;
        }
    }
}