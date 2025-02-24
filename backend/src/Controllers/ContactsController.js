import { PrismaClient } from '@prisma/client'


class ContactsController {

  async getAllContacts(req, res) {

    try {
      const prisma = new PrismaClient()
      let statusCode = 200;
      let message = "";

      const contacts = await prisma.contact.findMany({
        where: { user_id: req.user.id }
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
  async getContactById(req, res) {
    try {
      const prisma = new PrismaClient()
      const contact = await prisma.contact.findUnique({
        where: {id: +req.params.id}
      })

      if(!contact) {
        return res.status(404).json({
          message: "Contact not found"
        })
      }

      return res.status(200).json({
        message: 'success',
        contact
      })
    }
    catch (error) {
      return res.status(500).json({
        message: error
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

  async updateContactById(req, res) {
    try {
      const prisma = new PrismaClient()
      const edited = await prisma.contact.update({
        where: { id: req.body.id },
        data: {
          name: req.body.name ? req.body.name : undefined,
          number: req.body.number ? req.body.number : undefined,
        }
      })

      return res.status(200).json({
        message: "Edited successfully!",
        contact: edited
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