window.onload = () =>{
    var myntra_currentUser = JSON.parse(localStorage.getItem("myntra_current_user"));
    // console.log(myntra_currentUser);

    var ls = JSON.parse(localStorage.getItem("myntra_prodData"));
    var myntra_data = "";
    var divToInsertProducts = document.getElementById("myntra_insert");

    for(var i=0;i<ls.length;i++){
        myntra_data += `<div><img src="${ls[i].m_prodImg}" alt="" /> <h4>${ls[i].m_prodName}</h4> <p>${ls[i].m_prodDesc}</p> <h5>Rs. ${ls[i].m_prodPrice} <s>Rs.1299</s> <b>(66% off)</b></h5></div>`;
        divToInsertProducts.innerHTML = myntra_data;
    }


    if(myntra_currentUser){
        var myntra_div = document.getElementById("myntra_current_user");
        var removeTag = document.getElementById("myntra_remove_tag");
        removeTag.remove();

        var h5 = document.createElement("h5");
        h5.innerText = myntra_currentUser.userName;
        myntra_div.append(h5);

        var logout_div = document.getElementById("myntra_logout");
        var logout = `<button class="logout_style" onclick="myntra_logout()"><i class="fa-solid fa-arrow-right-from-bracket"></i> <h5>logout</h5></button>`;
        logout_div.innerHTML = logout;

    } else {
        console.log("Current User is absent");
    }
}

function myntra_logout(){
    localStorage.removeItem("myntra_current_user");
    window.location.reload();
}