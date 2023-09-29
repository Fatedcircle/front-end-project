document.addEventListener("DOMContentLoaded", function () {
    // Declareer de productList buiten de loadAndDisplayProducts-functie
    var productList = document.getElementById("productList");
    var cartList = document.getElementById("cart");
    var totalSpan = document.getElementById("total");

    var cart = [];

    // Functie om producten op te halen en weer te geven
    function loadAndDisplayProducts() {
        // Haal de producten op uit de Local Storage
        var productsData = JSON.parse(localStorage.getItem("products"));

        if (!productsData || productsData.length === 0) {
            // Als er geen producten zijn of de array leeg is, toon een bericht of voer een andere actie uit
            productList.innerHTML = "<p>Geen producten beschikbaar</p>";
        } else {
            // Loop door de producten in de array en voeg ze toe aan de sectie
            productsData.forEach(function (product) {
                var productElement = createProductElement(product);
                productList.appendChild(productElement);
            });
        }
    }

    // Functie om een productelement aan te maken op basis van productgegevens
    function createProductElement(product) {
        var productElement = document.createElement("section");
        productElement.classList.add("producten", "col-md-2", "card");

        var productHTML = `
            <img src="${product.image}" alt="${product.naam}">
            <h2>${product.naam}</h2>
            <p>${product.beschrijving}</p>
            <span class="price">${product.prijs}</span>
            <button class="add-to-cart" data-product="${product.id}">Add to Cart</button>
        `;

        productElement.innerHTML = productHTML;

        // Voeg een klikgebeurtenis toe aan de knop om het product aan de winkelwagen toe te voegen
        var addToCartButton = productElement.querySelector(".add-to-cart");
        addToCartButton.addEventListener("click", function () {
            addToCart(product);
        });

        return productElement;
    }

    // Functie om een product aan de winkelwagen toe te voegen
    function addToCart(product) {
        cart.push(product);
        updateCartUI();
    }

    // Functie om de winkelwagen bij te werken
    function updateCartUI() {
        cartList.innerHTML = "";
        var total = 0;

        cart.forEach(function (product) {
            var listItem = document.createElement("li");
            listItem.innerText = product.naam + " - $" + product.prijs;
            cartList.appendChild(listItem);

            total += parseFloat(product.prijs);
        });

        totalSpan.innerText = "$" + total.toFixed(2);
    }

    // Roep de functie aan om producten te laden en weer te geven
    loadAndDisplayProducts();
});
