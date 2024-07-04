import { PrismaClient } from "@prisma/client";
import jwt from 'jsonwebtoken'

class AuthController {

  async login(req, res) {
    const { email, password } = req.body;

    try {
      const prisma = new PrismaClient()

      const user = await prisma.user.findFirst({
        where: {
          email: email,
          password: password
        }
      })

      const token = jwt.sign({id: user.id}, process.env.JWT_SECRET)
      
      return res.status(200).json({
        message: "Success!",
        user,
        token
      })
    }
    catch (error) {
      return res.status(501).json({
        message: error
      })
    }
  }
}


export default new AuthController()