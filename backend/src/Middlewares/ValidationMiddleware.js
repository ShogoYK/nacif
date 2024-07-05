class ValidationMiddleware {

  validateLogin(req, res, next) {
    if (!req.body.email || !req.body.password) {
      return res.status(501).json({
        message: "Please fill in all the fields!"
      })
    }

    next();
  }

  newContact(req, res, next) {

    if (!req.body.name || !req.body.number) {
      return res.status(500).json({
        message: "Please fill in all the fields"
      })
    }

    next()
  }
}

export default new ValidationMiddleware()