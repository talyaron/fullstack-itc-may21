const formCreate = document.getElementById("formCreate");
const btn = document.querySelector(".btn");
let idProduct
// let isAdmin 
// let currentUser 


//  function getCookie (){
//     // console.log(decodeURIComponent(document.cookie));
    
//     const cookie = decodeURIComponent(document.cookie)
//     const index = cookie.indexOf('=') + 3

//      const sliceCookie = cookie.slice(index)
//      console.log(sliceCookie);
     
//     const cookieFinal = JSON.parse(sliceCookie)
//     console.log(cookieFinal);
    
//     isAdmin = cookieFinal.isAdmin
//     currentUser = cookieFinal.id
//     console.log(cookieFinal.isAdmin);
// }

// getCookie()
 


const createProduct = async (event) => {
  event.preventDefault();
  const name = event.target.elements.name.value;
  const description = event.target.elements.description.value;
  const pokeType = event.target.elements.pokeType.value;
  const price = event.target.elements.price.value;
  const image = event.target.elements.image.value;

  const pokePost = await axios.post("/product/postProduct", {
    name,
    description,
    pokeType,
    price,
    image,
  });

  console.log(pokePost.data);

  event.target.reset();
  renderPoke(pokePost.data);
};
 
 


formCreate.addEventListener("submit", createProduct);

const getProduct = async () => {
  const product = await axios("/product/getProduct");
  const dataProduct = product.data;

  console.log(dataProduct);

  renderPoke(dataProduct);
};

const deletePoke = async (id) => {
  const deletePost = await axios.post(`/product/deleteProduct/${id}`);
  getProduct(deletePost);
};
 
const renderPoke = (data) => {
  const root = document.getElementById("root");
  let html = "";
  data.pokeProduct.forEach((element) => {
    html += `

     
     <div class="pokemon">
        <div class="pokemon__container">
      
        <div class="pokemon__container__image">
        <img src="${element.image}" alt="">
        </div>
        <div class="pokemon__container__name">
        <h2>${element.name}</h2>
        </div>
      
        <div class="pokemon__container__description">
        <h4>${element.description}</h4>
        </div>
      
        <div class="pokemon__container__pokeType">
        <h5>${element.pokeType}</h5>
        </div>
        
        <div class="pokemon__container__price">
        <p>$${element.price}</p>
        </div>
        <button type="button" class="btn btn-primary itemInfo" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap" onclick='editPoke("${element.id}")' checked>Edit</button>
        <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">New message</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form id="formEdit" onsubmit="handleEdit(event)">
                <div class="container__input-name">
                  <legend>Pokemon Name</legend>
                  <input type="text" name="name" class="name" />
                </div>

                <div class="container__input-imageUrl">
                  <legend>Pokemon Description</legend>
                  <textarea
                    name="description"
                    class="description"
                    id="description"
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>

                <div class="container__input-typePoke">
                  <legend>Pokemon Type</legend>
                  <input type="text" name="pokeType"  class="pokeType"/>
                </div>

                <div class="container__input-price">
                  <legend>Pokemon Price</legend>
                  <input type="text" name="price" class="price" />
                </div>

                <div class="container__input-image">
                  <legend>Pokemon Imag</legend>
                  <input type="url" name="image" class="image" />
                </div>

                <div class="container__button">
                  <button class="btn btn-warning" type="submit">Send</button>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
        <button class ="btn btn-danger"  'delete' onclick='deletePoke("${element.id}")'>X</button>
        <div class="pokemon__container__buy-button">
        <button  onclick='addCartProduct("${element.id}")'>Buy</button>
        </div>
      
        </div>
    

      </div>
     
    `;
  });

  root.innerHTML = html;
};

const editPoke = async (id) => {
  const editPoke = await axios.get(`/product/editProduct/${id}`);
  const name = document.querySelector('.name') as HTMLInputElement;
 

  const description = document.querySelector('.description') as HTMLInputElement;
  const pokeType = document.querySelector('.pokeType') as HTMLInputElement;
  const price = document.querySelector('.price') as HTMLInputElement;
  const image = document.querySelector('.image') as HTMLInputElement;

  name.value = editPoke.data.name;
  description.value = editPoke.data.description;
  pokeType.value = editPoke.data.pokeType;
  price.value = editPoke.data.price;
  image.value = editPoke.data.image;
  console.log(editPoke);
  idProduct =id
};
const handleEdit = async (event) => {
  event.preventDefault();
  
 console.log(idProduct);
 

  const name = event.target.elements.name.value;
  const description = event.target.elements.description.value;
  const pokeType = event.target.elements.pokeType.value;
  const price = event.target.elements.price.value;
  const image = event.target.elements.image.value;

  const newData ={ name:name,description:description,pokeType:pokeType,price:price,image:image}
  const pokePost = await axios.post(`/product/edit/${idProduct}`, 
    newData
   );
console.log(newData);

   

   const resp =pokePost.data.products
   getProduct(resp);
   
};
const addCartProduct = async(id)=> {
const addCart = await axios.post(`/product/addToCart/${id}`);
const dataCart =addCart.data.cart;
console.log(dataCart)



 

}

 

getProduct();

 


