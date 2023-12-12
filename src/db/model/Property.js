import { Schema, model, models } from 'mongoose';


const PropertySchema = new Schema({
    is_disposed:{
        type:Boolean,
        default:false
    },
    property_details: {
        categoryOfProperty: {
            type: String,
        },
        quantity: {
            type: Number,
        },
        belongingToWhom: {
            type: String,
        },
        natureOfProperty: {
            type: String,
        },
        locationOfProperty: {
            type: String,
        },
        photoOfProperty: {
            type: [String],
        },
        propertyDescription: {
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
        byWhom:{
            type: String,
        },
        toWhom:{
            type: String,
        },
        documents:{
            type: [String],
        },
    }],
    disposal_of_property: {
        dateoforder:{
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