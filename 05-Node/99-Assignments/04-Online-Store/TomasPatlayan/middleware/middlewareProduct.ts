import { readProduct } from "../models/productsModel"

export const productExist = (req,res,next)=> {
    const allProduct = readProduct();

    const ifFound = allProduct.some((element)=> element.name === req.body.name);
    if(ifFound){
        res.status(505).send('The Producto Already Exist');
        return;
    }
    next();
}