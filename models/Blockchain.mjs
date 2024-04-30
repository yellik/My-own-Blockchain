import Block from "./Block.mjs";

export default class Blockchain {
    constructor() {
        this.chain = [];

        //create a genesis block
        this.createBlock('0', '0', [])
    }

    //method for adding new blocks 
    createBlock(previousBlockHash, currentBlockHash, data){
        const block = {
            this.chain.length + 1,
            previousBlockHash,
            currentBlockHash, 
            data,
        };

        this.chain.push(block)

        //return the newly created block
        return block;
    }
}