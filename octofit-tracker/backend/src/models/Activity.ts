import mongoose, { Schema, Document } from 'mongoose';

export interface IActivity extends Document {
  user: mongoose.Schema.Types.ObjectId;
  type: string;
  duration: number;
  distance?: number;
  calories?: number;
  points: number;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
}

const activitySchema = new Schema<IActivity>(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    type: {
      type: String,
      required: true,
      enum: ['running', 'cycling', 'swimming', 'walking', 'gym', 'yoga', 'other'],
    },
    duration: {
      type: Number,
      required: true,
    },
    distance: {
      type: Number,
      default: null,
    },
    calories: {
      type: Number,
      default: null,
    },
    points: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<IActivity>('Activity', activitySchema);
