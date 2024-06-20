import express from "express"
import multer from "multer"
import cors from "cors"

const app = express().use(cors({ optionsSuccessStatus: 200 }))

app.get("/", (_req, res) => res.send("Hello World"))
app.post("/api/fileanalyse", multer().single("file"), (req, res) => {
    res.json({
        name: req.file?.originalname,
        type: req.file?.mimetype,
        size: req.file?.size
    })
})

app.listen(3000, () => console.log("Server is running"))
