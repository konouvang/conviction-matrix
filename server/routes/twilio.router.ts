import { Request, Response } from "express";
import express from 'express';
import { textGentleman } from '../modules/textGentleman';
import moment from 'moment'

const router: express.Router = express.Router();

router.post('/confirm/text', (req: Request, res: Response, next: express.NextFunction): void => {
    textGentleman(req.body.phoneNumber,
        `Thank you! Your SuitsforHire appointment is at ${moment(req.body.appointmentTime, 'HH:mm:ss').format(`h:mm a`)} on ${moment(req.body.appointmentDate).format(`MMMM Do YYYY`)}.`
    );
    res.send(200);
});



export default router;