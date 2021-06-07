window.addEventListener('load', loadHandler);

function loadHandler(){
    let customers = [
        {naam:'Soons',voornaam:'Nick',email:'Nick.Soons@omnia-console.com', password:'NS1112'},
        {naam: "Janssens", voornaam: "Jorne", email: "Jorne.Janssens@omnia-console.com", password: "JJ1806"},
        {naam: "Siongers", voornaam: "Robbe", email: "Robbe.Siongers@omnia-console.com", password: "RS3006"},
        {naam: "Coomans", voornaam: "Jan", email: "Jan.Coomans@omnia-console.com", password: "JC2004"},
        {naam: "Nenczl", voornaam: "Alexanader", email: "Alexander.Nenczl@omnia-console.com", password: "AN0708"}
    ];

    document.getElementById("login").addEventListener("click", login);

    function login(){
        console.log("login");
        if (isAccountValid()){
            redirect()
        }
    }

    function isAccountValid(){
        console.log("isAccountValid");
        let email = document.getElementById("emailAdress").value;
        let password = document.getElementById("password").value;

        if (isInputNull(email, password)){
            return null;
        }

        for (let counter = 0; counter < customers.length; counter++) {
            let person = customers[counter];
            if (person.email === email && person.password === password){
                return true;
            }
        }
        showErrorInputInvalid();
    }

    function isInputNull(email, password){
        if (email === "" || email === null || password === "" || password === null){
            showErrorEmptyInput();
            return true;
        }
        return false;
    }

    function showErrorEmptyInput(){
        let errorMessage = "Please Fill All Required Fields";
        alert(errorMessage);
    }

    function showErrorInputInvalid(){
        let errorMessage = "Mail or Password is incorrect.";
        alert(errorMessage);
    }

    function redirect(){
        document.location.href = "./index.html";
    }
}




