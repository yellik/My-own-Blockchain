import express from 'express'
import { 
    getBlockchain, 
    createBlock 
} from '/Users/yelen/Documents/BCU23/06_NODE/blockchain/controllers/blockchain-controller.mjs'

const router = express.Router();


//define url and and  method from controller
router.route('/').get(getBlockchain) // returns the array of blocks
router.route('/mine').post(createBlock)

export default router;