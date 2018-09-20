function validateForm() {
    document.getElementById("usernamediv").innerHTML="";
    document.getElementById("passworddiv").innerHTML="";
    document.getElementById("firstnamediv").innerHTML="";
    document.getElementById("lastnamediv").innerHTML="";
    document.getElementById("emaildiv").innerHTML="";
    document.getElementById("locationdiv").innerHTML="";
    if (validate_username() && validate_password() && validate_firstname() && validate_lastname() && validate_email() && validate_location()) {
        submitData();
        return true;
    } else {
        return false;
    }
}

function validate_username(){
    if (document.getElementById('username').value != ""){
        return true;
    }else{
        document.getElementById("username").focus();
        document.getElementById("usernamediv").innerHTML="Enter username";
        document.getElementById("usernamediv").style.color="Red";
        return false;
    }
}
function validate_password(){
    if (document.getElementById('password').value.length >=6){
        return true;
    }else{
        if (document.getElementById('password').value == ""){
            document.getElementById("password").focus();
            document.getElementById("passworddiv").innerHTML="Enter password";
            document.getElementById("passworddiv").style.color="Red";
        }else if(document.getElementById('password').value.length <6){
            document.getElementById("password").focus();
            document.getElementById("passworddiv").innerHTML="Password should have atleast 6 characters";
            document.getElementById("passworddiv").style.color="Red";
        }
        return false;
    }
}
function validate_firstname(){
    if (document.getElementById('firstname').value != ""){
        return true;
    }else{
        document.getElementById("firstname").focus();
        document.getElementById("firstnamediv").innerHTML="Enter firstname";
        document.getElementById("firstnamediv").style.color="Red";
        return false;
    }
}
function validate_lastname(){
    if (document.getElementById('lastname').value != ""){
        return true;
    }else{
        document.getElementById("lastname").focus();
        document.getElementById("lastnamediv").innerHTML="Enter lastname";
        document.getElementById("lastnamediv").style.color="Red";
        return false;
    }
}
function validate_email(){
    var reg = /^([a-zA-Z0-9_\.\-]{3,})+\@(([a-zA-Z0-9\-]{3,})+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (reg.test(document.getElementById('email').value)){
        return true;
    }else{
        if(document.getElementById('email').value == ""){
            document.getElementById("email").focus();
            document.getElementById("emaildiv").innerHTML="Enter email";
            document.getElementById("emaildiv").style.color="Red";
        }
        else if(!reg.test(document.getElementById('email').value)){
            document.getElementById("email").focus();
            document.getElementById("emaildiv").innerHTML="Enter valid email";
            document.getElementById("emaildiv").style.color="Red";
        }
        return false;
    }
}
function validate_location(){
    if (document.getElementById('location').value != ""){
        return true;
    }else{
        document.getElementById("location").focus();
        document.getElementById("locationdiv").innerHTML="Enter location";
        document.getElementById("locationdiv").style.color="Red";
        return false;
    }
}

function submitData() {
    var obj = {
        "username": document.getElementById('username').value,
        "password": document.getElementById('password').value,
        "firstname": document.getElementById('firstname').value,
        "lastname": document.getElementById('lastname').value,
        "email": document.getElementById('email').value,
        "location": document.getElementById('location').value,
        "gender": document.getElementById('gender').value,
    };
    var userData = [];
    if (window.localStorage.getItem('userData')) {
        userData = JSON.parse(window.localStorage.getItem('userData'));
    }
    userData.push(obj);
    window.localStorage.setItem('userData', JSON.stringify(userData));
}

if (window.localStorage.getItem('userData')) {
    document.getElementById("users").style.visibility = "visible";
    userData = JSON.parse(window.localStorage.getItem('userData'));
    var table = document.getElementById("users");
    var tbody = document.createElement("tbody");
    table.appendChild(tbody);
    for (i = 0; i < userData.length; i++) {
        var row = document.createElement("tr");
        var username = document.createElement("td");
        username.textContent = userData[i].username;
        row.appendChild(username);
        var password = document.createElement("td");
        password.textContent = userData[i].password;
        row.appendChild(password);
        var firstname = document.createElement("td");
        firstname.textContent = userData[i].firstname;
        row.appendChild(firstname);
        var lastname = document.createElement("td");
        lastname.textContent = userData[i].lastname;
        row.appendChild(lastname);
        var email = document.createElement("td");
        email.textContent = userData[i].email;
        row.appendChild(email);
        var gender = document.createElement("td");
        gender.textContent = userData[i].gender;
        row.appendChild(gender);
        var loc = document.createElement("td");
        loc.textContent = userData[i].location;
        row.appendChild(loc);
        tbody.appendChild(row);
    }
} else {
    document.getElementById("users").style.visibility = "hidden";
}