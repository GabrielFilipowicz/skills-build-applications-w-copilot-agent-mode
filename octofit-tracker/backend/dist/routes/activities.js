"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Activity_1 = __importDefault(require("../models/Activity"));
const router = (0, express_1.Router)();
/**
 * GET /api/activities
 * Get all activities
 */
router.get('/', async (req, res) => {
    try {
        const activities = await Activity_1.default.find().populate('user');
        res.json({ message: 'Get all activities', count: activities.length, data: activities });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch activities' });
    }
});
/**
 * GET /api/activities/:id
 * Get activity by ID
 */
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const activity = await Activity_1.default.findById(id).populate('user');
        if (!activity) {
            return res.status(404).json({ error: `Activity ${id} not found` });
        }
        res.json({ message: `Get activity ${id}`, data: activity });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch activity' });
    }
});
/**
 * POST /api/activities
 * Create a new activity
 */
router.post('/', async (req, res) => {
    try {
        const activity = await Activity_1.default.create(req.body);
        res.json({ message: 'Create new activity', data: activity });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to create activity' });
    }
});
/**
 * PUT /api/activities/:id
 * Update activity
 */
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const activity = await Activity_1.default.findByIdAndUpdate(id, req.body, { new: true });
        if (!activity) {
            return res.status(404).json({ error: `Activity ${id} not found` });
        }
        res.json({ message: `Update activity ${id}`, data: activity });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to update activity' });
    }
});
/**
 * DELETE /api/activities/:id
 * Delete activity
 */
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const activity = await Activity_1.default.findByIdAndDelete(id);
        if (!activity) {
            return res.status(404).json({ error: `Activity ${id} not found` });
        }
        res.json({ message: `Delete activity ${id}` });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to delete activity' });
    }
});
exports.default = router;
