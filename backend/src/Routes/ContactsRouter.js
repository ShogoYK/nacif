import express from 'express'
import ContactsController from '../Controllers/ContactsController.js'

const router = express.Router()

router.get("/all", ContactsController.getAllContacts);

export default router;