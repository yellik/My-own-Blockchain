import Block from "./Block.mjs";
import { hashBlock } from "../utilities/crypto-lib.mjs";
import { DIFFICULTY } from "../utilities/settings.mjs";
//import { DIFFICULTY, MINE_RATE } from "../utilities/settings.mjs";
export default class Blockchain {
    constructor() {
        this.chain = []; // <<<==== blockchain.chain

        // array of nodes registred to this (blockchain) network
        this.memberNodes = []; /// <<<==== blockchain.members 
        //assign own variable
        this.nodeUrl = process.argv[3];
        //create a genesis block
        this.createBlock(Date.now(), '0', '0', [], 4)
    }

    //method for adding new blocks 
   
    createBlock(timestamp, prevBlockHash, currentBlockHash, nonce, DIFFICULTY, data){
        //create the block
            const block = new Block(
                timestamp,
                this.chain.length + 1,
                prevBlockHash,
                currentBlockHash,
                nonce,
                DIFFICULTY,
                data,
            );
     
            this.chain.push(block)
     
            return block;
        }
        
    getLastBlock() {
        return this.chain.at(-1);
    }
        
    hashBlock(timestamp, prevBlockHash, currentBlockData, nonce){
        const stringToHash = 
        timestamp.toString() +
        prevBlockHash + 
        JSON.stringify(currentBlockData) +
        nonce; 
      const hash = hashBlock(stringToHash)
       
      return hash;
    }

    proofOfWork(timestamp, prevBlockHash, data){
        let DIFFICULTY = process.env.DIFFICULTY;
        let nonce = 0;
        let hash = this.hashBlock(timestamp, prevBlockHash, nonce, data);

        while(
            hash.substring(0, DIFFICULTY) !== '0'.repeat(DIFFICULTY)
        ){
            nonce++
            hash = this.hashBlock(timestamp, prevBlockHash, nonce, data);
            //console.log(hash);
        }

        console.log("the nonce is", + nonce);
        return nonce;
    }

 

}