import JWT from "jsonwebtoken";
import {registerController} from '../controllers/authController.js';

//protecting routes token base 
export const requireSignIn=async (req, res, next) => {
   try{
     const decode =JWT.verify(req.headers.authorization, process.env.JWT_SECRET)
    next();
   }catch (error) {
       console.log(error);
       res.status(401).send({
           success: false,
           message: 'Unauthorized Access',
           error
       });
   }

}