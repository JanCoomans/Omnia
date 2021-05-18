let klanten = [
    {naam:'Soons',voornaam:'Nick',email:'Nick.Soons@omnia.com', password:'OMNIA123'},
    {naam: "Jansens", voornaam: "Jorne", email: ""}
];

document.getElementById("login").addEventListener("click", controleAccount);
function controleAccount(){
    let gebruikersnaam = document.getElementById("emailAdress").valueOf();
    let password = document.getElementById("password").valueOf();

    let gebruikeersNaamValue = gebruikersnaam.value();
    let passwordvaalue = password.value();

    alert(gebruikeersNaamValue + " " + passwordvaalue);
    // console.log(gebruikersnaam + " " + password);

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


