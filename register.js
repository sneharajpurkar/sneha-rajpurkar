function register(event){
    event.preventDefault();

    var userName = document.getElementById("name").value;
    var userEmail = document.getElementById("email").value;
    var userPassword = document.getElementById("password").value;
    var userData = { name:userName, email:userEmail, password:userPassword }

    var dataFromLS = JSON.parse(localStorage.getItem("userData")) || [];
    console.log(dataFromLS,"dataFromLS");

    var flag = false;
    for(var i = 0; i < dataFromLS.length; i++){
        if(dataFromLS[i].email === userEmail){
            flag = true;
        }
        if(flag === true){
            alert("wrong cred, please check email and password");
        }
        else if(userPassword.length < 8){
            alert("password must be 8 digit");
        }
        else{
            dataFromLS.push(userData);
            localStorage.setItem("userData", JSON.stringify(dataFromLS));
            document.getElementById("name").value=" ";
            document.getElementById("email").value=" ";
            document.getElementById("password").value=" ";
            window.location.href = "/snapdeal.html";
            alert("registration done");
        }
    }
  }