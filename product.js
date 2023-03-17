window.onload = function () {
    var products = JSON.parse(localStorage.getItem("products"));

    var divFromHtml = document.getElementById("products");

    var array = [];
    for (var i = 0; i < products.length; i++) {
        array += `<div><img src="${products[i].image}"><br/><h3>${products[i].name}</h3><p>${products[i].price}</p><button onclick=addTocart(${JSON.stringify(products[i])})>Add to cart</button></div>`
    }
    divFromHtml.innerHTML = array;

    alert("product show");
}

function addTocart(pro) {
    var product = JSON.stringify(pro);
    var dataFromLS = JSON.parse(localStorage.getItem("userData"));
    var currentUser = JSON.parse(localStorage.getItem("current-user"));
    if(currentUser){
        var allUsers = [];
        for(var i =0; i < dataFromLS.length ; i++ ){
            if(dataFromLS[i].email === currentUser["current-email-user"] ){
                var newObj = dataFromLS[i];
                newObj["cartProducts"] = newObj["cartProducts"] || [];
                newObj["cartProducts"].push(JSON.parse(product));
                allUsers.push(newObj)

            } else {
                allUsers.push(dataFromLS[i])
            }
        }
        localStorage.setItem("userData", JSON.stringify(allUsers));
        window.location.href = "/show-products.html"
        alert("Product added to cart!");
    } else {
        alert("Login first to add product into cart!")
    }
}