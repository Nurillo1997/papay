const mongoose = require("mongoose");

exports.member_type_enums = ["USER", "ADMIN", "PEDAL", "RESTAURANT"];
exports.member_status_enums = ["ONPAUSE", "ACTIVE", "DELETED"];
exports.ordernary_enums = ["Y", "N"];

exports.product_collecton_enums = ["dish", "salad", "dessert", "drink", "etc"];
exports.product_status_enums = ["PAUSED", "PROCESS", "DELETED"];
exports.product_size_enums = ["small", "normal", "large", "set"];
exports.product_volue_enums = [0.5, 1, 1.2, 1.5, 2];


/***************************************
 *      MONGODB RELATED COMMANDS       *
 ***************************************/

exports.shapeIntoMongooseObjectId = (target)=>{
    if(typeof target === "string"){
        return new mongoose.Types.ObjectId(target); //mongodb objectiga aylaniradi
    }
    else return target;
}