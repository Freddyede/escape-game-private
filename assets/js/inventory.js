document.addEventListener("DOMContentLoaded", function () {
    const key1 = document.querySelector('.room button[data-key="key1"]');
    const key2 = document.querySelector('.room button[data-key="key2"]');
    const key3 = document.querySelector('.room button[data-key="key3"]');

    const item1 = document.querySelector(".inventory-item.item1");
    const item2 = document.querySelector(".inventory-item.item2");
    const item3 = document.querySelector(".inventory-item.item3");


    key1.addEventListener("click", function () {
        item1.style.display = "inline-block";
        console.log("coucou");
    });

    key2.addEventListener("click", function () {
        item2.style.display = "inline-block";
        console.log("salut");
    });

    key3.addEventListener("click", function () {
        item3.style.display = "inline-block";
        console.log("hi)");
    });
});