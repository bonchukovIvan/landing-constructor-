import { Router } from 'express'
import landingController from '../controllers/landing-controller.js';


const router = new Router();

router.get('/landing', landingController.createLanding);
router.post('/landing', landingController.updateLanding);
router.get('/download', landingController.returnLanding);
router.delete('/landing', landingController.deleteLanding);

export default router;