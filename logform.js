let psw=document.getElementById("psw");
function validate(){
    if(user.value==""){
    
        alert("cannot be empty");
        return false;
        }
        else if(pwd.value==""){
            alert("password cannot be blank");
            return false;
        
        }
        else if(pwd.value.length<=8){
            alert("password is too short");
            return false;
        }
        else{
            return true;
        }}
        
        
        
           
                   
              
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "error";
    }
}
