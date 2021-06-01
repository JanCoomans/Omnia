window.addEventListener('load', loadHandler);

function loadHandler(){
    let shopItemCount = getShopItems();
    shoppingCart(shopItemCount);

    document.getElementById("header-search-input").style.display = "none";
    document.getElementById("header-search-button").addEventListener("click", toggleSearchBar);


    document.getElementById("addShopItem").addEventListener("click", function (){shopItemCount++; refreshShopItems(shopItemCount)} );
    document.getElementById("removeShopItem").addEventListener("click", function (){if (shopItemCount > 0){shopItemCount--;refreshShopItems(shopItemCount)}});
    document.getElementById("saveShopItems").addEventListener("click", function (){saveShopItems(shopItemCount)});
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

function shoppingCart(shopItemCount){
    let shoppingCart = document.getElementById("overlay");
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

