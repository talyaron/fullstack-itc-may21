
export function editProdCookie(req, res, next){
    const { id } = req.cookies
    res.cookie("idEditProd", id, { maxAge: 300000000, httpOnly: true });
      next()
  }