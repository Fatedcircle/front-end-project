document.addEventListener("DOMContentLoaded", function () {
    const productForm = document.getElementById("productForm");
    const productTableBody = document.getElementById("productTableBody");

    // Functie om het JSON-bestand te laden
    // Functie om het JSON-bestand te laden
    function loadProducts() {
        // Controleer eerst of er al producten zijn opgeslagen in de `products`-array
        if (products.length > 0) {
            // Als er al producten zijn, hoef je de JSON niet opnieuw te laden
            displayProducts(); // Toon de bestaande producten
            return;
        }

        // Als er geen producten zijn, laad dan de JSON
        fetch("producten.json")
            .then((response) => response.json())
            .then((data) => {
                products = data;
                // Hier kun je de producten in je admin-paneel weergeven of verwerken
                displayProducts();
            })
            .catch((error) => console.error("Fout bij het laden van producten:", error));
    }

    // Functie om de producten in de tabel weer te geven (bijwerken van de weergave)
    function displayProducts() {
        // Leeg de huidige inhoud van de tabel
        productTableBody.innerHTML = "";

        // Loop door de producten en voeg ze toe aan de tabel
        products.forEach(product => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.description}</td>
                <td>${product.price}</td>
                <td><img src="${product.image}" alt="${product.name}" style="max-width: 100px;"></td>
            `;
            productTableBody.appendChild(row);
        });
    }

    // Voeg deze code toe aan je admin.html-bestand binnen de script-sectie of een extern JavaScript-bestand

    let products = []; // Variabele om productgegevens op te slaan

    // Roep de functie aan om het JSON-bestand te laden wanneer de pagina wordt geladen
    loadProducts();

    // Voeg deze code toe aan een apart JavaScript-bestand (add_product.js) of aan je add_product.html-bestand binnen de script-sectie

    // Haal het formulier op
    const addProductForm = document.getElementById("addProductForm");

    // Voeg een eventlistener toe om het formulier in te dienen
    addProductForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Verkrijg de ingevoerde waarden van het formulier
        const productName = document.getElementById("productName").value;
        const productDescription = document.getElementById("productDescription").value;
        const productPrice = parseFloat(document.getElementById("productPrice").value);
        const productImage = document.getElementById("productImage").value;

        // Maak een nieuw productobject
        const newProduct = {
            id: generateUniqueId(), // Genereer een uniek id, bijv. met een functie
            name: productName,
            description: productDescription,
            price: productPrice,
            image: productImage,
        };

        // Haal de bestaande producten op uit localStorage (indien aanwezig)
        const existingProducts = JSON.parse(localStorage.getItem("products")) || [];

        // Voeg het nieuwe product toe aan de bestaande producten
        existingProducts.push(newProduct);

        // Sla de bijgewerkte productgegevens op in localStorage
        localStorage.setItem("products", JSON.stringify(existingProducts));

        // Stuur de gebruiker terug naar de admin-pagina
        window.location.href = "admin.html";
    });

    // Een eenvoudige functie om een uniek id te genereren (vereenvoudigd voorbeeld)
    function generateUniqueId() {
        return new Date().getTime(); // Gebruik bijvoorbeeld een timestamp als id
    }
});
// Voeg deze code toe aan je JavaScript-bestand (bijvoorbeeld admin.js)

document.addEventListener("DOMContentLoaded", function () {
    // Zoek de knop op basis van de ID
    const addProductButton = document.getElementById("addProductButton");

    // Voeg een eventlistener toe om te reageren op het klikken op de knop
    addProductButton.addEventListener("click", function () {
        // Stuur de gebruiker naar de gewenste pagina (add_product.html)
        window.location.href = "add_product.html";
    });
});
