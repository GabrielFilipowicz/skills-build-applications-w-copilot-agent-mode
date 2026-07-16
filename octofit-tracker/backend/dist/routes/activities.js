"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
/**
 * GET /api/activities
 * Get all activities
 */
router.get('/', (req, res) => {
    res.json({ message: 'Get all activities', data: [] });
});
/**
 * GET /api/activities/:id
 * Get activity by ID
 */
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Get activity ${id}`, data: {} });
});
/**
 * POST /api/activities
 * Create a new activity
 */
router.post('/', (req, res) => {
    res.json({ message: 'Create new activity', data: {} });
});
/**
 * PUT /api/activities/:id
 * Update activity
 */
router.put('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Update activity ${id}`, data: {} });
});
/**
 * DELETE /api/activities/:id
 * Delete activity
 */
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Delete activity ${id}` });
});
exports.default = router;
