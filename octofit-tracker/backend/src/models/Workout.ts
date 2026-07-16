import mongoose, { Schema, Document } from 'mongoose';

export interface IWorkout extends Document {
  user: mongoose.Schema.Types.ObjectId;
  name: string;
  description: string;
  exercises: Array<{
    name: string;
    sets: number;
    reps: number;
    duration?: number;
  }>;
  difficulty: string;
  estimatedDuration: number;
  createdAt: Date;
  updatedAt: Date;
}

const workoutSchema = new Schema<IWorkout>(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
    exercises: [
      {
        name: String,
        sets: Number,
        reps: Number,
        duration: Number,
      },
    ],
    difficulty: {
      type: String,
      enum: ['beginner', 'intermediate', 'advanced'],
      required: true,
    },
    estimatedDuration: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<IWorkout>('Workout', workoutSchema);
