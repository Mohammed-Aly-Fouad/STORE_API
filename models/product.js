import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'product name must be provided'], // Fixed spelling
    },
    price: {
        type: Number,
        required: [true, 'product price must be provided'], // Fixed spelling
    },
    featured: {
        type: Boolean,
        default: false,
    },
    rating: {
        type: Number,
        default: 4.5,
    },
    createdAt: {
        type: Date,
        default: Date.now, // Fixed: removed () to call it only on creation
    },
    company: {
        type: String,
        enum: {
            values: ['ikea', 'liddy', 'caressa', 'marcos'],
            message: '{VALUE} is not supported',
        },
    },
});

// Turn the Schema into a Model and export it
export default mongoose.model('Product', productSchema);