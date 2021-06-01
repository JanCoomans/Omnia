window.addEventListener('load', loadHandler);

function loadHandler(){
    shoppingCart();
    document.getElementById("header-search-input").style.display = "none";
    document.getElementById("header-search-button").addEventListener("click", toggleSearchBar);
}

function shoppingCart(){
    let shoppingCart = document.getElementById("overlay");
    let shoppingNumber = localStorage.getItem("shoppingCart");
    if (shoppingNumber > 0){
        shoppingCart.style.display = "unset";
        shoppingCart.appendChild(document.createTextNode(shoppingNumber))
    }
}

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
