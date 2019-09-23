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
let WeightFactorSchema = mongoose.Schema({
    decision : String,
  });

let WeightFactor = mongoose.model("WeightFactor", WeightFactorSchema);


  //GET factorWeights
router.get("/", (req: Request, res: Response): void => {
    //Get all factorWeights
    WeightFactor.find(function(err, allWeightFactor){
      if(err){
        console.log(err);
        res.sendStatus(500);
      }
      res.send(allWeightFactor);
    });
  });

  //Save a new factorWeight
router.post("/", (req: Request, res: Response): void => {
    //Instance of the Model to be saved to the database
    let factorWeight = new WeightFactor();
    factorWeight.save(function(err, savedWeightFactor){
      if(err){
        console.log(err);
        res.sendStatus(500);
      }
      res.send(savedWeightFactor);
    });
  });

  router.delete("/", (req: Request, res: Response) => {
    //Delete a factorWeight
    // { "id" : "83275019375918538?"}
    var id = req.body.id;
    WeightFactor.findByIdAndRemove(id, function(err, deletedWeightFactor){
      /*
        if(undefined){} - False Value
        if("Some Error Code"){} - True Value
      */
  
      if(err){
        console.log(err);
        res.sendStatus(500);
      }
  
      res.send(deletedWeightFactor);
    });
  });


  
export default router;