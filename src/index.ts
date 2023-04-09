import express, { 
    Express, 
    Request, 
    Response, 
    NextFunction,
} from 'express'
import dotenv from 'dotenv'

dotenv.config()
 
const app: Express = express()
const port = process.env.port

app.use((req: Request, res: Response, next: NextFunction) => { // Handle error CORS policy
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Method', 'GET, POST, PUT, PATCH, DELETE, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next()
})
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
 
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