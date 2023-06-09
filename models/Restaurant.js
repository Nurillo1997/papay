const assert = require("assert");
const Definer = require("../lib/mistake");
const { shapeIntoMongooseObjectId } = require("../lib/config");
const MemberModel = require("../schema/member.model");

class Restaurant {
    constructor() {
        this.memberModel = MemberModel;
    }

    async GetAllRestaurantsData() {
        try {
            const result = await this.memberModel
            .find({ 
                mb_type: "RESTAURANT", 
            })
            .exec();

            assert(result, Definer.general_err1);
            return result;
        } catch (err) {
            throw err;
        }
    }

    async updateRestaurantByAdminData (update_data){
        try {
            const id = shapeIntoMongooseObjectId(update_data?.id);

            const result = await this.memberModel
            .findByIdAndUpdate({_id: id}, update_data, 
                {
                    runValidators: true, 
                    lean: true, 
                    returnDocument: "after"}
                ).exec();
                assert.ok(result, Definer.auth_err1);
                return result;
        } catch (err) {
            throw err;
        }
    }
}

module.exports = Restaurant;