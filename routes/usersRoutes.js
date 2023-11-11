const express = require('express')
const router = express.Router()
const userModel = require ('../models/userModels')

router.post('/register', 
            async(req, res)=>{
                try {
                    const user = 
                    await userModel.create(req.body)
            res
                .status(201)
                .json({
                    sucess: true,
                    data: user 
                })
                } catch (error) {
                    res
                        .status(400)
                        .json({
                            sucess: false,
                            message: error.message
                        })
                    
                }

            })


module.exports = router