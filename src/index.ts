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
    return res?.status(200)?.json({
        status: 200,
        error: false,
        data: null,
        message: 'Hello World!',
    })
})
 
app.listen(port, () => {
    return console.log(`⚡️[server]: Server is running at https://localhost:${port}`)
})