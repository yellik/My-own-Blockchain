import { blockchain } from "../../startup.mjs"


const getBlockchain = (req, res, next) => {
    res.status(200).json( {success: true, data: 'Get Blockchain' })
}

const createBlock = (req, res, next) => {
    const lastBlock = blockchain.getLastBlock();
    console.log('The last block in the chain:', lastBlock);
 
    const data = req.body;
    console.log(data);

    const currentBlockHash = blockchain.hashBlock(
        lastBlock.currentBlockHash, 
        data
    );
    const block = blockchain.createBlock(
        lastBlock.currentBlockHash, 
        currentBlockHash,
        data
    );
    
    res.status(201).json( {success: true, data: block})
};

export {
    getBlockchain,
    createBlock
}