let klanten = [
    {naam:'Soons',voornaam:'Nick',email:'Nick.Soons@omnia-console.com', password:'NS1112'},
    {naam: "Janssens", voornaam: "Jorne", email: "Jorne.Janssens@omnia-console.com", password: "JJ1806"},
    {naam: "Siongers", voornaam: "Robbe", email: "Robbe.Siongers@omnia-console.com", password: "RS3006"},
    {naam: "Coomans", voornaam: "Jan", email: "Jan.Coomans@omnia-console.com", password: "JC2004"},
    {naam: "Nenczl", voornaam: "Alexanader", email: "Alexander.Nenczl@omnia-console.com", password: "AN0708"}
];

document.getElementById("login").addEventListener("click", controleAccount);
function controleAccount(){
    let gebruikersnaam = document.getElementById("emailAdress").value;
    let password = document.getElementById("password").value;

    console.log(gebruikersnaam);
    console.log(password);

        // if (klanten.email === gebruikersnaam && klanten.password === password){
        //     console.log("Succes");
        // }
        // else {
        //     console.log("Failure");
        // }
    if (gebruikersnaam == klanten.email){
        console.log("email is oke")
    }
    else{
        console.log("email is niet oke")
    }
    if (password == klanten.password){
        console.log("password is oke")
    }
    else{
        console.log("password is niet oke")
    }


}


document.getElementById("header-search-input").style.display = "none";
document.getElementById("header-search-button").addEventListener("click", toggleSearchBar);


function toggleSearchBar() {
    let item = document.getElementById("header-search-input");
    if(item.style.display === "none"){
        item.style.display = "unset";
    }
    else{
        redirect()
    }

    function redirect(){
        let input = document.getElementById("header-search-input").value;
        document.location.href = "./" + input + ".html";
    }
}


