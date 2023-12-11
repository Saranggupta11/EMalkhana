import { Schema, model, models } from 'mongoose';


const MalkhanaEntrySchema = new Schema({
        mr_no: {
            type: String,
            unique:true
        },
        fir_no:{
            type: String,
        },
        date_of_fir:{
            type: Date,
        },
        date_of_seizure:{
            type: Date,
        },
        ps_name:{
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
        seized_by_officer:{
            type: String,
        },
        seized_location:{
            type: String,
        },
        ps_receipt_date_time:{
            type: Date,
        },
        owner_name:{
            type: String,
        },
        address_of_owner:{
            type: String,
        },
        
    },
    properties: {
        type: [Schema.Types.ObjectId],
        ref: 'Property',
    },
});




export default models.MalkhanaEntry || model('MalkhanaEntry', MalkhanaEntrySchema);