function Validate(){
    /*initial empty variables*/
    let FirstNameCheck = false;
    let LastNameCheck = false;
    let EmailCheck = false;
    let PhoneCheck = false;
    let MessageCheck = false;
    let CheckCheck = false;
    /*variables to check input with*/
    let Mail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    let PhoneNumber = /^\d{10}$/;
    /*getting the values from the form*/
    let FirstName = document.getElementById("FirstName").value;
    let LastName = document.getElementById("LastName").value;
    let Email = document.getElementById("Email").value;
    let Phone = document.getElementById("Phone").value;
    let Message = document.getElementById("Message").value;
    let Check = document.getElementById("Check").checked;
    let HeightBox = 1;
    /*validation first name*/
    if(FirstName.length > 0)
    {
        FirstNameCheck = true;
    }
    else {
        /*removing of previous errors*/
        if(document.getElementById("Error1") != null)
        {
            document.getElementById("Error1").remove();
        }

        let Paragraph = document.createElement("p");
        Paragraph.id = "Error1";
        let Inhoud = document.createTextNode("Fill in your name");
        Paragraph.appendChild(Inhoud);
        let ErrorFirstName = document.getElementById("ErrorFirstName");
        ErrorFirstName.appendChild(Paragraph);
        document.getElementById("ErrorFirstName").style.color = "#f00";
    }
    /*validation last name*/
    if(LastName.length > 0)
    {
        LastNameCheck = true;
    }
    else {
        /*removing of previous errors*/
        if(document.getElementById("Error2") != null)
        {
            document.getElementById("Error2").remove();
        }

        let Paragraph = document.createElement("p");
        Paragraph.id = "Error2";
        let Inhoud = document.createTextNode("Fill in your last name");
        Paragraph.appendChild(Inhoud);
        let ErrorLastName = document.getElementById("ErrorLastName");
        ErrorLastName.appendChild(Paragraph);
        document.getElementById("ErrorLastName").style.color = "#f00";
    }
    /*validation e-mail*/
    if(Email.match(Mail))
    {
        EmailCheck = true;
    }
    else {
        /*removing of previous errors*/
        if(document.getElementById("Error3") != null)
        {
            document.getElementById("Error3").remove();
        }

        let Paragraph = document.createElement("p");
        Paragraph.id = "Error3";
        let Inhoud = document.createTextNode("Fill in a valid e-mail address");
        Paragraph.appendChild(Inhoud);
        let ErrorEmail = document.getElementById("ErrorEmail");
        ErrorEmail.appendChild(Paragraph);
        document.getElementById("ErrorEmail").style.color = "#f00";
    }
    /*validation phone*/
    if(Phone.match(PhoneNumber)){
        PhoneCheck = true;
    }else{
        /*removing of previous errors*/
        if(document.getElementById("Error4") != null)
        {
            document.getElementById("Error4").remove();
        }

        let Paragraph = document.createElement("p");
        Paragraph.id = "Error4";
        let Inhoud = document.createTextNode("Fill in a valid phone number");
        Paragraph.appendChild(Inhoud);
        let ErrorFirstName = document.getElementById("ErrorPhone");
        ErrorFirstName.appendChild(Paragraph);
        document.getElementById("ErrorPhone").style.color = "#f00";
    }
    /*validation message*/
    if(Message !== ""){
        MessageCheck = true;
    }else{
        /*removing of previous errors*/
        if(document.getElementById("Error5") != null)
        {
            document.getElementById("Error5").remove();
        }

        let Paragraph = document.createElement("p");
        Paragraph.id = "Error5";
        let Inhoud = document.createTextNode("Fill in a message");
        Paragraph.appendChild(Inhoud);
        let ErrorFirstName = document.getElementById("ErrorMessage");
        ErrorFirstName.appendChild(Paragraph);
        document.getElementById("ErrorMessage").style.color = "#f00";
    }
    /*validation check*/
    if(Check === true){
        CheckCheck = true;
    }else{
        /*removing of previous errors*/
        if(document.getElementById("Error6") != null)
        {
            document.getElementById("Error6").remove();
        }

        let Paragraph = document.createElement("p");
        Paragraph.id = "Error6";
        let Inhoud = document.createTextNode("Check this box");
        Paragraph.appendChild(Inhoud);
        let ErrorFirstName = document.getElementById("ErrorCheck");
        ErrorFirstName.appendChild(Paragraph);
        document.getElementById("ErrorCheck").style.color = "#f00";
        document.getElementById("Policy").style.color = "#000";
    }
    /*Fixing height of box when errors display*/
    if(FirstNameCheck !== true)
    {
        HeightBox++
    }
    if(LastNameCheck !== true)
    {
        HeightBox++
    }
    if(EmailCheck !== true)
    {
        HeightBox++
    }
    if(PhoneCheck !== true)
    {
        HeightBox++
    }
    if(MessageCheck !== true)
    {
        HeightBox++
    }
    if(CheckCheck !== true)
    {
        HeightBox++
    }
    if(HeightBox > 5){
        document.getElementById("block_2").style.height = "auto";
        document.getElementById("block_1").style.height = "auto";
    }
    console.log(LastNameCheck);
    console.log(FirstNameCheck);
    console.log(EmailCheck);
    console.log(PhoneCheck);
    console.log(MessageCheck);
    console.log(CheckCheck);
    /*checking if all fields give true*/
    if(LastNameCheck === true && FirstNameCheck === true && EmailCheck === true && PhoneCheck === true && MessageCheck === true && CheckCheck === true){
        return true;
    }
}
document.getElementById("sendbutton").addEventListener("click", SendMail);{

}
function SendMail(){
    if(Validate()){
        /*Hier moet de mailto of verzending van de message*/
        /*removing of previous done messages*/
        if(document.getElementById("valid") != null)
        {
            document.getElementById("valid").remove();
        }

        let Paragraph = document.createElement("p");
        Paragraph.id = "valid";
        let Inhoud = document.createTextNode("Your message has been successfully sent");
        Paragraph.appendChild(Inhoud);
        let Done = document.getElementById("Done");
        Done.appendChild(Paragraph);
        document.getElementById("Done").style.color = "#0F0";
    }
}