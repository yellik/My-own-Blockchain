import { blockchain } from "../startup.mjs"
import fileHandler from '../utilities/fileHandler.mjs'
import ResponseModel from "../utilities/Responsemodel.mjs";
import { DIFFICULTY } from "../utilities/settings.mjs";

const getBlockchain = (req, res, next) => {
    res.status(200).json(new ResponseModel({ success: true, data: blockchain }))
}

//mine mechanism
const createBlock = (req, res, next) => {
    const lastBlock = blockchain.getLastBlock();
    console.log('The last block in the chain:', lastBlock);
 
    const data = req.body;
    console.log(data);

    const timestamp = Date.now();

    const nonce = blockchain.proofOfWork(
        timestamp, 
        lastBlock.currentBlockHash, 
        data
    );
    const currentBlockHash = blockchain.hashBlock(
        timestamp,
        lastBlock.currentBlockHash, 
        data,
        nonce,
        DIFFICULTY
    );

    const block = blockchain.createBlock(
        timestamp,
        lastBlock.currentBlockHash, 
        currentBlockHash,
        data
    );
    
    fileHandler('data', 'blocks.json', blockchain);

    res.status(201).json(new ResponseModel({ statusCode: 201, data: block }));

    //res.status(201).json({ success: true, data: block })
};

export {
    getBlockchain,
    createBlock
}