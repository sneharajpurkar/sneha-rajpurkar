function register(event){
    event.preventDefault();

    var userName = document.getElementById("userName").value;
    var userEmail = document.getElementById("userEmail").value;
    var userPassword = document.getElementById("userPassword").value;
    var userData = { name:userName, email:userEmail, password:userPassword }

    var dataFromLS = JSON.parse(localStorage.getItem("userData")) || [];
    console.log(dataFromLS,'dataFromLS');
    dataFromLS.push(userData);

    var flag = false;
    for(var i=0; i<dataFromLS.length; i++){
        if(dataFromLS[i].email === userEmail){
            flag = true;
        }
        if(flag === true){
            localStorage.setItem("userData", JSON.stringify(dataFromLS));
            document.getElementById("userName").value="";
            document.getElementById("userEmail").value="";
            userPassword = document.getElementById("userPassword").value="";
            window.location.href = "/login.html";
            alert("registration done");
        }
        else if(userPassword.length < 8){
            alert("password must be 8 digit");
        }
        else{
            alert("wrong cred, please check email and password");
        }
    }
}

function login(event){
    event.preventDefault();

    var userEmail = document.getElementById("userEmail").value;
    var userPassword = document.getElementById("userPassword").value;

    var dataFromLS = JSON.parse(localStorage.getItem("userData"));
    console.log(dataFromLS,'dataFromLS');

    var flag = false;
    for(var i=0; i<dataFromLS.length; i++){
        if(dataFromLS[i].email === userEmail && dataFromLS[i].password === userPassword){
            flag = true;
        } 
        if(flag === true){
            document.getElementById("userEmail").value="";
            document.getElementById("userPassword").value="";
            var user = {};
            user["current-email-user"] = userEmail;
            localStorage.setItem("current-user", JSON.stringify(user));
            window.location.href = "/snapdeal.html";
            alert("logged in done");
        }
        else{
            alert("please check email and password");
        }
    }
}

function addToLs(){
    var proName = document.getElementById("name").value;
    var proImage = document.getElementById("image").value;
    var proPrice = document.getElementById("price").value;

    var product = { name:proName, image:proImage, price:proPrice}

    var dataFromLS = JSON.parse(localStorage.getItem("products")) || [] ;
    dataFromLS.push(product);

    localStorage.setItem("products", JSON.stringify(dataFromLS));
    window.location.href = "/show-products.html";
    alert("product added");
}