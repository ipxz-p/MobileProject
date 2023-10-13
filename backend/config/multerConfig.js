import multer from 'multer'
var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, "./public/img");
    },
    filename: function (req, file, callback) {
        callback(
            null,
            file.originalname
        );
    },
});
export const upload = multer({ storage, limits: { fileSize: 10 * 1024 * 1024 }})