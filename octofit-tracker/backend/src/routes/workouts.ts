import { Router, Request, Response } from 'express';

const router = Router();

/**
 * GET /api/workouts
 * Get all workouts
 */
router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Get all workouts', data: [] });
});

/**
 * GET /api/workouts/:id
 * Get workout by ID
 */
router.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ message: `Get workout ${id}`, data: {} });
});

/**
 * POST /api/workouts
 * Create a new workout
 */
router.post('/', (req: Request, res: Response) => {
  res.json({ message: 'Create new workout', data: {} });
});

/**
 * PUT /api/workouts/:id
 * Update workout
 */
router.put('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ message: `Update workout ${id}`, data: {} });
});

/**
 * DELETE /api/workouts/:id
 * Delete workout
 */
router.delete('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ message: `Delete workout ${id}` });
});

export default router;
