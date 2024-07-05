import express from 'express'
import ContactsController from '../Controllers/ContactsController.js'
import AuthMiddleware from '../Middlewares/AuthMiddleware.js';
import ValidationMiddleware from '../Middlewares/ValidationMiddleware.js';

const router = express.Router()

router.get("/all", AuthMiddleware.authorize, ContactsController.getAllContacts);
router.post("/add", AuthMiddleware.authorize, ValidationMiddleware.newContact, ContactsController.addContact);

export default router;