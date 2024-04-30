import express from 'express'
import { getBlockchain, 
    createBlock } 
    from '../controllers/blockchain-controller/blockchain-controller.mjs';  

const router = express.Router();


//define url 
router.route('/').get(getBlockchain) // returns the array of blocks
router.route('/mine').post(createBlock)

export default router;