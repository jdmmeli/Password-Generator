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
    

    var optlowercase = confirm("Click ok to include lowercase letters");

    console.log(optlowercase)

    var optUppercase = confirm("CLick ok to include uppercase letters");
    console.log(optUppercase);

    var optNumbers = confirm("CLick ok to include numbers");
    console.log(optNumbers);

    var optSpecial = confirm("click ok to include special characters");
    console.log(optSpecial);

    var userCriteria = confirm("You have chosen " + length +  lowercase +  uppercase +  numbers +  special);
    console.log(userCriteria);
}

generate ();

 

 function generate() {

    if (optlowerCase) {
        passwordValues += lowerCase;
    }

    if (optUppercase) {
        passwordValues += upperCase;
    }

    if (optNumbers) {
        passwordValues += numbers;
    }

    if (optSpecial) {
        passwordValues =+ special;
    }
for (var i = 0; i < length; i ++) {
        
   passsword = passwordValues.charAt(Math.floor(Math.random() * Math.floor(password.length - 1)))
}
}  
