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
        const user_data = req.body;
        const data = await Users.create(user_data, {transaction});
        //console.log("id : ", data.id);
        user_data["user_id"] = data.id;         // add last inserted id of user, to insert it in user_rolls table
        await User_rolls.create(user_data,{transaction});
        await transaction.commit();
        return res.status(200).json({status:1,code:200,message:'User added successfully!',data:user_data});
    }catch(e){
        if(transaction){
            await transaction.rollback();
        }
        return res.status(200).json({status:0,code:500,message:e.message})
    }
}

module.exports = {
    addUser
}