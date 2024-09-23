import express from 'express';
import { mails } from '../Controllers/Mail.controller.js';


const router=express.Router();

router.post("/route", mails )


export default router;