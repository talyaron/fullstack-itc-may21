export { };
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");
const path = require("path");
const cartsJsonPath = path.resolve(__dirname, "./carts.json");

//Function to read the JSON of created carts
export const readJsonCarts = () => {
    try {
        const carts = fs.readFileSync(cartsJsonPath);
        return JSON.parse(carts);;
    } catch (error) {
        console.error(error);
    }
};

export class PurchaseProduct {
    uuid: string;
    productId: string;
    quantity: number;
    price: number;
    totalPrice: number

    constructor(productId, quantity, price) {
        this.uuid = uuidv4();
        this.productId = productId;
        this.quantity = quantity;
        this.price = price;
        this.totalPrice = (quantity * price)
    }
}

export class Cart {
    uuid: string;
    userEmail: string;
    products: Array<PurchaseProduct>;
    totalAmount: number;
    createdDate: any;
    purchasedDate: any;
    picked: boolean;

    constructor(userEmail, products) {
        this.uuid = uuidv4();
        this.userEmail = userEmail;
        this.products = (products === null) ? [] : products; //when the user push add here
        this.totalAmount = 0;
        this.createdDate = Date.now();
        this.purchasedDate = null;
        this.picked = false;
    }
}

export class Carts {
    carts: Array<Cart>;

    constructor() {
        this.carts = readJsonCarts();
    }

    updateCartsJson() {
        try {
            fs.writeFileSync(cartsJsonPath, JSON.stringify(this.carts));
        } catch (error) {
            console.error(error);
        }
    }

    addProductsToCart(cart) {
        try {
            this.carts.push(cart);
            this.updateCartsJson();
        } catch (error) {
            console.error(error);
        }
    }

    searchUnpurchaseCart(userEmail) {
        try {
            const unpurchaseCart = this.carts.find(cart => (cart.userEmail === userEmail) && (cart.purchasedDate === null)); //YS: What if it doesnt find the cart?
            return unpurchaseCart;
        } catch (error) {
            console.error(error);
        }
    }

    searchUserCart(cartId) {
        try {
            const userCart = this.carts.find(cart => cart.uuid === cartId); //YS: What if it doesnt find the cart?
            return userCart;
        } catch (error) {
            console.error(error);
        }
    }

    removeProductsFromUserCart(productId, cartId) {
        try {
            let userCart = this.searchUserCart(cartId);
            userCart.products = userCart.products.filter(product => product.productId !== productId);
        } catch (error) {
            console.error(error);
        }
    }

    searchProductInCart(productId, userCart) {
        try {
            const productExist = userCart.products.find(product => product.productId === productId); //YS: What if it doesnt find the product?
            return productExist; 
        } catch (error) {
            console.error(error);
        }
    }

    updateTotalAmount(userCart) {
        userCart.totalAmount = 0;
        userCart.products.forEach(product => {
            userCart.totalAmount = userCart.totalAmount + product.totalPrice;
        });
        this.updateCartsJson();
    }

    setPurchaseDate(userCart) {
        userCart.purchasedDate = Date.now();
    }

    searchPurchasedCarts() {
        try {
            const purchaseCarts = this.carts.filter(cart => cart.purchasedDate !== null);
            return purchaseCarts;
        } catch (error) {
            console.error(error);
        }
    }
}