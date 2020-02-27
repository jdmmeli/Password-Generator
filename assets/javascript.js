var length = 0;
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var special = "!@#$%^&*()";
var password = ""
var passwordValues = ""

function userCriteria () {
    var length = prompt("Please choose length of password, between 8-125 characters");
    if (length < 8) {
        prompt("Must have at least 8 characters");    
    }
    else if (length > 125) {
        prompt("Must be 125 characters or less")
    }
      console.log(length);
    

    var lowerCase = confirm("Click ok to include lowercase letters");

    console.log(lowerCase)

    var upperCase = confirm("CLick ok to include uppercase letters");
    console.log(upperCase);

    var numbers = confirm("CLick ok to include numbers");
    console.log(numbers);

    var special = confirm("click ok to include special characters");
    console.log(special);

    var userCriteria = confirm("You have chosen " + length +  lowercase +  uppercase +  numbers +  special)
    console.log(userCriteria)
}

generate ()

 

 function generate() {

  passwordValues = "!@#$%^&*()abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
  password = ""

    for (var i = 0; i <= 125; i ++) {
        
   passsword = password + userCriteria.charAt(Math.floor(Math.random() * Math.floor(password.length - 1)))
   console.log(password)
}
}  
