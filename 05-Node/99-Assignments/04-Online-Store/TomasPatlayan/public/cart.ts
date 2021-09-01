const getCartProduct = async () => {
  const getCart = await axios.get("/product/getCart");
  const getInfo = getCart.data.cart;
  const cart = document.getElementById("cart");
  let html = "";
  getInfo.forEach((element) => {
    html += ` 
    <table class="topazCells">
    <tbody>
    <tr>
   
    <td>${element.name}</td>
    <td>$${element.price}</td>
    </tr>
    </tbody>
    </table>

    
    
    `;
  });

  cart.innerHTML = html;
};

getCartProduct();
