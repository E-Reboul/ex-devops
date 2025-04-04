import { Router } from 'express';
import MathController from '../controllers/Math';

const mathRouter = Router();

mathRouter.get('/add/:a/:b', MathController.add());

export default mathRouter;