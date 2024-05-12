import Blockchain from "./models/Blockchain.mjs"
import blocks from './data/blocks.json' with {type: 'json'}
import writeFiles from "./utilities/fileHandler.mjs";
import { fileURLToPath } from 'url'
import path from 'path'


const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

global.__appdir = dirname;

export const blockchain = new Blockchain();


if(blocks && blocks.chain) {
    blockchain.chain = blocks.chain
    //blockchain.memberNodes = blocks.memberNodes
}else{
    writeFiles('data', 'blocks.json', blockchain)
}


