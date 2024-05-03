//injecting header and footer in all pages except home page
function myFunction(){
    document.getElementById("header");
    document.getElementById("footer");
}

//login button alert
function validateLogin()
{
    var validEmail = 'admin@admin.com';
    var validPassword = '123456';
    var emailInput = document.getElementById('Email').value;
    var passwordInput = document.getElementById('Password').value;
    if(emailInput === validEmail && passwordInput === validPassword)   //if-else condition
    {
        alert('Login successful');
    } else
    {
        alert('Incorrect email or password!');
    }
}
