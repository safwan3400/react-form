
const express = require('express')
const app = express()
const cors = require('cors')

const { FormModel } = require('./connections/mongoose')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors());

app.get('/form-data', async (req, res) => {
    try {
        const data = await FormModel.find()
        res.status(200).json(data)

    } catch (error) {
        res.send(error)
    }
})

app.post('/submit', (req, res) => {
    console.log(req.body);
    const body = req.body
    if(!body.name || !body.email || !body.details){
        res.status(400).send({'error':'Fill the form'})
        return
    }

    const formData = new FormModel(body)
    formData.save()
    res.status(200).json({ status: 200, msg: "form submitted successfully" })
})

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`server listened to port ${PORT}`);
})