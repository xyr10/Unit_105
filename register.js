//create the constructor function for User
function User(e,p,f,l,a,d,n,m,c){
    this.email=e; 
    this.password=p;
    this.firstname=f;
    this.lastname=l;
    this.age=a;
    this.address=d;
    this.phonenumber=n;
    this.payment=m;
    this.color=c;

}
//create a Valid
function validate(user){

    let valid = true; 

    //reset html styles
    $("#txtEmail").removeClass("error");
    $("#txtPassword").removeClass("error");
    $("#txtFirstName").removeClass("error");
    $("#txtLastName").removeClass("error");
    $("#selPayment").removeClass("error");
    
    if (user.email === "")  { 
        valid = false;        
        $("#txtEmail").addClass("error");
    }
    if (user.password === "") {
        valid = false;
        $("#txtPassword").addClass("error");
    }
    if (user.firstname === "") {
        valid = false;
        $("#txtFirstName").addClass("error");
    }
    if (user.lastname === "") {
        valid = false;
        $("#txtLastName").addClass("error");
    }
    if (user.payment === "") {
        valid = false;
        $("#selPayment").addClass("error");
    }
    //otherwise
    return valid; 
}
    //note that this function has a return (I don't believe constructors has a return)

    //Create the register function using JQuery (Assignment 105.1.2)
function register(){
    //get the values from the inputs in the form
    let inputEmail = $("#txtEmail").val();
    let inputPassword = $("#txtPassword").val();
    let inputFirstName = $("#txtFirstName").val();
    let inputLastName = $("#txtLastName").val();
    let inputAge = $("#txtAge").val();
    let inputAddress = $("#txtAddress").val();
    let inputPhoneNumber = $("#txtPhoneNumber").val();
    let inputPayment = $("#selPayment").val();
    let inputColor = $("#selColor").val();

//create the newUser object
let newUser = new User(inputEmail, inputPassword, inputFirstName, inputLastName, inputAge, inputAddress, inputPhoneNumber, inputPayment, inputColor);

//display the newUser on the console (Assignment 105.1.5)
    console.log(inputEmail, inputPassword, inputFirstName, inputLastName, inputAge, inputAddress, inputPhoneNumber, inputPayment, inputColor);

    if(validate(newUser)===true){
        console.log(newUser);
    }

//clear the form using JQuery (Assignment 105.1.6)
    $("input").val("");
}
function init(){
console.log("Init");

}

window.onload=init;

let userID=0;
//object constructor
