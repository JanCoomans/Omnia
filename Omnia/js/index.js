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



