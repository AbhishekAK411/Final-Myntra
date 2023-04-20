function register(event){
    event.preventDefault();

    var s_username = document.getElementById("register_username").value;
    var s_email = document.getElementById("register_email").value;
    var s_password = document.getElementById("register_password").value;
    var s_confirmPassword = document.getElementById("register_confirmPassword").value;

    if(s_username && s_email && s_password && s_confirmPassword){
        if(s_password.length>=8 && s_confirmPassword>=8){
            if(s_password == s_confirmPassword){
                var swiggy_storage = JSON.parse(localStorage.getItem("swiggy_users")) || [];
                var flag = false;

                for(var i=0;i<swiggy_storage.length;i++){
                    if(swiggy_storage[i].userEmail == s_email){
                        flag=true;
                    }
                }

                if(!flag){
                    var swiggy_user_data = {userName: s_username, userEmail: s_email, userPassword: s_password, userConfirmPassword: s_confirmPassword};
                    swiggy_storage.push(swiggy_user_data);
                    localStorage.setItem("swiggy_users", JSON.stringify(swiggy_storage));
                } else {
                    alert("Email already exists. Proceed to Login");
                    window.location.href = "./login.html";
                }
            } else {
                alert("Passwords should match.");
            }
        } else {
            alert("Password should be minimum 8 characters.");
        }
    } else {
        alert("All fields are mandatory.");
    }
}


function login(event){
    event.preventDefault();

    var s_email = document.getElementById("login_email").value;
    var s_password = document.getElementById("login_password").value;

    if(s_email && s_password){
        var swiggy_storage = JSON.parse(localStorage.getItem("swiggy_users"));
        var flagForCheck = false;
        var swiggy_current_user = {};

        for(var i=0;i<swiggy_storage.length;i++){
            if(swiggy_storage[i].userEmail == s_email && swiggy_storage[i].userPassword == s_password){
                flagForCheck=true;
                swiggy_current_user = swiggy_storage[i];
            }
        }

        if(flagForCheck){
            localStorage.setItem("swiggy_current_user", JSON.stringify(swiggy_current_user));
            window.location.href = "./index.html";
        } else {
            alert("Credentials don't match");
        }
    } else {
        alert("All fields are mandatory.");
    }
}