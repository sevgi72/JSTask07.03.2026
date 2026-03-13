let buttons = document.querySelectorAll(".btn-primary");

buttons.forEach(function(button){

    button.addEventListener("click", function(ev){

        ev.preventDefault();

        let parent = this.parentNode;

        let id = parent.getAttribute("data-id");
        let name = parent.querySelector(".card-title").innerText;
        let desc = parent.querySelector(".desc").innerText;

        let priceText = parent.querySelector(".price").innerText;
        let price = +priceText.substring(priceText.indexOf(":")+1, priceText.indexOf("$"));

        let url = parent.previousElementSibling.getAttribute("src");

        let basketStr = localStorage.getItem("basket");
        let products = [];

        if(basketStr){
            products = JSON.parse(basketStr);
        }

        let existproduct = products.find(p => p.id == id);

        if(existproduct){
            existproduct.count++;
        }
        else{
            let product = {
                id:id,
                name:name,
                desc:desc,
                price:price,
                url:url,
                count:1
            };

            products.push(product);
        }

        localStorage.setItem("basket", JSON.stringify(products));

        BasketCount();

    });

});
function BasketCount(){
      let basketStr = localStorage.getItem("basket");
      if(basketStr){
        let products=JSON.parse(basketStr);
        let basketCount=document.getElementById("basketCount");
        basketCount.innerText=products.length;
      }
}
BasketCount();
