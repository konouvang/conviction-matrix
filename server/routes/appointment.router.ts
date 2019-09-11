import { Request, Response } from "express";
import express from 'express';
import pool from '../modules/pool';
import { QueryResult } from "pg";
import moment from 'moment';

const router: express.Router = express.Router();

router.put('/:id', (req: Request, res: Response, next: express.NextFunction): void => {
    console.log(req.body);
    const queryString: string = `UPDATE "gentleman"
                                SET "appointment_type" = $1,
                                "appointment_date" = $2,
                                "appointment_time" = $3
                                WHERE "id" = $4;`;

    const time: string = moment(req.body.appointment_time).format('h:mm:ss a');

    pool.query(queryString, [req.body.appointment_type, req.body.appointment_date, time, req.params.id])
        .then((response: QueryResult): void => {
            res.sendStatus(201);
        })
        .catch((err: QueryResult): void => {
            console.log(`Error updating gentleman: ${err}`);
            res.sendStatus(500);
        })
});


export default router;