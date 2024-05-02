import express from 'express'
import dotenv from 'dotenv'
import blockchainRouter from './router/blockchain-routes.mjs'

//reads the env file from the env 
dotenv.config({ path: 'config/config.env' });

const app = express();

//middleware
//convert json body to JSON
app.use(express.json())
app.use('/api/v1/blockchain', blockchainRouter)
//get the port or use the default 
const PORT = process.env.PORT || 5010;

app.listen(PORT, () => console.log(`Server is running on the port: ${PORT}`))