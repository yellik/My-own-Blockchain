export default class Blockchain {
    constructor() {
        this.chain = [];
    }

    //method for adding new blocks 
    createBlock(previousBlockHash, currentBlockHash, data){
        const block = {
            blockIndex: this.chain.length + 1,
            previousHash: previousBlockHash,
            hash: currentBlockHash, 
            data,
        };

        this.chain.push(block)

        //return the newly created block
        return block;
    }
}