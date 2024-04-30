

export default class Block {
    constructor(blockIndex, prevBlockHash, nextBlockHash, data){
        this.timestamp = Date.now ()
        this.blockIndex = blockIndex;
        this.prevBlockHash = prevBlockHash;
        this.nextBlockHash = nextBlockHash;
        this.data = data;
    }
}

