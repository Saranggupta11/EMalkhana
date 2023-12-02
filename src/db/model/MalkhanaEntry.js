import { Schema, model, models } from 'mongoose';


const MalkhanaEntrySchema = new Schema({
    malkhana_entry_details: {
        mr_no: {
            type: String,
            required: [true, 'Police Station Name required'],
        },
        fir_no:{
            type: String,
            required: [true, 'Crime Number required'],
            unique: true,
        },
        date_of_fir:{
            type: Date,
            required: [true, 'Date of FIR required'],
        },
        date_of_seizure:{
            type: Date,
            required: [true, 'Date of Seizure required'],
        },
        ps_name:{
            type: String,
            required: [true, 'Police Station Name required'],
        },
        date:{
            type: Date,
            required: [true, 'Date required'],
        },
        state:{
            type: String,
            required: [true, 'State required'],
        },
        district:{
            type: String,
            required: [true, 'District required'],
        }
    },
    basic_details:{
        
    },
    properties: {
        type: [Schema.Types.ObjectId],
        ref: 'Property',
    },
});




export default models.MalkhanaEntry || model('MalkhanaEntry', MalkhanaEntrySchema);