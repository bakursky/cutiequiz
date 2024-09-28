import { model, models, Schema } from 'mongoose';

const PageSchema = new Schema({
    uri: {type: String, required: true, min: 1, unique: true},
    owner: {type: String, required: true},
    
    bio: {type: String, default: ''},
    
    q1: {type: String, default: ''},
    q2: {type: String, default: ''},
    q3: {type: String, default: ''},
    q4: {type: String, default: ''},
    q5: {type: String, default: ''},
    q6: {type: String, default: ''},
    q7: {type: String, default: ''},
    q8: {type: String, default: ''},
    q9: {type: String, default: ''},
    q10: {type: String, default: ''},
    q11: {type: String, default: ''},
    q12: {type: String, default: ''},
    q13: {type: String, default: ''},
    q14: {type: String, default: ''},
    q15: {type: String, default: ''},
    q16: {type: String, default: ''},
    q17: {type: String, default: ''},
    q18: {type: String, default: ''},
    q19: {type: String, default: ''},
    q20: {type: String, default: ''},
    q21: {type: String, default: ''},
    q22: {type: String, default: ''},
    q23: {type: String, default: ''},
    q24: {type: String, default: ''},
    q25: {type: String, default: ''},
    q26: {type: String, default: ''},
    q27: {type: String, default: ''},


}, {timestamps: true})

export const Page = models?.Page || model('Page', PageSchema)