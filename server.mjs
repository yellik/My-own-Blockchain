import express from 'express'
import dotenv from 'dotenv'
import blockchainRouter from './router/blockchain-routes.mjs'
import membersRouter from './router/members-router.mjs'
import errorHandler from './middleware/errorHandler.mjs'
import ErrorResponse from './utilities/ErrorResponse.mjs'
import { fileURLToPath } from 'url'
import path from 'path'


//reads the env file from the env 
dotenv.config({ path: 'config/config.env' });
//console.log(process.env.FF_CIRCLECHAIN);
const app = express();



//middleware
app.use(express.json());

//convert json body to JSON

app.use('/api/v1/blockchain', blockchainRouter)
//app.use('/api/v1/members', membersRouter)

//middleware
//cantral error handling
app.use(errorHandler);

//catch all url...
app.all('*', (req, res, next) => {
    next(new ErrorResponse(`Could not find the resource ${req.originalUrl}`, 404));
});

//get the port or use the default 
//const PORT = process.env.PORT || 5010;
const PORT = process.argv[2];

app.listen(PORT, () => console.log(`Server is running on the port: ${PORT}`))