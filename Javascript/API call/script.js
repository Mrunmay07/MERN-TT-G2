/* const container = document.querySelector(".container");

fetch("https://dummyjson.com/products")
  .then((res) => {
    return res.json();
  })

  .then((data) => {
    const products = data.products;

    products.forEach((product) => {
      const newCard = document.createElement("div");
      newCard.classList.add("card");
      newCard.innerHTML = `
         <img src=${product.images[0]} alt="">
                <h2>${product.title}</h2>
                <p>${product.description}</p>
                <b>${product.price}</b>
                <i>${product.category}</i>`;
      container.appendChild(newCard);
    });

    console.log(products);
  });
 */


async  function APIcall(){
    const res = await fetch("https://dummyjson.com/products")
    const data  = await res.json()
    console.log(data.products)
  }

  APIcall()