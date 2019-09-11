import { Request, Response } from "express";
import express from 'express';
import rejectUnauthenticated from '../modules/authentication-middleware';
import pool from '../modules/pool';
import userStrategy from '../strategies/user.strategy';
import { encryptPassword } from '../modules/encryption';
import { request } from "http";
import { QueryResult } from "pg";
import { placeholder } from "@babel/types";

const router: express.Router = express.Router();

router.get('/', rejectUnauthenticated, (req: Request, res: Response): void => {
    res.send(req.user);
});



router.get('/dashboard', rejectUnauthenticated, (req: Request, res: Response): void => {
    const queryText: string = `SELECT * FROM "resources";`;
    if (req.isAuthenticated()) {
        pool.query(queryText)
            .then(results => res.send(results.rows))
            .catch((err: QueryResult): void => {
                console.log(`Error getting from resources: ${err}`);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403);
    }
});



router.post('/register', (req: Request, res: Response, next: express.NextFunction): void => {
    const username: string | null = <string>req.body.username;
    const password: string | null = encryptPassword(req.body.password);

    const queryText: string = `INSERT INTO "admin" (first_name, last_name, email, password) VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [req.body.first_name, req.body.last_name, req.body.email, password])
        .then((response: QueryResult): void => {
            res.sendStatus(201);
        })
        .catch((err: QueryResult): void => {
            console.log(`Error saving user to database: ${err}`);
            res.sendStatus(500);
        });
});

router.post('/login', userStrategy.authenticate('local'), (req: Request, res: Response): void => {
    res.sendStatus(200);
});

router.post('/logout', (req: Request, res: Response): void => {
    req.logout();
    res.sendStatus(200);
});

//THE FOLLOWING ROUTES DEAL WITH THE APPOINTMENTS AND RESOURCES ON THE ADMIN DASHBOARD
router.get('/appointments', rejectUnauthenticated, (req: Request, res: Response, next: express.NextFunction): void => {
    const queryString: string = `SELECT * FROM "gentleman";`;
    if (req.isAuthenticated()) {
        pool.query(queryString)
            .then((response: QueryResult): void => {
                res.send(response.rows)
            })
            .catch((err: QueryResult): void => {
                console.log(`Error getting gentleman info: ${err}`);
                res.sendStatus(500);
            })
    } else {
        res.sendStatus(403)
    }
});

router.post('/', (req: Request, res: Response): void => {
    let queryString: string = `INSERT INTO "resources" (title, description, link) VALUES ($1, $2, $3)
                                RETURNING id;`;
    if (req.isAuthenticated()) {
        pool.query(queryString, [req.body.title, req.body.description, req.body.link])
            .then((response: QueryResult): void => {
                queryString = `SELECT * FROM "categories"
                                WHERE "category_name" = 'other';`;

                pool.query(queryString)
                    .then((responseCat: QueryResult) => {
                        let defaultCategory: string = responseCat.rows[0].id;

                        queryString = `INSERT INTO "resources_categories" (resources_id, categories_id)
                                    VALUES ($1, $2);`;

                        if(req.body.category !== 'default'){
                            defaultCategory = req.body.category;
                        }

                        pool.query(queryString, [response.rows[0].id, defaultCategory])
                            .then((response: QueryResult): void => {
                                res.sendStatus(200);
                            })
                            .catch((err: QueryResult): void => {
                                console.log(`Error adding resource: ${err}`);
                                res.sendStatus(500);
                            })
                    })
                    .catch((err: QueryResult) => {
                        console.log(`Error adding resource: ${err}`);
                        res.sendStatus(500);
                    });
            })
            .catch((err: QueryResult): void => {
                console.log(`Error adding resource ${err}`);
                res.sendStatus(500);
            })
    } else {
        res.sendStatus(403);
    }
});

router.put('/:id', (req: Request, res: Response, next: express.NextFunction): void => {
    let queryString: string = `UPDATE "resources"
                                SET "title" = $1,
                                "description" = $2,
                                "link" = $3
                                WHERE "id" = $4;`;
    if (req.isAuthenticated()) {
        pool.query(queryString, [req.body.title, req.body.description, req.body.link, req.params.id])
            .then((response: QueryResult): void => {
                queryString = `UPDATE "resources_categories" SET "categories_id" = $1
                            WHERE "resources_id" = $2
                            AND "categories_id" = $3;`;
                pool.query(queryString, [req.body.categories_id, req.params.id, req.body.prevCategoriesId])
                    .then((response: QueryResult): void => {
                        res.sendStatus(201);
                    })
                    .catch((err: QueryResult): void => {
                        console.log(`Error updating resource ${err}`);
                        res.sendStatus(500);
                    })
            })
            .catch((err: QueryResult): void => {
                console.log(`Error updating resource ${err}`);
                res.sendStatus(500);
            })
    } else {
        res.sendStatus(403);
    }
});

router.delete('/:id', (req: Request, res: Response, next: express.NextFunction): void => {
    let queryString: string = `DELETE FROM "resources_categories" WHERE "resources_id" = $1;`;
    const id = req.params.id;

    if (req.isAuthenticated()) {
        pool.query(queryString, [id])
            .then((response: QueryResult): void => {
                console.log(`DELETE RESOURCE JOIN`)
                queryString = `DELETE FROM "resources" WHERE "id" = $1;`;
                pool.query(queryString, [id])
                    .then((response: QueryResult): void => {
                        console.log(`DELETE RESOURCE`)
                        res.send(200);
                    })
                    .catch((err: QueryResult): void => {
                        console.log(`Error deleting resource: ${err}`);
                        res.sendStatus(500);
                    })
            })
            .catch((err: QueryResult): void => {
                console.log(`Error deleting resource: ${err}`);
                res.sendStatus(500);
            })
    } else {
        res.sendStatus(403);
    }
});

export default router;