class User {

    email: string;
    password: string;
    role: string;
    userID: string;
    cart: Array<Cart>
    constructor(email, password, role) {
        this.email = email;
        this.password = password;
        this.role = role
        this.userID = "id" + Math.random().toString(16).slice(2);
        this.cart = []
    }
}
interface Cart {
    product: Product, 
    value: number
}

class Users {
    users: Array<User>
    constructor() {
        this.users = [];
    }
    addUser(user: User) {
        try {
            this.users.push(user);
        } catch (e) {
            console.error(e)
        }
    };
    findIndexofUser(userID: string): number {
        const index = this.users.findIndex(usr => usr.userID === userID)
        return index;
    }
    findUser(userId: string): User {
        try {
            const user: User = this.users.find(usr => usr.userID === userId);
            if (user) {
                return user
            }
        } catch (e) {
            console.error(e)
        }
    }
}
const users: Users = new Users();


class Product {
    imgSrc: string;
    description: string;
    price: number;
    id: string;
    value:number

    constructor(imgSrc: string, description: string, price: number) {
        try {
            this.imgSrc = imgSrc;
            this.description = description;
            this.price = price;
            this.id = "id" + Math.random().toString(16).slice(2);
            this.value = 1
        } catch (e) {
            console.error(e);
        }
    }

}

class Products {
    products: Array<Product> = [];
    constructor() {

    }

    addProduct(product: Product) {
        try {
            this.products.push(product);
        } catch (e) {
            console.error(e)
        }
    };

    findIndexOfProduct(productId: string) {
        const index = this.products.findIndex(prd => prd.id === productId)
        return index;
    }
    findProduct(productId: string): Product {
        try {
            const product: Product = this.products.find(prd => prd.id === productId);
            if (product) {
                return product
            }
        } catch (e) {
            console.error(e)
        }
    }

}
const products: Products = new Products();

products.addProduct(new Product("images/coffee.png", 'Stainless Steel Travel Mug', 20))
products.addProduct(new Product("/images/beanie.png", 'Boundary Rib Beanie', 20))
products.addProduct(new Product("/images/3.png", 'PUMA 2021 Clash Guernsey', 30))
products.addProduct(new Product("/images/4.png", 'PUMA 2021 Home Guernsey', 25))
products.addProduct(new Product("/images/5.png", '2020 Three of a Kind Hoodie', 44))
products.addProduct(new Product("/images/6.png", 'Puma 2021 Iconic Tee', 33))
products.addProduct(new Product("/images/7.png", 'PUMA 2021 Training Singlet', 20))
products.addProduct(new Product("/images/8.png", 'Dustin Martin Tee', 15))
products.addProduct(new Product("/images/9.png", '2021 PUMA Padded Vest', 20))
products.addProduct(new Product("/images/10.png", 'Super Soft Touch Sherrin', 40))
products.addProduct(new Product("/images/11.png", 'Premiers 2020 Wall Flag', 30))
products.addProduct(new Product("/images/12.png", 'Dustin Martin Monatge Wall Flag', 20))

module.exports = { User, Users, Product, Products, products, users }