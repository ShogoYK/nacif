import express from "express"
import ContactsRouter from "./Routes/ContactsRouter.js"

const app = express();

app.use(express.json())
app.use("/contacts", ContactsRouter)

export default app;