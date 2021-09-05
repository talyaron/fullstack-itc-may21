export {};

const { Product, Store } = require('../../models/dist/storeModel');
const { CartProduct, User, Users } = require('../../models/dist/usersModel');

export const showStores = (req, res)=> {
  try {
    const store = new Store();
    res.send({ storeUuid: store.storeUuid, storeName: store.storeName });

  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
}

export const showProducts = (req, res)=> { // store.html
  try {
    const isAdmin = req.isAdmin;

    const storeUuid: string = req.params.storeUuid;
    const store = new Store();
    if (storeUuid === 'mall') store.storeName = 'Virtual Mall'; // show from all stores (needed if more than 1 store. for now only title changes)
    
    res.send({ store, isAdmin });

  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
}

export const showProduct = (req, res)=> { // product.html
  try {
    const { isAdmin, userIndex, cartProductIndex, productIndex } = req;

    const store = new Store();
    const users = new Users();

    const storeProduct: Product = store.products[productIndex];
    const cartProduct: CartProduct = ((isAdmin) || (cartProductIndex === -1)) ? undefined : users.users[userIndex].cart[cartProductIndex];

    res.send({ storeProduct, cartProduct, isAdmin });

  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
}

export const editStoreName = (req, res)=> { // store.html
  try {

    // res.send({ editStoreName:true });

  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
}

export const addProduct = (req, res)=> { // store.html
  try {
    const { storeUuid, productName, productDescription, productPrice, productImage, productInStock } = req.body;
    const store = new Store(); // storeUuid would be used if more than 1 store

    store.addProduct(productName, productDescription, productPrice, productImage, productInStock);

    res.send({ store });

  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
}

export const editProduct = (req, res)=> { // product.html
  try {

    const { storeUuid, productUuid, productName, productDescription, productPrice, productImage, productInStock } = req.body;
    const store = new Store(); // storeUuid would be used if more than 1 store
console.log('hi');
    store.editProduct(productUuid, productName, productDescription, productPrice, productImage, productInStock);

    res.send({ productUpdate: true });

  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
}

export const deleteProduct = (req, res)=> { // store.html
  try {

    // res.send({ deleteProduct:true });

  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
}