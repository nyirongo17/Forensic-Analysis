import mongoose, { Schema, Document } from "mongoose";

export interface ICamera extends Document {
  name: string;
  address: string;
  port: number;
  manufacturer?: string;
  model?: string;
  lastOnline?: Date;
}

const CameraSchema = new Schema<ICamera>(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    port: { type: Number, required: true },
    manufacturer: { type: String },
    model: { type: String },
    lastOnline: { type: Date },
  },
  { timestamps: true }
);

export default mongoose.model<ICamera>("Camera", CameraSchema);