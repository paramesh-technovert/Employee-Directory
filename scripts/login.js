var employee_details=JSON.parse(localStorage.getItem("employee_details"));

function login(){
    document.getElementById("button").addEventListener("click", function(event){
        event.preventDefault()
      });
    var email=document.getElementById("email").value.toLowerCase();
    var password=document.getElementById("password").value;
    var index=employee_details.find(obj => {return obj.email == email});
    var check_mail=index.email;
    if(email.toLowerCase()==check_mail.toLowerCase() && password==index.phone_number){
        localStorage.setItem("email",email);
        window.location.replace("./directory.html");
    }
    else{
        document.getElementById("display").innerHTML="Invalid Email or Password";
    }
}
