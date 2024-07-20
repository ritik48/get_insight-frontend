import mongoose, { Document } from "mongoose";

const Schema = mongoose.Schema;

export interface DataDocument extends Document {
    _id: string;
    username: string;
    data_type: "text" | "file";
    text: string;
    url: string;
    filename: string;
    summary: string;
    sentiment: "positive" | "negative" | "neutral";
    keywords: String[];
    createdAt: Date;
}

const dataSchema = new Schema<DataDocument>({
    username: {
        type: String,
        required: true,
    },
    data_type: {
        type: String,
        enum: ["text", "file"],
        required: true,
    },
    text: {
        type: String,
    },
    url: {
        type: String,
    },
    filename: {
        type: String,
    },
    summary: {
        type: String,
    },
    sentiment: {
        type: String,
        enum: ["positive", "negative", "neutral"],
    },
    keywords: {
        type: [String],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Data = mongoose.models.Data || mongoose.model("Data", dataSchema);

export { Data };
