window.addEventListener('load', loadHandler);

function loadHandler(){
    document.getElementById("header-search-input").style.display = "none";
    document.getElementById("header-search-button").addEventListener("click", toggleSearchBar);
    document.getElementById("header-cart_button").addEventListener("click", updateShoppingCart);
    document.getElementById("saveShopItems").addEventListener("click", saveShoppingCart);

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

function updateShoppingCart(){
    if (typeof localStorage.shoppingList != "string"){console.log("No shopping list found."); return} // Return if no list is found.

    let shoppingList = JSON.parse(localStorage.shoppingList);
    let sectionParent = document.getElementById("modalBody");
    while (sectionParent.firstChild) {
        sectionParent.removeChild(sectionParent.lastChild);
    }
    updateConsoles();

    function updateConsoles(){
        let index = 0;
        for (let key in shoppingList["consoles"]){
            if (shoppingList["consoles"][key]["count"] > 0){
                generateSection(shoppingList["consoles"][key], key, "console", index);
                console.log(`${key} console toegevoegd aan shopping list.`);
                index++;
            }
        }
    }

    //function updateGames(){}

    function generateSection(itemObject, key, altTag, idNumber){
        let row = document.createElement("div");
        row.className = "row";

        let imageParent = document.createElement("div");
        imageParent.className = "col-6 pr-0 d-flex align-items-center";
        let image = document.createElement("img");
        image.src = `./assets/img/${itemObject["image"]}`;
        image.alt = altTag;

        let contentParent = document.createElement("div");
        contentParent.className = "col-6 text-center d-flex align-items-center justify-content-center";
        let contentContainer = document.createElement("div");
        let title = document.createElement("h4");
        title.className = "font-titillium-web font-weight-semibold";
        let buttonsContainer = document.createElement("div");
        buttonsContainer.className = "row justify-content-around";
        let pricing = document.createElement("h6");
        pricing.className = "mb-0 mt-1";
        pricing.id = `pricing-${idNumber}`;

        let removeContainer = document.createElement("div");
        removeContainer.className = "col-3";
        let remove = document.createElement("button");
        remove.className = "btn btn-primary w-100";
        //remove.id = `remove-${idNumber}`;
        let productCountContainer = document.createElement("div");
        productCountContainer.className = "col-4";
        let productCount = document.createElement("div");
        productCount.className = "bg-primary d-inline-block text-white w-100 h-100";
        productCount.id = `productCount-${idNumber}`;
        let addContainer = document.createElement("div");
        addContainer.className = "col-3";
        let add = document.createElement("button");
        add.className = "btn btn-primary w-100";
        //add.id = `add-${idNumber}`;

        sectionParent.appendChild(row);
        row.appendChild(imageParent);
        imageParent.appendChild(image);

        row.appendChild(contentParent);
        contentParent.appendChild(contentContainer);
        contentContainer.appendChild(title);
        contentContainer.appendChild(buttonsContainer);
        contentContainer.appendChild(pricing);
        title.appendChild(document.createTextNode(`${altTag} ${key}`));
        pricing.appendChild(document.createTextNode(`${itemObject["count"]} x ${itemObject["price"]} = €${(itemObject["count"]*itemObject["price"]).toFixed(2)}`));

        buttonsContainer.appendChild(removeContainer);
        buttonsContainer.appendChild(productCountContainer);
        buttonsContainer.appendChild(addContainer);
        removeContainer.appendChild(remove);
        productCountContainer.appendChild(productCount);
        addContainer.appendChild(add);
        remove.appendChild(document.createTextNode("-"));
        productCount.appendChild(document.createTextNode(`${itemObject["count"]}`));
        add.appendChild(document.createTextNode("+"));

        remove.addEventListener("click", function(){changeCount(idNumber, itemObject["price"], -1)})
        add.addEventListener("click", function(){changeCount(idNumber, itemObject["price"], 1)})
    }
}

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

    //function gameCount(){}
    return shoppingListLength;
}

function SaveShopInLocalStorage(shoppingList){
    localStorage["shoppingList"] = JSON.stringify(shoppingList);
}


function changeCount(index, price, change){
    let productCount = document.getElementById(`productCount-${index}`);
    let pricing = document.getElementById(`pricing-${index}`);

    let newProductCount = parseInt(productCount.innerHTML) + change;
    if (newProductCount < 0){return}
    productCount.removeChild(productCount.lastChild);
    productCount.appendChild(document.createTextNode(`${newProductCount}`))

    pricing.removeChild(pricing.lastChild);
    pricing.appendChild(document.createTextNode(`${newProductCount} x ${price} = €${(newProductCount*price).toFixed(2)}`));
}

function saveShoppingCart(){ // Games not implemented.
    let shoppingList = JSON.parse(localStorage.shoppingList);
    let consoles = shoppingList["consoles"];
    let productCounters = document.querySelectorAll('*[id^="productCount-"]');
    for (let index = 0; index < productCounters.length; index++){
        let product = productCounters[index];
        let productId = product.id.substring(product.id.indexOf("-")+1);
        consoles[Object.keys(consoles)[productId]]["count"] = parseInt(product.innerHTML);
        console.log(`Id-${productId} saved in storage.`)
    }

    shoppingList.consoles = shoppingList["consoles"];
    localStorage.shoppingList = JSON.stringify(shoppingList);
    updateShoppingCartLabel();
}

