
export function editProdCookie(req, res, next){ //YS: Not sure why you are doing this, the id for edit should come from the params
    const { id } = req.cookies
    res.cookie("idEditProd", id, { maxAge: 300000000, httpOnly: true });
      next()
  }