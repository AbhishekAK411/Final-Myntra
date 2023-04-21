function register(event){
    event.preventDefault();

    var m_username = document.getElementById("register_username").value;
    var m_email = document.getElementById("register_email").value;
    var m_password = document.getElementById("register_password").value;
    var m_confirmPassword = document.getElementById("register_confirmPassword").value;

    if(m_username && m_email && m_password && m_confirmPassword){
        if(m_password.length>=8 && m_confirmPassword>=8){
            if(m_password == m_confirmPassword){
                var myntra_storage = JSON.parse(localStorage.getItem("myntra_users")) || [];
                var flag = false;

                for(var i=0;i<myntra_storage.length;i++){
                    if(myntra_storage[i].userEmail == m_email){
                        flag=true;
                    }
                }

                if(!flag){
                    var myntra_user_data = {userName: m_username, userEmail: m_email, userPassword: m_password, userConfirmPassword: m_confirmPassword};
                    myntra_storage.push(myntra_user_data);
                    localStorage.setItem("myntra_users", JSON.stringify(myntra_storage));
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

    var m_email = document.getElementById("login_email").value;
    var m_password = document.getElementById("login_password").value;

    if(m_email && m_password){
        var myntra_storage = JSON.parse(localStorage.getItem("myntra_users"));
        var flagForCheck = false;
        var myntra_current_user = {};

        for(var i=0;i<myntra_storage.length;i++){
            if(myntra_storage[i].userEmail == m_email && myntra_storage[i].userPassword == m_password){
                flagForCheck=true;
                myntra_current_user = myntra_storage[i];
            }
        }

        if(flagForCheck){
            localStorage.setItem("myntra_current_user", JSON.stringify(myntra_current_user));
            window.location.href = "./index.html";
        } else {
            alert("Credentials don't match");
        }
    } else {
        alert("All fields are mandatory.");
    }
}