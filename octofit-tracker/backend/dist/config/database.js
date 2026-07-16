"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';
const connectDB = async () => {
    try {
        await mongoose_1.default.connect(MONGODB_URI);
        console.log('Connected to MongoDB at localhost:27017');
    }
    catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};
exports.connectDB = connectDB;
const db = mongoose_1.default.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Database connection established');
});
exports.default = db;
