import express from "express"
import cors from "cors"

const app = express().use(cors({ optionsSuccessStatus: 200 }))

app.get("/", (_req, res) => res.send("Hello World"))

app.listen(3000, () => console.log("Server is running"))
