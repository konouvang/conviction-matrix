import { Request, Response } from "express";
import express from 'express';
import pool from '../modules/pool';
import { QueryResult } from "pg";

const router: express.Router = express.Router();

router.get('/', (req: Request, res: Response, next: express.NextFunction): void => {
    const queryString: string = `SELECT * FROM "resources"
                                JOIN "resources_categories" ON "resources_categories"."resources_id"="resources"."id"
                                JOIN "categories" ON "categories"."id" = "resources_categories"."categories_id"
                                ORDER BY "resources"."id" ASC;`;
    pool.query(queryString)
        .then((response: QueryResult): void => {
            res.send(response.rows)
        })
        .catch((err: QueryResult): void => {
            console.log(`Error getting resources: ${err}`);
            res.sendStatus(500);
        })
});

//Filter for Resources Page based on User's Need
router.get('/:need', (req: Request, res: Response, next: express.NextFunction): void => {
    const queryString: string = `SELECT * FROM "resources"
                                JOIN "resources_categories" ON "resources"."id"="resources_categories"."resources_id"
                                JOIN "categories" ON "resources_categories"."categories_id" = "categories"."id"
                                WHERE "categories"."category_name" = $1;`;
    pool.query(queryString, [req.params.need])
        .then((response: QueryResult): void => {
            res.send(response.rows)
        })
        .catch((err: QueryResult): void => {
            console.log(`Error getting resources from table: ${err}`);
            res.sendStatus(500);
        })
});




export default router;