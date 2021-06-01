window.addEventListener('load', loadHandler);

function loadHandler(){
    shoppingCart();

    document.getElementById("header-search-input").style.display = "none";
    document.getElementById("header-search-button").addEventListener("click", toggleSearchBar);

    let shopItemCount = getShopItems();
    document.getElementById("addShopItem").addEventListener("click", function (){shopItemCount++; addShopItem(shopItemCount)} );
    document.getElementById("removeShopItem").addEventListener("click", function (){shopItemCount--; removeShopItem(shopItemCount)});
    document.getElementById("saveShopItems").addEventListener("click", function (){saveShopItems(shopItemCount)});
}

function shoppingCart(){
    let shoppingCart = document.getElementById("overlay");
    let shoppingNumber = localStorage.getItem("shoppingCart");
    if (shoppingNumber > 0){
        shoppingCart.style.display = "unset";
        if (shoppingCart.hasChildNodes()){
            shoppingCart.removeChild(shoppingCart.firstChild);
        }
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

function getShopItems(shopItemCount){
    let itemCount = document.getElementById("shopItemCount");
    if (localStorage.getItem("shoppingCart") > 0){
        itemCount.appendChild(document.createTextNode(localStorage.getItem("shoppingCart")));
        return localStorage.getItem("shoppingCart");
    }
    else{itemCount.appendChild(document.createTextNode(0));}
    return 0;
}

function addShopItem(shopItemCount){
    let itemCount = document.getElementById("shopItemCount");
    if (itemCount.hasChildNodes()){
        itemCount.removeChild(itemCount.firstChild);
    }
    itemCount.appendChild(document.createTextNode(shopItemCount))
}

function removeShopItem(shopItemCount){}

function saveShopItems(){
    let itemCount = document.getElementById("shopItemCount");
    if (itemCount.innerHTML !== localStorage.getItem("shoppingCart")){
        localStorage.setItem("shoppingCart", itemCount.innerHTML);
    }
}

