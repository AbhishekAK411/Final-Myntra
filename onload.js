window.onload = () =>{
    var myntra_currentUser = JSON.parse(localStorage.getItem("myntra_current_user"));
    // console.log(myntra_currentUser);


    var ls = JSON.parse(localStorage.getItem("myntra_prodData"));
    var myntra_data = "";
    var divToInsertProducts = document.getElementById("myntra_insert");

    for(var i=0;i<ls.length;i++){
        myntra_data += `<div onclick='myntra_redirect(${JSON.stringify(ls[i])})'><img src="${ls[i].m_prodImg}" alt="" /> <h4>${ls[i].m_prodName}</h4> <p>${ls[i].m_prodDesc}</p> <h5>Rs. ${ls[i].m_prodPrice} <s>Rs.1299</s> <b>(66% off)</b></h5></div>`;
        divToInsertProducts.innerHTML = myntra_data;
    }
}

function myntra_redirect(myntra_product){
    var myntra_currentProduct = JSON.stringify(myntra_product);

    localStorage.setItem("myntra_currentProd", myntra_currentProduct);
    window.location.href = `./singleproduct.html`;

}

function myntra_logout(){
    localStorage.removeItem("myntra_current_user");
    window.location.reload();
}