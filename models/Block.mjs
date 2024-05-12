import { GENESIS_DATA } from "../utilities/settings.mjs";

export default class Block {
    constructor(
        timestamp, 
        blockIndex, 
        prevBlockHash,
        currentBlockHash,
        nonce, 
        difficulty,
        data){
        this.timestamp = timestamp;
        this.blockIndex = blockIndex;
        this.prevBlockHash = prevBlockHash;
        this.currentBlockHash = currentBlockHash;
        this.nonce = nonce;
        this.difficulty = difficulty;
        this.data = data;
    }

    static createGenesis() {
        return new this(GENESIS_DATA)
    }
}

