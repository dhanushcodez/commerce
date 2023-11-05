import express from "express";
import { registerController ,
        loginController,
        testController,
} from "../controllers/authControllers.js";
import { requireSignIn,isAdmin } from "../middlewares/authMiddleware.js";
//router object

const router=express.Router()

//routing
//REGISTER || METHOD POST
router.post('/register', registerController);

//LOGIN || POST

//test routes
router.get('/test',requireSignIn,isAdmin,testController)

router.post('/login', loginController);
export default router