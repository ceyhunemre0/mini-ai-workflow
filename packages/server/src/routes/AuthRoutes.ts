import { Router } from 'express';
import { AuthController } from '../controllers/AuthControllers';
import { basicAuth } from '../middlewares/BasicAuth';

const router = Router();

router.post('/register', AuthController.register);
router.post('/login', AuthController.login);
router.get('/protected', basicAuth, (req, res) => {
    res.json({ message: 'Bu korumalı bir alandır' });
});

export default router;