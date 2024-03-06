import { Router } from "express";
import * as userController from './user.controller.js';
const router = Router();
router.get('/',userController.getAllUser);
router.post('/signup',userController.register);
router.post('/login',userController.login);
router.patch('/update',userController.updateUser);
router.delete('/delete',userController.deleteUser);
export default router;