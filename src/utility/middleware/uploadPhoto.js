import multer from "multer";
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const storage = multer.diskStorage({
    destination: function (req,file,cb){
      cb(null,path.join(__dirname,"./images"))
    },
    filename:function(req, file, cb) {
        cb(null,new Date().toISOString().replace(/:/g,"-") + file.originalname)
    }
})
const upload  = multer({storage});
export default upload;