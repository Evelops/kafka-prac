import express, { Express, Request, Response, NextFunction, Router } from 'express';


const router: Router = express.Router();

router.post('/event:event', (req: Request, res: Response, next: NextFunction) => {
  res.send('request:'+ req.params.event + "\n");
  try {
  } catch (error) {
    next(error);
  }
});

export default router;
