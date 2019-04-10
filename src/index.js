const express = require('express')
require('./db/mongoose')
const taskRouter = require('./routes/task')
const userRouter = require('./routes/user')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('Site is under maintenence, please try again later :)')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => console.log(`Server is running at port ${port}`))