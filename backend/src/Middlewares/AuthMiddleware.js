import jwt from 'jsonwebtoken'

class AuthMiddleware {

  authorize(req, res, next) {
    const token = req.header('Authorization')

    if (!token) {
      return res.status(401).json({
        message: 'You must be logged in to perform this action'
      })
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({
          message: "Invalid login. Please try again!"
        })
      }

      req.user = user
      next()
    })
  }

}

export default new AuthMiddleware()