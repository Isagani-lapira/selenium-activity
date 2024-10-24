
import fs  from "fs";
class File{
    async createTxtFile(strPath,strTxt){
        await  fs.writeFile(`${strPath}.txt`,`${strTxt}`, async (err)=>{
            if (err) throw err;
        })
    }

    async appendTxtFile(strPath,strTxt){
        await fs.appendFile(`${strPath}.txt`,`${strTxt}\n`, {flag: 'a+'}, async (err)=>{
            if (err) throw err;
        })
    }
}

export default new File();