document.addEventListener("DOMContentLoaded", function () {
    const key1 = document.querySelector('[data-key="key1"]');
    const key2 = document.querySelector('[data-key="key2"]');
    const key3 = document.querySelector('[data-key="key3"]');
    const key4 = document.querySelector('[data-key="key4"]');


    const item1 = document.querySelector(".inventory-item.item1");
    const item2 = document.querySelector(".inventory-item.item2");
    const item3 = document.querySelector(".inventory-item.item3");
    const item4 = document.querySelector(".inventory-item.item4");


    key1.addEventListener("click", function () {
        item1.style.display = "inline-block";
        console.log("coucou");
    });

    key2.addEventListener("click", function () {
        item2.style.display = "inline-block";
        key2.style.visibility = "hidden";
        console.log("salut");
    });

    key3.addEventListener("click", function () {
        item3.style.display = "inline-block";
        console.log("hi)");
    });

    // key4.addEventListener("click", function () {
    //     item4.style.display = "inline-block";
    //     
    // });

});

