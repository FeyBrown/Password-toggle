var   x, y;
x = document.getElementById("passcode")
y = document.getElementById("show")
 function passwordToggle (){
    if(x.type === "password" && x.value !=""){
        x.type = "text"; 
        y.classList.remove("bx-low-vision"); 
        y.classList.add("bx-bullseye");
    }else
    {
        x.type = "password";
        y.classList.remove("bx-bullseye");
        y.classList.add("bx-low-vision"); 

    }
}

