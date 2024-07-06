import express from 'express'
import ContactsController from '../Controllers/ContactsController.js'
import AuthMiddleware from '../Middlewares/AuthMiddleware.js';
import ContactsValidationMiddleware from '../Middlewares/ContactsValidationMiddleware.js';

const router = express.Router()

router.get("/all", AuthMiddleware.authorize, ContactsController.getAllContacts);
router.get("/:id", AuthMiddleware.authorize, ContactsController.getContactById);
router.post("/add", AuthMiddleware.authorize, ContactsValidationMiddleware.newContact, ContactsController.addContact);
router.delete("/delete", AuthMiddleware.authorize, ContactsValidationMiddleware.deleteById, ContactsController.deleteContactById);
router.put("/edit", AuthMiddleware.authorize, ContactsValidationMiddleware.updateById, ContactsController.updateContactById);

export default router;