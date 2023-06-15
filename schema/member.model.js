const mongoose = require("mongoose");
const { member_type_enums, member_status_enums, ordernary_enums } = require("../lib/config");

const memberSchema = new mongoose.Schema({
    mb_nick: {
        type: String,
        required: true,
        index: { unique: true, sparse: true }// birov ishlatgan nickni birov ishlatmasligi uchun
    },
    mb_phone: {
        type: String,
        required: true,
    },
    mb_password: {
        type: String,
        required: true, 
        select: false// bu secret bo'lgligi uchun req bo'lganda database qaytarmasligi uchun
    },
    mb_type: {
        type: String,
        required: false,
        default: "USER",// agar hechnarsa kiritilmasa default USER qiymatini oladi
        enum: {
            values: member_type_enums, //faqat shu valuelarni ololadi
            message: "{VALUE} is not among permitted values"// undan boshqa value berilsa shu message chiqadi
        }
    },
    mb_status: {
        type: String,
        required: false,
        default: "ACTIVE",
        enum: {
            values: member_status_enums,
            message: "{VALUE} is not among permitted values"
        }
    },

    mb_address: {
        type: String,
        required: false
    },
    mb_description: {
        type: String,
        required: false
    },
    mb_image: {
        type: String,
        required: false
    },
    mb_point: {
        type: Number,
        required: false,
        default: 0

    },
    mb_top: {
        type: String,
        required: false,
        default: "N",
        enum: {
            values: ordernary_enums,
            message: "{VALUE} is not among permitted values"
        }

    },
    mb_views: {
        type: Number,
        required: false,
        default: 0
    },
    mb_likes: {
        type: Number,
        required: false,
        default: 0
    },
    mb_follow_cnt: {
        type: Number,
        required: false,
        default: 0
    },
    mb_subscriber_cnt: {
        type: Number,
        required: false,
        default: 0
    },

}, { timestamps: true });

module.exports = mongoose.model("Member", memberSchema);//Member desakham avtomatic database "s" qo'shib ko'plikka o'tkazadi