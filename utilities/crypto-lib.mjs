import crypto from 'crypto';

export const hashBlock = (stringToHash) => {
    //makes an object with sha256 
    return crypto.createHash('sha256').update(stringToHash).digest('hex')
};