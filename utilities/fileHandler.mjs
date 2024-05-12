import fs from 'fs';
import path from 'path';

const writeFiles = (folderName, fileName, data) => {
   try {
    
    const filepath = path.join(__appdir, folderName, fileName);
    console.log(filepath);
    fs.writeFileSync(filepath, JSON.stringify(data));
   } catch (error) {
    throw new Error(error.message)
   }
}

export default(writeFiles)

