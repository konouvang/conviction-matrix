import { Request, Response } from "express";
import express from 'express';
import pool from '../modules/pool';
import { QueryResult } from "pg";

const router: express.Router = express.Router();

router.put('/:id', (req: Request, res: Response, next: express.NextFunction): void => {
    console.log(req.body);
    const queryString: string = `UPDATE "gentleman"
                                SET "height_feet" = $1,
                                "height_inches" = $2,
                                "waist" = $3,
                                "weight" = $4
                                WHERE "id" = $5;`;

    const inches:string = req.body.height_inches ? req.body.height_inches : '0';

    pool.query(queryString, [req.body.height_feet, inches, req.body.waist, req.body.weight, req.params.id])
        .then((response: QueryResult): void => {
            res.sendStatus(201);
        })
        .catch((err: QueryResult): void => {
            console.log(`Error updating gentleman: ${err}`);
            res.sendStatus(500);
        })
});



export default router;