
const fs = require("fs");//fs module
const path = require("path");//path module

let types = {
    media: ["mp4", "mkv", "mp3", "mov"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex', "csv", 'json'],
    app: ['exe', 'dmg', 'pkg', "deb", "apk"],
    images: ['png', 'jpg', 'jpeg']
}

function organize(srcPath) {
    if (srcPath == undefined) {
        srcPath = process.cwd();//cwd->current working directory
        //console.log(srcPath);
    }
    let organizedFiles = path.join(srcPath, "organized_files");
    if (!fs.existsSync(organizedFiles)) {
        //if file organizedfile not exist then make a file
        fs.mkdirSync(organizedFiles);
    }
    else {
        // console.log("allready exist");
    }


    //3. Reads the contents of the directory. besicly read the file name of directory
    let allFiles = fs.readdirSync(srcPath);
    //console.log(allFiles);
    //4. traverse over all the files and classify them on basis there extention
    for (let i = 0; i < allFiles.length; i++) {
        //let ext=allFiles[i].split(".")[1];

        let fullPathofFile = path.join(srcPath, allFiles[i]);

        //1. check if it is a file or folder 
        //lstatsinc gives the information regarding the link provided
        let isFile = fs.lstatSync(fullPathofFile).isFile();//true->ager file hai or false->
        //console.log(fullPathofFile).isFile();
        if (isFile) {
            //1.1 get ext name
            let ext = path.extname(allFiles[i]).split(".")[1];
            //console.log(ext); 
            //1.2 get folder name from ext
            let folderName = getFolderName(ext);//archives
            // console.log(folderName);

            //1.3copy from source(srcPath) and past in destination
            copyFileToDest(srcPath, fullPathofFile, folderName);

        }
    }

}

function getFolderName(ext){
    for(let key in types){
        // console.log(key);
        for(let i=0;i<types[key].length;i++){
            if(types[key][i]==ext){
                return key;
            }
        }
    }
}

function copyFileToDest(srcPath, fullPathofFile, folderName){
//1. foldeName ka path banana hai
let destFolderPath=path.join(srcPath,"organized_files",folderName);//....../downlads/organized_files/archives
//2.check folder if exist if it does not then make folder
if(!fs.existsSync(destFolderPath)){
    fs.mkdirSync(destFolderPath);
}
//3
let fileName=path.basename(fullPathofFile);//Return the last portion of a path.
let destFileName=path.join(destFolderPath, fileName);
fs.copyFileSync(fullPathofFile, destFileName)
}


let srcPath = "E:/Dev-MERN/Web_devlopment Codes/Node/fileOrganizer/downloads";
organize(srcPath);












// module.export={
//     organize:organize
// }


