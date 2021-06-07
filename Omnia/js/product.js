window.addEventListener('load', loadHandler);
//window.addEventListener('unload', unloadHandler);

function loadHandler(){
    handlePurchases();
}

function handlePurchases(){
    document.getElementById("orderBasic").addEventListener("click", orderBasic);
    document.getElementById("orderPro").addEventListener("click", orderPro);
    document.getElementById("orderPremium").addEventListener("click", orderPremium);
}

function orderBasic(){
    let shoppingList = getShoppingList();
    shoppingList["consoles"]["basic"]["count"]++;
    console.log("Shop: 'Basic' package added to shopping cart.");
    SaveShopInLocalStorage(shoppingList);
    updateShoppingCartLabel();
    //redirectTransaction();
}

function orderPro(){
    let shoppingList = getShoppingList();
    shoppingList["consoles"]["pro"]["count"]++;
    console.log("Shop: 'Pro' package added to shopping cart.");
    SaveShopInLocalStorage(shoppingList);
    updateShoppingCartLabel();
    //redirectTransaction();
}

function orderPremium(){
    let shoppingList = getShoppingList();
    shoppingList["consoles"]["premium"]["count"]++;
    console.log("Shop: 'Premium' package added to shopping cart.");
    SaveShopInLocalStorage(shoppingList);
    updateShoppingCartLabel();
    //redirectTransaction();
}

function getShoppingList(){
    if (typeof localStorage.shoppingList === "string"){
        console.log("Object 'shoppingList' found in local storage.")
        return JSON.parse(localStorage.shoppingList);
    }
    console.log("Object 'shoppingList' created.")
    let shoppingList = {consoles:
            {basic:{count: 0, price: 149.99, image: "console_front_view.png"},
                pro: {count: 0, price: 350.99, image: "console_front_view.png"},
                premium: {count: 0, price: 280.99, image: "console_front_view.png"}},
        games: {}};
    localStorage.shoppingList = JSON.stringify(shoppingList);
    return shoppingList;
}

function redirectTransaction(){
    // Redirect
}

