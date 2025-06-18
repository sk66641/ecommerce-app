import express from 'express';
import {
    registerController,
    loginController,
    testController,              
    forgotPasswordController
        } from '../controllers/authController.js';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';

//router object 
const router = express.Router()

//routing 
//register ||  METHOD POST
router.post('/register',registerController);

// LOGIN || POST
router.post('/login',loginController);

//forgot password || POST
router.post('/forgot-password', forgotPasswordController);

//test  route
router.get('/test',requireSignIn, isAdmin, testController);

//protected admin route auth
router.get('/admin-auth', requireSignIn, isAdmin, (req, res) => {
    res.status(200).send({ ok: true });
});

//protected user route auth
router.get('/user-auth', requireSignIn, (req, res) => {
    res.status(200).send({ ok: true });
});

 

export default router 