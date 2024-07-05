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


      if (contacts.length == 0) {
        message = "No contacts found. Please try adding a new contact";
        statusCode = 404;
      }

      return res.status(statusCode).json({
        message,
        contacts
      })
    }
    catch (error) {
      return res.status(500).json({
        message: error.message
      })
    }
  }

  async addContact(req, res) {
    try {
      const prisma = new PrismaClient()
      const { number, name } = req.body;
      const newContact = await prisma.contact.create({
        data: {
          user_id: req.user.id,
          name,
          number
        }
      })

      return res.status(200).json({
        message: "Contact added successfully",
        newContact
      })
    }
    catch (error) {
      return res.status(501).json({
        message: error
      })
    }
  }

  async deleteContactById(req, res) {
    try {
      const prisma = new PrismaClient();
      await prisma.contact.delete({
        where: { id: req.body.id }
      })

      return res.status(200).json({
        message: "Contact deleted successfully!"
      })
    }
    catch (error) {
      return res.status(500).json({
        message: error
      })
    }
  }
}

export default new ContactsController()