
export default class Block {
    constructor(
        timestamp, 
        blockIndex,
        prevBlockHash, 
        currentBlockHash, 
        data){
        this.timestamp = timestamp;
        this.blockIndex = blockIndex;
        this.prevBlockHash = prevBlockHash;
        this.currentBlockHash = currentBlockHash;
        this.data = data;
    
    }
}

