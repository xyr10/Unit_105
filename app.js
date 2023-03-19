//Cpture Input from HTML into a variable Username
let username = "";

function register(){
     let password = document.getElementById("password").value; 
    let username = document.getElementById("userName").value; 
    if(password.length < 5){
        console.log("Not a valid password")
    }else {
        console.log(password = "is a valid password")
    }    
    if(username.length < 3){
        console.log("Not a valid username")
    }else {
        console.log(username = "is a valid username")
    }    

}

//after the input is captured console.log the value
//Make a validator that checks the length of the username, if the length is <3 cosole.log not a valid input. If it is > 3, console.log valid and the value of the input

//create a password variable to capture password input. If the length is less than 5 console.log not a valid passwrord. If it is, then console.log valid password.

//If both password and username are valide, console log VALID
