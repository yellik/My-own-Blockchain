import { describe, it, expect, beforeEach} from "vitest";
import { GENESIS_DATA, MINE_RATE } from "../utilities/settings.mjs";
import Block from "./Block.mjs";

describe('Block', () => {
    let block;
  beforeEach(() => {
    const timestamp = Date.now();
    const blockIndex = 1;
    const currentBlockHash = 'current-blockhash';
    const prevBlockHash = 'prev-blockhash';
    const nonce = 1;
    const difficulty = 1;
    const data = 'infinity';

    block = new Block(timestamp, blockIndex, currentBlockHash, prevBlockHash, nonce, difficulty, data)
  }) ;

  describe('Properties', () => { 

   
    it("should initiate the block correctly", () => {
      
        expect(block.timestamp).toBe(block.timestamp);
        expect(block.blockIndex).toBe(1);
        expect(block.currentBlockHash).toBe('current-blockhash');
        expect(block.prevBlockHash).toBe('prev-blockhash');
        expect(block.nonce).toBe(1);
        expect(block.difficulty).toBe(1);
        expect(block.data).toBe('infinity')
    });

    
    
  })

})