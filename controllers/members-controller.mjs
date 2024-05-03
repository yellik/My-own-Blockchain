import { blockchain } from "../startup.mjs";

export const listMembers = (req, res, next) => {
    res
        .status(200)
        .json({ success: true, statusCode: 200, data: blockchain.memberNodes });

}
export const registerNode = (req, res, next) => {
    //get the requested member node address
    const node = req.body;
    if (
        blockchain.memberNodes.indexOf(nodeUrl) === -1 &&
        blockchain.nodeUrl !== node.nodeUrl
    ){
        blockchain.memberNodes.push(node.nodeUrl);
        //syncing the new member / existing member / own node
        syncMembers(node.nodeUrl);

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
};

const syncMembers = (url) => {
    //create a new array of all members and include own node 
    const members = [...blockchain.memberNodes, blockchain.nodeUrl];
    //iterate through the members and send a copy to all members 
    try {
        members.forEach(async (member) => {
            const body = { nodeUrl: member };
            await fetch(`${url}/api/v1/members/register-node`, {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/jaon',
                },
            });
        });
    } catch (error) {
        console.log(error);
    }
}

