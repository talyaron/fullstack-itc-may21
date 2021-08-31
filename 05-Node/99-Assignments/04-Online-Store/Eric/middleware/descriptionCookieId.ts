export function productIdCookie(req, res, next){ //YS: Ok
    const idProduct = req.params 
    res.cookie("productSelected", idProduct, { maxAge: 300000000, httpOnly: true });
      next()
  }