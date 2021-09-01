export { };

//I import the classes (with Methods) of the Models that Im going to use here
import { Users } from "../models/userModel";
import { Cart, Carts } from "../models/cartModel";


export function registerUser(req, res) {
    try {
        //Initialice a new instance of Users (the initialization will read the JSON of Users)
        const user = req.user;
        const allUsers = new Users();
        allUsers.createUser(user);

        const products = null; //YS: Would be better to initialize it to an empty array than null. 
        const unpurchaseCart = new Cart(req.email, products)
        const allCarts = new Carts();
        allCarts.addProductsToCart(unpurchaseCart); 
 
        res.send({ message: "A new User was added", user, unpurchaseCart });

    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}

export function findUser(req, res) {
    try {
        const allUsers = new Users();
        let userInfo;

        //I use req.email from the cookies 
        if (req.email) {
            userInfo = allUsers.findUser(req.email);
        }

        if (userInfo) {
            res.status(200).send({ message: "Username was found", userInfo });
        } else {
            res.status(400).send("Username was not found");
        }

    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}

export function login(req, res) {
    try {
        const { email } = req.body;
        let unpurchaseCart = req.unpurchaseCart;

        //If it is a new cart I create and push the data of the user (email and empty list of products)
        if (!unpurchaseCart) {
            const products = null;
            unpurchaseCart = new Cart(email, products);
            const allCarts = new Carts();
            allCarts.addProductsToCart(unpurchaseCart);
        };
        res.send({ message: "Logged in successfully", unpurchaseCart });
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
}