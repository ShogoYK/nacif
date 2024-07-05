import { PrismaClient } from "@prisma/client";

class ValidationMiddleware {

  validateLogin(req, res, next) {
    if (!req.body.email || !req.body.password) {
      return res.status(501).json({
        message: "Please fill in all the fields!"
      })
    }

    next();
  }

  async newContact(req, res, next) {

    if (!req.body.name || !req.body.number) {
      return res.status(500).json({
        message: "Please fill in all the fields"
      })
    }
    
    const prisma = new PrismaClient();
    const contact = await prisma.contact.findFirst({
      where: {name: req.body.name, user_id: req.user.id}
    })

    if(contact) {
      return res.status(401).json({
        message: "You already have a contact with this name added!"
      })
    }
    
    next()
  }
}

export default new ValidationMiddleware()