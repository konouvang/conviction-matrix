import { Request, Response } from "express";
import express from 'express';
import pool from '../modules/pool';
import { QueryResult } from "pg";

import { init, initPost }  from '../modules/googlecalendar';

const router: express.Router = express.Router();

const googleObj: any = {
  installed : {
    client_id :"306964752032-ajk7lv9f3bd9bkeolm9rimjn5l0u9phe.apps.googleusercontent.com",
    project_id :"quickstart-1561992545091",
    auth_uri :"https://accounts.google.com/o/oauth2/auth",
    token_uri : "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url : "https://www.googleapis.com/oauth2/v1/certs",
    client_secret : "BoRtSA5AWkYfqohIVxnQo-_Z",
    redirect_uris : ["urn:ietf:wg:oauth:2.0:oob","http://localhost"]
  }
}

router.get('/event', (req: any,res: any) => {
    init(googleObj, res)
});

router.post('/event', (req: any,res: any) => {
  initPost(googleObj, res, req.body)
});

export default router;