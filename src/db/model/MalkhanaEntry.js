import { Schema, model, models } from 'mongoose';


const MalkhanaEntrySchema = new Schema({
        mrNo: {
            type: String,
            unique:true
        },
        firNo:{
            type: String,
        },
        dateOfFir:{
            type: Date,
        },
        dateOfSeizure:{
            type: Date,
        },
        psName:{
            type: String,
        },
        date:{
            type: Date,
        },
        state:{
            type: String,
        },
        district:{
            type: String,
        },
    basic_details:{
        seizedByOfficer:{
            type: String,
        },
        seizedLocation:{
            type: String,
        },
        psReceiptDateTime:{
            type: Date,
        },
        ownerName:{
            type: String,
        },
        addressOfOwner:{
            type: String,
        },
        
    },
    properties: {
        type: [Schema.Types.ObjectId],
        ref: 'Property',
    },
});




export default models.MalkhanaEntry || model('MalkhanaEntry', MalkhanaEntrySchema);