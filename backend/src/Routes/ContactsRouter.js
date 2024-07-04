import express from 'express'
import ContactsController from '../Controllers/ContactsController.js'
import AuthMiddleware from '../Middlewares/AuthMiddleware.js';

const router = express.Router()

router.get("/all", AuthMiddleware.authorize, ContactsController.getAllContacts);

export default router;