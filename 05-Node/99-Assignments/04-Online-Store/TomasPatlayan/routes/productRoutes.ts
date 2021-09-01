import {
  bringInfo,
  deleteProduct,
  editProduct,
  getProduct,
  postProduct,
} from "../controllers/productController";
import { getUser } from "../controllers/userController";
import { productExist } from "../middleware/middlewareProduct";

export {};
const express = require("express");
const router = express.Router();

router
  .post(
    "/postProduct",
    // productExist
    postProduct
  )
  .get("/getProduct", getProduct)
  .post("/deleteProduct/:id", deleteProduct)
  .get("/editProduct/:id", bringInfo)
  .post("/edit/:idProduct", editProduct)


module.exports = router;
