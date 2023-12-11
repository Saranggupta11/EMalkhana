import { Schema, model, models } from 'mongoose';


const PropertySchema = new Schema({
    is_disposed:{
        type:Boolean,
        default:false
    },
    property_details: {
        property_category: {
            type: String,
        },
        quantity: {
            type: Number,
        },
        belonging_to: {
            type: String,
        },
        property_nature: {
            type: String,
        },
        property_location: {
            type: String,
        },
        property_photos: {
            type: [String],
        },
        property_description: {
            type: String,
        },
    },
    chain_of_custody:[{
        date:{
            type: Date,
        },
        time:{
            type: String,
        },
        purpose:{
            type: String,
        },
        io:{
            type: String,
        },
        rank:{
            type: String,
        },
        from:{
            type: String,
        },
        to:{
            type: String,
        },
        by_whom:{
            type: String,
        },
        to_whom:{
            type: String,
        },
        documents:{
            type: [String],
        },
    }],
    disposal_of_property: {
        date:{
            type: Date,
        },
        type:{
            type: String,
        },
        io:{
            type: String,
        },
        rank:{
            type: String,
        },
        documents:{
            type: [String],
        },
        remarks:{
            type: String,
        }
    }
});



export default models.Property || model('Property', PropertySchema);