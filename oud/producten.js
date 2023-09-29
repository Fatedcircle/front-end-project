document.addEventListener("DOMContentLoaded", function () {
    const productForm = document.getElementById("productForm");

    productForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Verkrijg de ingevoerde waarden van het formulier
        const productName = document.getElementById("productName").value;
        const productDescription = document.getElementById("productDescription").value;
        const productPrice = parseFloat(document.getElementById("productPrice").value);
        const productImage = document.getElementById("productImage").value;

        // Voeg het nieuwe product toe aan de JSON-gegevens (vereenvoudigd voorbeeld)
        const newProduct = {
            id: generateUniqueId(), // Genereer een uniek id, bijv. met een functie
            name: productName,
            description: productDescription,
            price: productPrice,
            image: productImage,
        };

        // Voeg het nieuwe product toe aan de bestaande productenlijst
        // Hier ga ik ervan uit dat je een variabele 'products' hebt met je JSON-gegevens
        products.push(newProduct);

        // Je zou de gegevens nu kunnen opslaan of naar een server kunnen verzenden, afhankelijk van je behoeften

        // Reset het formulier
        productForm.reset();
    });

    // Een eenvoudige functie om een uniek id te genereren (vereenvoudigd voorbeeld)
    function generateUniqueId() {
        return new Date().getTime(); // Gebruik bijvoorbeeld een timestamp als id
    }
});
// Voeg deze code toe aan je admin.html-bestand binnen de script-sectie of een extern JavaScript-bestand

let products = []; // Variabele om productgegevens op te slaan

// Functie om het JSON-bestand te laden
function loadProducts() {
    fetch("producten.json")
        .then((response) => response.json())
        .then((data) => {
            products = data;
            // Hier kun je de producten in je admin-paneel weergeven of verwerken
            displayProducts();
        })
        .catch((error) => console.error("Fout bij het laden van producten:", error));
}

// Functie om de producten in het admin-paneel weer te geven (bijwerken van de weergave)
function displayProducts() {
    // Voeg hier code toe om de producten weer te geven in je admin-paneel, bijvoorbeeld in een tabel of lijst
}

// Roep de functie aan om het JSON-bestand te laden wanneer de pagina wordt geladen
document.addEventListener("DOMContentLoaded", function () {
    loadProducts();
});

