/*Dit is een testcomment please deleted*/
/*initial empty variables*/
let FirstNameCheck = null
let LastNameCheck = null
let EmailCheck = null

function Validate(){
    /*variables to check input with*/
    let letters = /^[A-Za-z]+$/;
    let mail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    /*getting the values from the form*/
    let FirstName = document.getElementById("FirstName").value;
    console.log(FirstName);
    let LastName = document.getElementById("LastName").value;
    console.log(LastName);
    let Email = document.getElementById("Email").value;
    console.log(Email);

    let Phone = document.getElementById("Phone").value;
    console.log(Phone);
    let Message = document.getElementById("Message").value;
    console.log(Message);
    let Check = document.getElementById("Check").checked;
    console.log(Check);

    /*validation first name*/
    if(FirstName.match(letters))
    {
        let FirstNameCheck = true;
        console.log(FirstNameCheck);
    }
    else
    {
        alert("Fill in your name without numbers");
    }
    /*validation last name*/
    if(LastName.match(letters))
    {
        let LastNameCheck = true;
        console.log(LastNameCheck);
    }
    else
    {
        alert("Fill in your last name without numbers");
    }
    /*validation e-mail*/
    if(Email.match(mail))
    {
        let EmailCheck = true;
        console.log(EmailCheck);
    }
    else
    {
        alert("Fill in a valid e-mail address");
    }
    /*checking if all fields give true*/
    if(LastNameCheck === true && FirstNameCheck === true && EmailCheck === true){
        return true;
    }
}
document.getElementById("button").addEventListener("click", SendMail);{

}
function SendMail(){
    Validate();
    if(Validate){
        /*Hier moet de mailto*/
    }else{
        /*Hier moet een error*/
    }
}