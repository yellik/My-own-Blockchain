import { blockchain } from "../../startup.mjs"


const getBlockchain = (req, res, next) => {
    res.status(200).json({ success: true, data: blockchain })
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
        nonce
    );

    const block = blockchain.createBlock(
        timestamp,
        lastBlock.currentBlockHash, 
        currentBlockHash,
        data
    );
    
    res.status(201).json({ success: true, data: block })
};

export {
    getBlockchain,
    createBlock
}