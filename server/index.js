import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())

app.get("/todos", (req, res) => {
  res.json([
    {
      id: "1",
      text: "Learn React"      
    },
    {
      id: "2",
      text: "Learn Node"      
    }
  ])
})

app.listen(3005, () => {
  console.log('Server is running on port 3005');
})