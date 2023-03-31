function chk_b4(){
    with(document.forms.contact){
        // email.value = fname.value + lname.value[0] + "@arkp";
        if(fname.value.length > 0 && lname.value.length > 0){
            email.value = fname.value + lname.value[0] + "@arkp";
        }
        else{
            alert("Enter Valid User Name Or Password !!!")       
        }
    }
    console.log("hii")
}