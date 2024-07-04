import { PrismaClient } from '@prisma/client'


class ContactsController {

  async getAllContacts(req, res) {
    
    try {
      const prisma = new PrismaClient()

      let statusCode = 500;
      let message = "";

      const contacts = await prisma.contact.findMany({
        where: { id: 1, user_id: req.user.id }
      });


      if(contacts.length == 0) {
        message = "No contacts found. Please try adding a new contact";
        statusCode = 404;
      }

      return res.json({
        statusCode,
        message,
        contacts
      })
    }

    catch (error) {
      return res.json({
        statusCode: 500,
        message: error.message
      })
    }
  }
}

export default new ContactsController()