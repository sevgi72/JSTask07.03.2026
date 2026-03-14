let buttons = document.querySelectorAll(".btn-primary");
buttons.forEach(function (button) {
    button.addEventListener("click", function (ev) {
        ev.preventDefault();
        let parent = this.parentNode;
        let id = parent.getAttribute("data-id");
        let name = parent.querySelector(".card-title").innerText;
        let desc = parent.querySelector(".desc").innerText;
        let priceText = parent.querySelector(".price").innerText;
        let price = +priceText.substring(priceText.indexOf(":") + 1, priceText.indexOf("$"));
        let url = parent.previousElementSibling.getAttribute("src");
        let basketStr = localStorage.getItem("basket");
        let products = [];

        if (basketStr) {
            products = JSON.parse(basketStr);
        }
        let existproduct = products.find(p => p.id == id);
        if (existproduct) {
            existproduct.count++;
        } 
        else {
            let product = {
                id: id,
                name: name,
                desc: desc,
                price: price,
                url: url,
                count: 1
            };
            products.push(product);
        }
        localStorage.setItem("basket", JSON.stringify(products));
        BasketCount();
    });
});
function BasketCount() {
    let basketStr = localStorage.getItem("basket");
    let basketCount = document.getElementById("basketCount");
    if (basketStr && basketCount) {
        let products = JSON.parse(basketStr);
        basketCount.innerText = products.length;
    }
}
BasketCount();
function ShowBasketItems() {
    let table = document.querySelector(".table");
    if (!table) return; //table yoxdusa dayanir amma xeta vemir
    let basketStr = localStorage.getItem("basket");
    if (basketStr) {
        let products = JSON.parse(basketStr);
        products.forEach(p => {
            let tr = `
            <tr>
                <td><img src="${p.url}" alt="" style="width:80px; height:80px; object-fit:cover; border-radius:8px;"></td>
                <td>${p.name}</td>
                <td>${p.desc}</td>
                <td>${p.price}$</td>
                <td>${p.count}</td>
                <td><button class="btn btn-danger btn-sm">x</button></td>
            </tr>`;
            table.lastElementChild.innerHTML += tr;
        });
    }
}
ShowBasketItems();