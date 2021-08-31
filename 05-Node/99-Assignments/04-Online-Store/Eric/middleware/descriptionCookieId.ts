export function productIdCookie(req, res, next){
    const idProduct = req.params
    res.cookie("productSelected", idProduct, { maxAge: 300000000, httpOnly: true });
      next()
  }