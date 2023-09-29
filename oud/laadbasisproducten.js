document.addEventListener("DOMContentLoaded", function () {
    // Vind de knop en voeg een click-eventlistener toe
    var loadProductsButton = document.getElementById("loadProductsButton");
    loadProductsButton.addEventListener("click", function () {
        // Roep de functie aan om producten te laden en weer te geven
        loadAndDisplayProducts();
    });

    // Controleer bij het laden van de pagina of er opgeslagen gegevens in Local Storage zijn
    var productsData = JSON.parse(localStorage.getItem("products"));
    if (productsData) {
        displayProducts(productsData);
    }
});

function loadAndDisplayProducts() {
    // Haal de producten op uit "producten.json"
    fetch("producten.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // Opslaan in localStorage
            localStorage.setItem("products", JSON.stringify(data));

            // Roep een functie aan om de producten weer te geven
            displayProducts(data);
        })
        .catch(function (error) {
            console.error("Er is een fout opgetreden bij het laden van producten: " + error);
        });
}

// De displayProducts-functie blijft hetzelfde
function displayProducts(products) {
    // Hier kun je de producten weergeven in de tabel of een andere gewenste weergave.
    var productTableBody = document.getElementById("productTableBody");
    productTableBody.innerHTML = ""; // Leeg de huidige inhoud van de tabel

    // Loop door de producten en voeg rijen toe aan de tabel
    for (var i = 0; i < products.length; i++) {
        var product = products[i];
        var newRow = productTableBody.insertRow();
        newRow.innerHTML = "<td>" + product.id + "</td>" +
            "<td>" + product.naam + "</td>" +
            "<td>" + product.beschrijving + "</td>" +
            "<td>" + product.prijs + "</td>" +
            "<td>" + product.image + "</td>" +
            "<td>" + product.hoeveelheid + "</td>";
    }
}
