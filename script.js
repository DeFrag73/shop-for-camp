document.addEventListener("DOMContentLoaded", function () {
    // Масив з продуктами та їхніми цінами
    const products = [
        { name: "Маленькі круасани", price: 10, image: "img/Remove-bg.ai_1706196095825.png" },
        { name: "Печиво Lovita", price: 30, image: "img/Remove-bg.ai_1706195976999.png" },
        { name: "Снікерс", price: 25, image: "img/Remove-bg.ai_1706195800677.png" },
        { name: "Батончики Рошен", price: 17, image: "img/Remove-bg.ai_1706195749763.png" },
        { name: "Батончик lion", price: 20, image: "img/Remove-bg.ai_1706196062429.png" },
        { name: "Баунті", price: 25, image: "img/Remove-bg.ai_1706196057682.png" },
        { name: "Рошен вайфля", price: 10, image: "img/Remove-bg.ai_1706195758998.png" },
        { name: "Круасан Великий", price: 30, image: "img/Remove-bg.ai_1706195812518.png" },
        { name: "Чіпси", price: 50, image: "img/Remove-bg.ai_1706195782114.png" },
        { name: "Хрум теам", price: 20, image: "img/Remove-bg.ai_1706195770953.png" },
        { name: "Семки", price: 40, image: "img/Remove-bg.ai_1706195733060.png" },
        { name: "Соняшник Санич", price: 40, image: "img/Remove-bg.ai_1706196255595.png" },
        { name: "Арахіс", price: 25, image: "img/Remove-bg.ai_1706196264924.png" },
        { name: "Cola/Fanta/Spriyte", price: 25, image: "img/Remove-bg.ai_1706196317645.png" },
        { name: "Моршинська газована", price: 25, image: "img/Remove-bg.ai_1706196139013.png" },
        { name: "Вода Девайт", price: 20, image: "img/Remove-bg.ai_1706196242269.png" },
        { name: "Кава", price: 15, image: "img/Remove-bg.ai_1706197267369.png" },
        { name: "Кава з молоком", price: 25, image: "img/Remove-bg.ai_1706196212973.png" },
        { name: "Чай", price: 10, image: "img/Remove-bg.ai_1706196123401.png" },
        { name: "Маккава", price: 10, image: "img/Remove-bg.ai_1706196215551.png" },
        { name: "Жуйки", price: 25, image: "img/Remove-bg.ai_1706196108851.png" },
    ];

    // Функція для виведення продуктів на сторінку
    function displayProducts(productList, productsToDisplay) {
        productList.innerHTML = '';

        productsToDisplay.forEach(product => {
            const productDiv = document.createElement("div");
            productDiv.classList.add("product");

            const productName = document.createElement("h3");
            productName.textContent = product.name;

            const productImage = document.createElement("img");
            productImage.src = product.image;
            productImage.alt = product.name;

            const productPrice = document.createElement("p");
            productPrice.textContent = `Ціна: ${product.price} грн`;

            productDiv.appendChild(productName);
            productDiv.appendChild(productImage);
            productDiv.appendChild(productPrice);

            productList.appendChild(productDiv);
        });
    }

    // Функція для пошуку продуктів за назвою
    function searchProducts() {
        const searchQuery = document.getElementById('searchInput').value.toLowerCase();
        const productList = document.getElementById("product-list");

        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchQuery));
        
        displayProducts(productList, filteredProducts);
    }

    // Отримати елемент для вставки списку продуктів
    const productList = document.getElementById("product-list");

    // Вивести всі продукти при завантаженні сторінки
    displayProducts(productList, products);

    // Додати обробник події для кнопки пошуку
    const searchButton = document.getElementById("searchButton");
    if (searchButton) {
        searchButton.addEventListener("click", searchProducts);
    }
});
