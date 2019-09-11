import { Request, Response, response } from "express";
import express from 'express';
import pool from '../modules/pool';
import { QueryResult } from "pg";

const router: express.Router = express.Router();

router.put('/:id', (req: Request, res: Response, next: express.NextFunction): void => {
    const queryString: string = `UPDATE "gentleman"
                                SET "need" = $1
                                WHERE "id" = $2;`;
    pool.query(queryString, [req.body.need, req.params.id])
        .then((response: QueryResult): void => {
            res.sendStatus(201);
        })
        .catch((err: Object): void => {
            console.log(`Error updating gentleman: ${err}`);
            res.sendStatus(500);
        })
});

router.get('/', (req: Request, res: Response, next: express.NextFunction): void => {
    const queryString: string = `SELECT * FROM "categories";`;
    pool.query(queryString)
        .then((response: QueryResult): void => {
            res.send(response.rows)
        })
        .catch((err: Object): void => {
            console.log(`Error getting resources: ${err}`);
            res.sendStatus(500);
        })
});



export default router;