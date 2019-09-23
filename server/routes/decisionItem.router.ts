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
let DecisionItemSchema = mongoose.Schema({
    decision : String,
  });

let DecisionItem = mongoose.model("DecisionItem", DecisionItemSchema);


  //GET decisionItems
router.get("/", (req: Request, res: Response): void => {
    //Get all decisionItems
    DecisionItem.find(function(err, allDecisionItem){
      if(err){
        console.log(err);
        res.sendStatus(500);
      }
      res.send(allDecisionItem);
    });
  });

  //Save a new decisionItem
router.post("/", (req: Request, res: Response): void => {
    //Instance of the Model to be saved to the database
    let decisionItem = new DecisionItem();
    decisionItem.save(function(err, savedDecisionItem){
      if(err){
        console.log(err);
        res.sendStatus(500);
      }
      res.send(savedDecisionItem);
    });
  });

  router.delete("/", (req: Request, res: Response) => {
    //Delete a decisionItem
    // { "id" : "83275019375918538?"}
    var id = req.body.id;
    DecisionItem.findByIdAndRemove(id, function(err, deletedDecisionItem){
      /*
        if(undefined){} - False Value
        if("Some Error Code"){} - True Value
      */
  
      if(err){
        console.log(err);
        res.sendStatus(500);
      }
  
      res.send(deletedDecisionItem);
    });
  });


  
export default router;