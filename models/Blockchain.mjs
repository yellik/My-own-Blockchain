import Block from "./Block.mjs";
import { hashBlock } from "../utilities/crypto-lib.mjs";

export default class Blockchain {
    constructor() {
        this.chain = [];

        //create a genesis block
        this.createBlock('0', '0', [])
    }

    //method for adding new blocks 
   
    createBlock(previousBlockHash, currentBlockHash, data){
        //create the block
            const block = new Block(
                this.chain.length + 1,
                previousBlockHash,
                currentBlockHash,
                data);
     
            this.chain.push(block)
     
            return block;
        }
        
    hashBlock(previousBlockHash, currentBlockHash){
        const stringToHash = previousBlockHash + JSON.stringify(currentBlockHash);
        const hash = createHash(stringToHash)

        return hash;
    }
}