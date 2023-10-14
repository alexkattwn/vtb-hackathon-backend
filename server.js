require("dotenv").config()
const express = require("express")
const sequelize = require("./db")
const cors = require("cors")
const fileUpload = require("express-fileupload")
const router = require("./routes")
const errorMiddleware = require('./middlewares/error.middlware')

const PORT = process.env.PORT || 5000
const app = express()

app.use(express.static('static/user-image'))
app.use(express.static('static/service-resources'))
app.use(express.json())
app.use(fileUpload({}))
app.use(cors({
    credentials: true,
    origin: [process.env.CLIENT_URL]
}))
app.use("/api", router)
app.use(errorMiddleware)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT} 🚀`))
    } catch (e) {
        console.log(e)
    }
}

start()
