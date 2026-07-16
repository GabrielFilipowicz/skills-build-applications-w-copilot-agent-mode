"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
/**
 * GET /api/teams
 * Get all teams
 */
router.get('/', (req, res) => {
    res.json({ message: 'Get all teams', data: [] });
});
/**
 * GET /api/teams/:id
 * Get team by ID
 */
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Get team ${id}`, data: {} });
});
/**
 * POST /api/teams
 * Create a new team
 */
router.post('/', (req, res) => {
    res.json({ message: 'Create new team', data: {} });
});
/**
 * PUT /api/teams/:id
 * Update team
 */
router.put('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Update team ${id}`, data: {} });
});
/**
 * DELETE /api/teams/:id
 * Delete team
 */
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Delete team ${id}` });
});
exports.default = router;
