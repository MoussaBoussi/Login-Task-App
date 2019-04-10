const express = require('express')
require('./db/mongoose')
const taskRouter = require('./routes/task')
const userRouter = require('./routes/user')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => console.log(`Server is running at port ${port}`))

const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
    // const task = await Task.findById()
    // await task.populate('owner').execPopulate()
    
    // const user = await User.findById()
    // await user.populate('tasks').execPopulate()
}