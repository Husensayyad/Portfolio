const express = require('express')
const Resumeroutes = require("./routes/resume")
const mongodb  = require("./Connecttion/ConnectDB")
const Contactrouter = require('./routes/contact')
const dotenv = require('dotenv')
const path = require('path')
const cors = require('cors')

dotenv.config();
const app = express()
const port = process.env.PORT || 3000
app.use(express.json())
app.use(cors());

mongodb()
app.use("/api/resume",Resumeroutes);
app.use("/api/contact",Contactrouter);
app.use("/uploads",express.static(path.join(__dirname,"public/uploads")));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})