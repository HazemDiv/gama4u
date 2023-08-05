let span = document.querySelector(".up");

window.onscroll = function () {
    if (this.scrollY >= 300) {
        span.classList.add("com");
    }
    else {
        span.classList.remove("com");
    }
};

span.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

function searchProduct() {
    var searchInput = document.getElementById("searchInput").value.toLowerCase();
    var products = document.getElementsByClassName("product");
    var notFoundMessage = document.getElementById("notFoundMessage");
    var foundMatch = false;

    for (var i = 0; i < products.length; i++) {
        var productName = products[i].querySelector("h3").textContent.toLowerCase();
        var productDiv = products[i];

        if (productName.includes(searchInput)) {
            productDiv.style.display = "flex";
            foundMatch = true;
        } else {
            productDiv.style.display = "none";
        }
    }

    if (foundMatch) {
        notFoundMessage.style.display = "none";
    } else {
        notFoundMessage.style.display = "block";
    }
}

const myButton = document.getElementById("myButton");
const myList = document.getElementById("myList");

myButton.addEventListener("click", function () {
    if (myList.style.height === "0px") {
        const listHeight = myList.scrollHeight;
        myList.style.height = listHeight + "px";
    } else {
        myList.style.height = "0px";
    }
});
