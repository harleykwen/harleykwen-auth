import express, { 
    Request, 
    Response, 
    Application, 
} from 'express'
import dotenv from 'dotenv'

dotenv.config()
 
const app: Application = express()
const port: number = Number(process.env.port) || 8000
 
app.get('/', (req: Request, res: Response) => {
    res.send('Express with Typescript')
})
 
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`)
})