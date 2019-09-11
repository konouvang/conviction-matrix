import { Request, Response } from "express";
import express from 'express';
import pool from '../modules/pool';
import { QueryResult } from "pg";

const router: express.Router = express.Router();

router.post('/', (req: Request, res: Response, next: express.NextFunction): void => {
    const queryString: string = `INSERT INTO "gentleman"
                        ("first_name", "last_name", "zip", "phone", "email")
                        VALUES ($1, $2, $3, $4, $5)
                        RETURNING id;`;
    pool.query(queryString, [req.body.first_name, req.body.last_name, req.body.zip, req.body.phone, req.body.email])
        .then((response: QueryResult): void => {
            res.send((response.rows[0].id).toString());
        })
        .catch((err: QueryResult): void => {
            console.log(`Error posting to gentleman: ${err}`);
            res.sendStatus(500);
        })
});


export default router;