import { Request, Response } from "express";
import express from 'express';
import pool from '../modules/pool';
import { QueryResult } from "pg";

const router: express.Router = express.Router();

router.get('/:id', (req: Request, res: Response, next: express.NextFunction): void => {
    const queryString: string = `SELECT * FROM "gentleman"
                                WHERE "id" =$1;`;
    pool.query(queryString, [req.params.id])
        .then((response: QueryResult): void => {
            res.send(response.rows)
        })
        .catch((err: QueryResult): void => {
            console.log(`Error getting gentleman info: ${err}`);
            res.sendStatus(500);
        })
});

router.put('/:id', (req: Request, res: Response, next: express.NextFunction): void => {
    const queryString: string = `UPDATE "gentleman"
                                SET "first_name" = $1,
                                "last_name" = $2,
                                "zip" = $3,
                                "phone" = $4,
                                "email" = $5,
                                "height_feet" = $6,
                                "height_inches" = $7,
                                "waist" = $8,
                                "weight" = $9,
                                "need" = $10
                                WHERE "id" = $11;`;
    pool.query(queryString, [req.body.first_name, req.body.last_name, req.body.zip,
    req.body.phone, req.body.email, req.body.height_feet, req.body.height_inches,
    req.body.waist, req.body.weight, req.body.need, req.params.id])
        .then((response: QueryResult): void => {
            res.sendStatus(201);
        })
        .catch((err: QueryResult): void => {
            console.log(`Error updating gentleman: ${err}`);
            res.sendStatus(500);
        })
});

export default router;