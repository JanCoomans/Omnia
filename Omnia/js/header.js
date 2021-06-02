window.addEventListener('load', loadHandler);

function loadHandler(){
    document.getElementById("header-search-input").style.display = "none";
    document.getElementById("header-search-button").addEventListener("click", toggleSearchBar);

    updateShoppingCartLabel();
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

// Old code:  I need this as cheat cheet for new code.
/*
function shoppingCart(shopItemCount){
    let shoppingCart = document.getElementById("shoppingCartLabel");
    if (shopItemCount > 0){
        shoppingCart.style.display = "unset";
        if (shoppingCart.hasChildNodes()){
            shoppingCart.removeChild(shoppingCart.firstChild);
        }
        shoppingCart.appendChild(document.createTextNode(shopItemCount))
    }
    else {
        shoppingCart.style.display = "none";
    }
}

function getShopItems(shopItemCount){
    let itemCount = document.getElementById("shopItemCount");
    if (localStorage.getItem("shoppingCart") > 0){
        itemCount.appendChild(document.createTextNode(localStorage.getItem("shoppingCart")));
        return localStorage.getItem("shoppingCart");
    }
    else{itemCount.appendChild(document.createTextNode("0"));}
    return 0;
}

function refreshShopItems(shopItemCount){
    let itemCount = document.getElementById("shopItemCount");
    if (itemCount.hasChildNodes()){
        itemCount.removeChild(itemCount.firstChild);
    }
    itemCount.appendChild(document.createTextNode(shopItemCount))
}

function saveShopItems(shopItemCount){
    if (shopItemCount !== localStorage.getItem("shoppingCart")){
        localStorage.setItem("shoppingCart", shopItemCount);
    }
    shoppingCart(shopItemCount);
}
*/


function updateShoppingCart(){}

function updateShoppingCartLabel(){
    let shoppingCartLabel = document.getElementById("shoppingCartLabel");
    let labelNumber = getShoppingListLength();
    if (labelNumber > 0){
        if (shoppingCartLabel.hasChildNodes()){
            shoppingCartLabel.removeChild(shoppingCartLabel.firstChild);
        }
        shoppingCartLabel.appendChild(document.createTextNode(labelNumber))
        shoppingCartLabel.style.display = "unset";
    }
    else{
        shoppingCartLabel.style.display = "none";
    }
}

function getShoppingListLength(){ // !! Games not implemented
    let shoppingList = JSON.parse(localStorage.shoppingList)
    let shoppingListLength = 0;
    consoleCount();

    function consoleCount(){
        let consoleList = shoppingList["consoles"];
        for (let key in consoleList){
            shoppingListLength += consoleList[key]["count"];
        }
    }

    function gameCount(){}

    return shoppingListLength;
}

function SaveShopInLocalStorage(shoppingList){
    localStorage["shoppingList"] = JSON.stringify(shoppingList);
}

/* Need for later!
let buyButtons = document.getElementsByClassName("pre-order");
    for (let i = 0; i < buyButtons.length; i++){
        buyButtons[i].addEventListener("click", preOrder);
    }
*/
