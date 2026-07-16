"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
/**
 * GET /api/users
 * Get all users
 */
router.get('/', (req, res) => {
    res.json({ message: 'Get all users', data: [] });
});
/**
 * GET /api/users/:id
 * Get user by ID
 */
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Get user ${id}`, data: {} });
});
/**
 * POST /api/users
 * Create a new user
 */
router.post('/', (req, res) => {
    res.json({ message: 'Create new user', data: {} });
});
/**
 * PUT /api/users/:id
 * Update user
 */
router.put('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Update user ${id}`, data: {} });
});
/**
 * DELETE /api/users/:id
 * Delete user
 */
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Delete user ${id}` });
});
exports.default = router;
