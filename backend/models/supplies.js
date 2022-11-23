import {Schema, model} from "mongoose"

const supplieSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    }
})

export default model("supplies", supplieSchema)