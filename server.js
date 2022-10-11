import express from 'express'
import { checkUser, postData } from './controller/userController.js'
import { checkProperty, checkAge } from './middleware/validate.js'
import { capitalize, convertToNum, sortFavorite } from './middleware/sanitize.js'
import * as dotenv from 'dotenv'
dotenv.config()

// Express initialisieren
const app = express()
const PORT = process.env.PORT || 5001

// Middleware für jeden request
app.use(express.json())


// Routen mit Middleware und Controller
app.post('/validateUser', checkProperty, checkAge, checkUser)
app.post('/sanitizeUser', capitalize, sortFavorite, convertToNum, postData)
app.get('/', (req,res) => res.send('Hallo'))


// Error Handling middleware
app.use((err, req, res, next) => res.status(err.status).json({error: err.message}))


// Socket öffnen und ankommende Verbindungen annehmen
app.listen(PORT,() => console.log(`Listening on port ${PORT} `))