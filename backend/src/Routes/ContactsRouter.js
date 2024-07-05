import express from 'express'
import ContactsController from '../Controllers/ContactsController.js'
import AuthMiddleware from '../Middlewares/AuthMiddleware.js';
import ContactsValidationMiddleware from '../Middlewares/ContactsContactsValidationMiddleware.js';

const router = express.Router()

router.get("/all", AuthMiddleware.authorize, ContactsController.getAllContacts);
router.post("/add", AuthMiddleware.authorize, ContactsValidationMiddleware.newContact, ContactsController.addContact);
router.delete("/delete", AuthMiddleware.authorize, ContactsValidationMiddleware.deleteById, ContactsController.deleteContactById);

export default router;