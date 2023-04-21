window.onload = () =>{
    var myntra_currentUser = JSON.parse(localStorage.getItem("myntra_current_user"));
    console.log(myntra_currentUser);

    if(myntra_currentUser){
        var myntra_div = document.getElementById("myntra_current_user");
        var removeTag = document.getElementById("myntra_remove_tag");
        removeTag.remove();

        var h5 = document.createElement("h5");
        h5.innerText = myntra_currentUser.userName;
        myntra_div.append(h5);
    } else {
        alert("Current User is absent");
    }
}