import { blockchain } from "../startup.mjs";

const listMembers = (req, res, next) => {
    res
        .status(200)
        .json({ success: true, data: blockchain.memberNodes });

}
const registerNode = (req, res, next) => {
    //get the requested member node address
    const node = req.body;
    if (
        blockchain.memberNodes.indexOf(nodeUrl) === -1 &&
        blockchain.nodeUrl !== node.nodeUrl
    ){
        blockchain.memberNodes.push(node.nodeUrl);

        res.status(201).json({
            success: true, 
            statusCode: 201,
            data: { message: `The node ${node.nodeUrl} is registred`},
        });
    }else{
        res.status(400).json({
            success: false,
            statusCode: 400,
            data: { message: `The node with the url ${node.nodeUrl} is already registred`}
        })
    }

   
}
export {
    listMembers,
    registerNode
}