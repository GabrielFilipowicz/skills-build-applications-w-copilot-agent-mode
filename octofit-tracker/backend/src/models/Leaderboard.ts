import mongoose, { Schema, Document } from 'mongoose';

export interface ILeaderboardEntry extends Document {
  user: mongoose.Schema.Types.ObjectId;
  team?: mongoose.Schema.Types.ObjectId;
  totalPoints: number;
  totalActivities: number;
  rank: number;
  createdAt: Date;
  updatedAt: Date;
}

const leaderboardSchema = new Schema<ILeaderboardEntry>(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    team: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Team',
      default: null,
    },
    totalPoints: {
      type: Number,
      required: true,
      default: 0,
    },
    totalActivities: {
      type: Number,
      required: true,
      default: 0,
    },
    rank: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<ILeaderboardEntry>('Leaderboard', leaderboardSchema);
