import express from "express"
import ContactsRouter from "./Routes/ContactsRouter.js"
import AuthRouter from "./Routes/AuthRouter.js"

const app = express();

app.use(express.json())
app.use("/contacts", ContactsRouter)
app.use("/auth", AuthRouter)

export default app;