let email=document.getElementById("email");
let psw=document.getElementById("psw");

  
function validate(){

if(email.value==""){
    
alert("email cannot be empty");
return false;
}
else if(psw.value==""){
    alert("password cannot be blank");
    return false;

}
else if(psw.value.length<=8){
    alert("password is too short");
    return false;
}
else{
    alert(valid);
    return true;
}
}


let phone=document.getElementById("phone");

    function validate() {
        var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    
       var t=re.exec(phone.value);
       if(!t){
           alert("phonenumber not valid");
           return false;

       }
       else{
           return true;
           
       }
    }
    
    