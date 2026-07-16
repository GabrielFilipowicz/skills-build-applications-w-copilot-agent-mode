import { Router, Request, Response } from 'express';
import Activity from '../models/Activity';

const router = Router();

/**
 * GET /api/activities
 * Get all activities
 */
router.get('/', async (req: Request, res: Response) => {
  try {
    const activities = await Activity.find().populate('user');
    res.json({ message: 'Get all activities', count: activities.length, data: activities });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch activities' });
  }
});

/**
 * GET /api/activities/:id
 * Get activity by ID
 */
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const activity = await Activity.findById(id).populate('user');
    if (!activity) {
      return res.status(404).json({ error: `Activity ${id} not found` });
    }
    res.json({ message: `Get activity ${id}`, data: activity });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch activity' });
  }
});

/**
 * POST /api/activities
 * Create a new activity
 */
router.post('/', async (req: Request, res: Response) => {
  try {
    const activity = await Activity.create(req.body);
    res.json({ message: 'Create new activity', data: activity });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create activity' });
  }
});

/**
 * PUT /api/activities/:id
 * Update activity
 */
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const activity = await Activity.findByIdAndUpdate(id, req.body, { new: true });
    if (!activity) {
      return res.status(404).json({ error: `Activity ${id} not found` });
    }
    res.json({ message: `Update activity ${id}`, data: activity });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update activity' });
  }
});

/**
 * DELETE /api/activities/:id
 * Delete activity
 */
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const activity = await Activity.findByIdAndDelete(id);
    if (!activity) {
      return res.status(404).json({ error: `Activity ${id} not found` });
    }
    res.json({ message: `Delete activity ${id}` });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete activity' });
  }
});

export default router;
