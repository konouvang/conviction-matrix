import { Request, Response } from "express";
import rejectUnauthenticated from '../modules/authentication-middleware';
import pool from '../modules/pool';
import userStrategy from '../strategies/user.strategy';
import { encryptPassword } from '../modules/encryption';
import { request } from "http";
import { QueryResult } from "pg";
import { placeholder } from "@babel/types";


//Start of MongoDB *****
let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

// Defines HOW Documents will be saved to the Database
let ScoreSchema = mongoose.Schema({
    score : Number,
  });

let Score = mongoose.model("Score", ScoreSchema);


  //GET scores
router.get("/", (req: Request, res: Response): void => {
    //Get all scores
    Score.find(function(err, allScore){
      if(err){
        console.log(err);
        res.sendStatus(500);
      }
      res.send(allScore);
    });
  });

  //Save a new score
router.post("/", (req: Request, res: Response): void => {
    //Instance of the Model to be saved to the database
    let score = new Score();
    score.save(function(err, savedScore){
      if(err){
        console.log(err);
        res.sendStatus(500);
      }
      res.send(savedScore);
    });
  });

  router.delete("/", (req: Request, res: Response) => {
    //Delete a score
    // { "id" : "83275019375918538?"}
    var id = req.body.id;
    Score.findByIdAndRemove(id, function(err, deletedScore){
      /*
        if(undefined){} - False Value
        if("Some Error Code"){} - True Value
      */
  
      if(err){
        console.log(err);
        res.sendStatus(500);
      }
  
      res.send(deletedScore);
    });
  });


  
export default router;  