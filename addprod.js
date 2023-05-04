function myntra_prodData(event){
    event.preventDefault();

    var m_prodName = document.getElementById("myntra_prodName").value;
    var m_prodDesc = document.getElementById("myntra_prodDesc").value;
    var m_prodPrice = document.getElementById("myntra_prodPrice").value;
    var m_prodImg = document.getElementById("myntra_prodImg").value;

    if(m_prodName && m_prodDesc && m_prodPrice && m_prodImg){
        var myntra_storage = JSON.parse(localStorage.getItem("myntra_prodData")) || [];
        var prod_data = {m_prodName, m_prodDesc, m_prodPrice, m_prodImg};
        myntra_storage.push(prod_data);
        localStorage.setItem("myntra_prodData", JSON.stringify(myntra_storage));
        alert("Product Added");
    } else {
        alert("All fields are mandatory");
    }

}