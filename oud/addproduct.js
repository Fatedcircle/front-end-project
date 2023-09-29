document.addEventListener("DOMContentLoaded", function () {
    // Vind het formulier en voeg een eventlistener toe voor verzenden
    var addProductForm = document.getElementById("addProductForm");
    addProductForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Voorkom dat het formulier de pagina ververst

        // Roep de functie aan om een product toe te voegen
        addProduct();
    });
});

function addProduct() {
    // Haal de ingevoerde gegevens op
    var productName = document.getElementById("naam").value;
    var productDescription = document.getElementById("beschrijving").value;
    var productPrice = document.getElementById("prijs").value;
    var productImage = document.getElementById("image").value;

    // Haal de bestaande producten op uit localStorage
    var existingProducts = JSON.parse(localStorage.getItem("products")) || [];

    // Genereer een uniek product-ID
    var newProductId = generateProductId(existingProducts);

    // Maak een nieuw productobject aan
    var newProduct = {
        id: newProductId,
        naam: productName,
        beschrijving: productDescription,
        prijs: parseFloat(productPrice),
        image: productImage,
    };

    // Voeg het nieuwe product toe aan de lijst van bestaande producten
    existingProducts.push(newProduct);

    // Sla de bijgewerkte lijst van producten op in localStorage
    localStorage.setItem("products", JSON.stringify(existingProducts));

    // Keer terug naar de admin-pagina (bijvoorbeeld: admin.html)
    window.location.href = "admin.html";
}

// Functie om een uniek product-ID te genereren
function generateProductId(existingProducts) {
    // Bepaal het hoogste bestaande product-ID
    var highestId = 0;
    for (var i = 0; i < existingProducts.length; i++) {
        var productId = existingProducts[i].id;
        if (productId > highestId) {
            highestId = productId;
        }
    }

    // Het nieuwe product-ID is één hoger dan het hoogste bestaande ID
    return highestId + 1;
}
