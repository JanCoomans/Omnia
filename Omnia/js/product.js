window.addEventListener('load', loadHandler);
//window.addEventListener('unload', unloadHandler);

function loadHandler(){
    handlePurchases();
}

function handlePurchases(){
    let shoppingList = getShoppingList();
    localStorage.shoppingList = JSON.stringify(shoppingList);
    console.log(shoppingList);
    //console.log(JSON.parse(localStorage["shoppingList"]));

    document.getElementById("orderBasic").addEventListener("click", orderBasic);
    document.getElementById("orderPro").addEventListener("click", orderPro);
    document.getElementById("orderPremium").addEventListener("click", orderPremium);

    function orderBasic(){
        shoppingList["consoles"]["basic"]["count"]++;
        console.log("Shop: 'Basic' package added to shopping cart.");
        SaveShopInLocalStorage(shoppingList);
        updateShoppingCartLabel();
        //redirectTransaction();
    }

    function orderPro(){
        shoppingList["consoles"]["pro"]["count"]++;
        console.log("Shop: 'Pro' package added to shopping cart.");
        SaveShopInLocalStorage(shoppingList);
        updateShoppingCartLabel();
        //redirectTransaction();
    }

    function orderPremium(){
        shoppingList["consoles"]["premium"]["count"]++;
        console.log("Shop: 'Premium' package added to shopping cart.");
        SaveShopInLocalStorage(shoppingList);
        updateShoppingCartLabel();
        //redirectTransaction();
    }
}

function getShoppingList(){
    if (typeof localStorage.shoppingList === "string"){
        console.log("Object 'shoppingList' found in local storage.")
        return JSON.parse(localStorage.shoppingList);
    }
    console.log("Object 'shoppingList' created.")
    return {consoles:
            {basic:{count: 2, price: 149.99, image: "console_front_view.png"},
                pro: {count: 1, price: 350.99, image: "console_front_view.png"},
                premium: {count: 5, price: 280.99, image: "console_front_view.png"}},
        games: {}};
}

function redirectTransaction(){
    // Redirect
}

