
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

}
let srcPath="E:/Dev-MERN/Web_devlopment Codes/Node/fileOrganizer/downloads";
organize(srcPath);


//3. Reads the contents of the directory. besicly read the file name of directory
let allFiles=fs.readdirSync(srcPath);
console.log(allFiles);
//4. traverse over all the files and classify them on basis there extention
for(let i=0;i<allFiles.length;i++){
   //let ext=allFiles[i].split(".")[1];
   let ext=path.extname(allFiles[i]);
   console.log(ext);
}






// module.export={
//     organize:organize
// }


