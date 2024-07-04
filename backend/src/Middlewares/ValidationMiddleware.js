class ValidationMiddleware {

  validateLogin(req, res, next) {
    if(!req.body.email || !req.body.password) {
      return res.status(501).json({
        message: "Please fill in all the fields!"
      })
    }

    next();
  }
  
}