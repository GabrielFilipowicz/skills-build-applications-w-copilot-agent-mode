import { Router, Request, Response } from 'express';

const router = Router();

/**
 * GET /api/activities
 * Get all activities
 */
router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Get all activities', data: [] });
});

/**
 * GET /api/activities/:id
 * Get activity by ID
 */
router.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ message: `Get activity ${id}`, data: {} });
});

/**
 * POST /api/activities
 * Create a new activity
 */
router.post('/', (req: Request, res: Response) => {
  res.json({ message: 'Create new activity', data: {} });
});

/**
 * PUT /api/activities/:id
 * Update activity
 */
router.put('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ message: `Update activity ${id}`, data: {} });
});

/**
 * DELETE /api/activities/:id
 * Delete activity
 */
router.delete('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({ message: `Delete activity ${id}` });
});

export default router;
