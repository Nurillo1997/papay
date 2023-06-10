const path = require('path'); // nodeJs nining core module install qilish shart emas
const multer = require('multer');
const uuid = require('uuid');

/**MULTER IMAGE UPLOADER */
function getTargetImageStorage(address) {
    return multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, `./uploads/${address}`);
        },
        filename: function (req, file, cb) {
            console.log(file);
            const extension = path.parse(file.originalname).ext; //original name ni qiymatini formatini oberadi
            const random_name = uuid.v4() + extension;//uuid.v4() sonlar va harflardan iborat random qiyat yasaydi
            cb(null, random_name); //extention formatdagi rasim random nom bilan saqlansin
        },
    });
}

const makeUploader = (address) => {
    const storage = getTargetImageStorage(address);
    return multer({ storage: storage })
}

module.exports = makeUploader;

// const product_storage = multer.diskStorage({
//     destination: function (req, res, cb) {
//         cb(null, './uploads/products');
//     },
//     filename: function (req, file, cb) {
//         console.log(file);
//         const extension = path.parse(file.originalname).ext;
//         const random_name = uuid.v4() + extension;
//         cb(null, random_name);
//     },
// });
// module.exports.uploadProductImage = multer({ storage: product_storage })