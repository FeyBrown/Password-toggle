var   x, y;
x = document.getElementById("passcode")
y = document.getElementById("show")
 function passwordToggle (){
    if(x.type === "password"){
        x.type = "text"; 
        y.classList.remove("bx-hide"); 
        y.classList.add("bx-show");
    }else
    {
        x.type = "password";
        y.classList.remove("bx-show");
        y.classList.add("bx-hide"); 

    }
}

