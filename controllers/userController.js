const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const db = require('../models');
const sequelize = require('sequelize');
const Users = db.users;
const User_rolls = db.user_rolls;


const addUser = async (req,res)=>{
    let transaction;
    try{
        transaction = await db.sequelize.transaction();
        const data = await Users.create(req.body, {transaction});
        await User_rolls.create(req.body, {transaction});

        
        await transaction.commit();
        return res.status(200).json({status:1,message:'Success',data})

    }catch(e){
        if(transaction){
            await transaction.rollback();
        }
        return res.status(500).json({status:0,message:e.message})
    }
}
//res.status(200).json({ message: "Registration successfull", status: 1, code: 200, data: data.dataValues });
module.exports = {
    addUser
}