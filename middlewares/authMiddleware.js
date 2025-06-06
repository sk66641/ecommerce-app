import JWT from "jsonwebtoken";
import { registerController } from '../controllers/authController';

//protecting routes token base 
export const requireSignIn=async (req, res, next) => {
    
}