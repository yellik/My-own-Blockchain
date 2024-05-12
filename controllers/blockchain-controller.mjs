import { blockchain } from "../startup.mjs"
import fileHandler from '../utilities/fileHandler.mjs'
import ResponseModel from "../utilities/Responsemodel.mjs";
import ErrorResponse from "../utilities/ErrorResponse.mjs";
import { DIFFICULTY } from "../utilities/settings.mjs";

const getBlockchain = (req, res, next) => {
    if (!blockchain || !blockchain.chain || blockchain.chain.length === 0) {
        return next(new ErrorResponse('Blockchain is empty', 404));
    }
    res.status(200).json(new ResponseModel({ statusCode: 200, success: true, data: blockchain }))
}

//mine mechanism
const createBlock = (req, res, next) => {
    const lastBlock = blockchain.getLastBlock();
    if (!lastBlock) {
        return next(new ErrorResponse('No previous block found', 400));
    }
    console.log('The last block in the chain:', lastBlock)
    const data = req.body;
    if (!data) {
        return next(new ErrorResponse('No data provided for new block', 400));
    }
    const timestamp = Date.now();

    const nonce = blockchain.proofOfWork(
        timestamp, 
        lastBlock.currentBlockHash, 
        data
    );
    const currentBlockHash = blockchain.hashBlock(
        timestamp,
        lastBlock.currentBlockHash, 
        nonce,
        DIFFICULTY,
        data
    );

    const block = blockchain.createBlock(
        timestamp,
        lastBlock.currentBlockHash, 
        currentBlockHash,
        nonce,
        DIFFICULTY,
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