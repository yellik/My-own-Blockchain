import Blockchain from "../../models/Blockchain.mjs"



const getBlockchain = (req, res, next) => {
    const blockchain = new Blockchain()
    res.status(200).json( {success: true, data: 'Get Blockchain'})
}

const createBlock = (req, res, next) => {
    res.status(201).json( {success: true, data: 'Create Block'})
}

export {
    getBlockchain,
    createBlock
}