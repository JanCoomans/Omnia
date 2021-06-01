/*Dit is een testcomment please deleted*/
window.addEventListener('load', loadHandler);

function loadHandler(){
    shoppingCart();
    document.getElementById("header-search-input").style.display = "none";
    document.getElementById("header-search-button").addEventListener("click", toggleSearchBar);
}

function shoppingCart(){
<<<<<<< HEAD
    let shoppingCart = document.getElementById("overlay");
    let shoppingNumber = localStorage.getItem("shoppingCart");
    if (shoppingNumber > 0){
        shoppingCart.style.display = "unset";
        if (shoppingCart.hasChildNodes()){
            shoppingCart.removeChild(shoppingCart.firstChild);
        }
        shoppingCart.appendChild(document.createTextNode(shoppingNumber))
    }
=======
    let shoppingNumber = document.getElementById("overlay");

    shoppingNumber.appendChild(document.createTextNode(localStorage.getItem("shoppingCart")))
>>>>>>> parent of 2bc286b (Merge branch 'main' of https://github.com/friscit/Omnia into main)
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
