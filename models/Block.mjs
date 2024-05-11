
export default class Block {
    constructor(
        timestamp, 
        blockIndex,
        currentBlockHash, 
        prevBlockHash,
        nonce, 
        difficulty,
        data){
        this.timestamp = timestamp;
        this.blockIndex = blockIndex;
        this.currentBlockHash = currentBlockHash;
        this.prevBlockHash = prevBlockHash;
        this.currentBlockHash = currentBlockHash;
        this.nonce = nonce;
        this.difficulty = difficulty;
        this.data = data;
    
    }
}

