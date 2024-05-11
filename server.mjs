import express from 'express'
import dotenv from 'dotenv'
import blockchainRouter from './router/blockchain-routes.mjs'
import membersRouter from './router/members-router.mjs'
//reads the env file from the env 
dotenv.config({ path: 'config/config.env' });
console.log(process.env.FF_CIRCLECHAIN);
const app = express();

//middleware

//convert json body to JSON
app.use(express.json())
app.use('/api/v1/blockchain', blockchainRouter)
app.use('/api/v1/members', membersRouter)
//if(process.env.FF_CIRCLECHAIN === 'ON'){
//    app.use('/api/v1/circlechain')
//}
//get the port or use the default 
//const PORT = process.env.PORT || 5010;
const PORT = process.argv[2];

app.listen(PORT, () => console.log(`Server is running on the port: ${PORT}`))