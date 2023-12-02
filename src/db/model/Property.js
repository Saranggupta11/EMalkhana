import { Schema, model, models } from 'mongoose';


const PropertySchema = new Schema({
    property_details: {
        property_category: {
            type: String,
            required: [true, 'Property Category required'],
        },
        quantity: {
            type: Number,
            required: [true, 'Quantity required'],
        },
        belonging_to: {
            type: String,
            required: [true, 'Belonging to required'],
        },
        property_nature: {
            type: String,
            required: [true, 'Property Nature required'],
        },
        property_location: {
            type: String,
            required: [true, 'Property Location required'],
        },
        property_photos: {
            type: [String],
            required: [true, 'Property Photo required'],
        },
        property_description: {
            type: String,
            required: [true, 'Property Description required'],
        },
    },
    chain_of_custody: {
        date:{
            type: Date,
            required: [true, 'Date required'],
        },
        time:{
            type: String,
            required: [true, 'Time required'],
        },
        purpose:{
            type: String,
            required: [true, 'Purpose required'],
        },
        io:{
            type: String,
            required: [true, 'IO required'],
        },
        rank:{
            type: String,
            required: [true, 'Rank required'],
        },
        from:{
            type: String,
            required: [true, 'From required'],
        },
        to:{
            type: String,
            required: [true, 'To required'],
        },
        by_whom:{
            type: String,
            required: [true, 'By Whom required'],
        },
        to_whom:{
            type: String,
            required: [true, 'To Whom required'],
        },
        documents:{
            type: [String],
            required: [true, 'Document required'],
        },
    },
    disposal_of_property: {
        date:{
            type: Date,
            required: [true, 'Date required'],
        },
        type:{
            type: String,
            required: [true, 'Type required'],
        },
        io:{
            type: String,
            required: [true, 'IO required'],
        },
        rank:{
            type: String,
            required: [true, 'Rank required'],
        },
        documents:{
            type: [String],
            required: [true, 'Document required'],
        },
        remarks:{
            type: String,
            required: [true, 'Remarks required'],
        }
    }
});



export default models.Property || model('Property', PropertySchema);