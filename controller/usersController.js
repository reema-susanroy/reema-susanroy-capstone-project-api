const knex = require("knex")(require("../knexfile"));

const userLogin = async (req, res) => {
    const {user_name, contact_email, password} = req.body;
    try {
        const checkUser = await knex("users")
        .where({user_name, contact_email, password}).first();

        if(!checkUser){
            return res.status(404).json({error: `User with email ${req.params.id} not found. Kindly register` });
        }
        res.status(200).json({message : 'Login Successful',checkUser });

    } catch (error) {
        res.status(500).json({error : "Internal server error"});
    }
};

const userRegister = async (req, res) => {
    const {user_name, contact_email, password} = req.body;
    try {
        const checkUser = await knex("users")
        .where({user_name, contact_email, password});
        if(checkUser.length===0){
            const addUSer = await knex("users")
                .insert(req.body);

                return res.status(200).json({message : 'Registered Successful',addUSer });
        }
        res.status(404).json({message : 'User already registered' });

    } catch (error) {
        res.status(500).json({error : "Internal server error"});
    }
};

module.exports = {
    userLogin,
    userRegister
}